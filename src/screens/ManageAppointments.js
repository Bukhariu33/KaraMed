import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment"; // You can use this library to format the date
import styles, {MAIN_COLOR} from "../componentts/styles";


const ManageAppointments = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [date, setDate] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [appointmentData, setAppointmentData] = useState([]);
  const [processing, setProcessing] = useState(false); // To manage processing state

  useEffect(() => {
    // Load appointments when the component is mounted
    LoadAppointments(moment().format("YYYY-MM-DD"));
  }, []);

  const FormatDate = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };

  const LoadAppointments = async (d) => {
    setLoading(true);
    try {
      // Simulate an API call to fetch appointments
      const fetchedAppointments = [
        // Sample data
        {
          CustomerName: "John Doe",
          CustomerImage: null,
          Reason: "Urgent",
          From: "10:00 AM",
          To: "11:00 AM",
          CustomerId: "123",
          CustomerToken: "abc123",
          CustomerEmail: "johndoe@example.com",
        },
        // Add more appointment data here
      ];
      setAppointmentData(fetchedAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
    setLoading(false);
  };

  const handleTimeConfirm = (d) => {
    setIsVisible(false);
    setSelectedDate(d);
    d = FormatDate(d);
    setDate(d);
    LoadAppointments(d); // Load appointments based on the selected date
  };

  const changeStatus = async (customerId, customerToken, customerEmail) => {
    setProcessing(true);
    try {
      // Simulate API call to change the status of the appointment
      // API call can go here to update the status
      console.log(`Marking appointment for customer ID: ${customerId} as complete`);
      // After successful completion, remove from the list or mark as completed
    } catch (error) {
      console.error("Error updating status:", error);
    }
    setProcessing(false);
  };

  return (
    <View style={styles.container_bg}>
      <View style={styles.home_header}>
        <View style={styles.align_items_center}>
          <TouchableOpacity style={styles.btn_menu} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" style={styles.btn_menu_icon} />
          </TouchableOpacity>
          <Text style={styles.header_name}>Appointment Requests</Text>
        </View>
      </View>
      <View style={styles.home_hero}>
        <View style={styles.hero_detail}>
          <View style={[styles.justify_content_center, styles.mv_2, { alignItems: "flex-start" }]}>
            <View>
              <Text style={[styles.text_white, styles.label]}>Date</Text>
              <Pressable
                style={styles.input_container}
                onPress={() => {
                  setIsVisible(!isVisible);
                }}
              >
                <Feather name="calendar" style={styles.white_icon} />
                <TextInput
                  editable={false}
                  style={styles.input}
                  placeholderTextColor={"#111"}
                  placeholder={date || "Select Date"}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        date={selectedDate}
        is24Hour={true}
        onConfirm={handleTimeConfirm}
        onCancel={() => setIsVisible(false)}
      />

      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 10 }}>
        <View style={styles.mt_4}>
          <View style={{ alignItems: "center" }}>
            {loading ? (
              <ActivityIndicator size={"large"} color={MAIN_COLOR} />
            ) : appointmentData.length ? (
              appointmentData.map((a, index) => {
                return (
                  <View style={styles.appointment_card} key={index}>
                    <View style={styles.align_items_center}>
                      <View style={styles.online_doctor_profile}>
                        {a.CustomerImage ? (
                          <Image
                            source={{ uri: a.CustomerImage }}
                            style={styles.online_doctor_image}
                          />
                        ) : (
                          <Feather name="user" style={styles.online_doctor_profile_icon} />
                        )}
                      </View>
                      <View style={styles.ml_1}>
                        <Text style={styles.appointment_card_name}>{a.CustomerName}</Text>
                        <Text style={styles.appointment_card_detail}>
                          {a.Reason === "Urgent"
                            ? "Urgent Consultation"
                            : `Time: ${a.From} to ${a.To}`}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.mt_1}>
                      <Text style={[styles.text_13, styles.text_semi]}>Reason</Text>
                      <Text style={styles.appointment_card_detail}>{a.Reason}</Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.justify_content_between}>
                      <TouchableOpacity style={[styles.appointment_card_button, styles.appointment_card_button_call]}>
                        <Text style={styles.appointment_card_button_text}>AUDIO CALL</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={[styles.appointment_card_button, styles.appointment_card_button_call]}>
                        <Text style={styles.appointment_card_button_text}>VIDEO CALL</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.appointment_card_button}
                        onPress={async () => {
                          let sender = await AsyncStorage.getItem("UserId");
                          let avatar =
                            (await AsyncStorage.getItem("UserImage")) ||
                            "https://freesvg.org/img/publicdomainq-0006224bvmrqd.png";
                          navigation.navigate("Chat", {
                            sender: sender,
                            avatar: avatar,
                            uid: a.CustomerId,
                            name: a.CustomerName,
                            image: a.CustomerImage,
                          });
                        }}
                      >
                        <Feather name="message-square" style={styles.appointment_card_button_icon} />
                        <Text style={styles.appointment_card_button_text}>Chat Now</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.appointment_card_button}
                        onPress={async () => {
                          let sender = await AsyncStorage.getItem("UserId");
                          navigation.navigate("Prescriptions", { sender, receiver: a.CustomerId });
                        }}
                      >
                        <Text style={styles.doctor_btn_footer_text}>
                          <Feather name={"file"} /> Reports
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      style={[styles.appointment_card_button, { width: "100%" }]}
                      onPress={() => changeStatus(a.CustomerId, a.CustomerToken, a.CustomerEmail)}
                    >
                      <Entypo name="check" style={styles.appointment_card_button_icon} />
                      <Text style={styles.appointment_card_button_text}>
                        {processing ? "Processing..." : "Mark As Complete"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })
            ) : (
              <View style={styles.justify_content_center}>
                <Text style={[styles.text_15, styles.text_semi]}>No Appointment Found !!</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.mt_2} />
      </ScrollView>
    </View>
  );
};

export default ManageAppointments;
