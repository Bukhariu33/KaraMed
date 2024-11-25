import { View, Text, TouchableOpacity, Pressable, TextInput, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import styles, { MAIN_COLOR, SECOND_COLOR } from '../componentts/styles'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'; // You can use this library to format the date
import AsyncStorage from '@react-native-async-storage/async-storage';

const Appointments = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [date, setDate] = useState(''); // Stores the formatted date
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);

  // Dummy appointment data
  const [appointmentData, setAppointmentData] = useState([
    {
      CustomerName: 'John Doe',
      CustomerImage: null,
      Reason: 'Urgent',
      From: '10:00 AM',
      To: '10:30 AM',
      CustomerId: '12345',
      cususer: 'customer123',
      CustomerToken: 'token123',
      CustomerEmail: 'john@example.com'
    },
    {
      CustomerName: 'Jane Smith',
      CustomerImage: null,
      Reason: 'Routine Checkup',
      From: '11:00 AM',
      To: '11:30 AM',
      CustomerId: '54321',
      cususer: 'customer543',
      CustomerToken: 'token543',
      CustomerEmail: 'jane@example.com'
    },
  ]);

  // Function to handle the date selected from the picker
  const handleTimeConfirm = (date) => {
    setIsVisible(false); // Hide the picker after selection
    setSelectedDate(date); // Store the selected date
    setDate(moment(date).format('DD/MM/YYYY')); // Format the date and update the input placeholder
  };

  // Simulate marking appointment as complete
  const changeStatus = (appointmentId, customerToken, customerEmail) => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      alert(`Appointment ${appointmentId} marked as complete!`);
    }, 1500);
  };

  return (
    <View style={styles.container_bg}>
      <View style={styles.home_header}>
        <View style={styles.align_items_center}>
          <TouchableOpacity style={styles.btn_menu} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" style={styles.btn_menu_icon} />
          </TouchableOpacity>
          <Text style={styles.header_name}>Appointments List</Text>
        </View>
      </View>

      <View style={styles.home_hero}>
        <View style={styles.hero_detail}>
          <View style={[styles.justify_content_center, styles.mv_2, { alignItems: "flex-start" }]}>
            <View>
              <Text style={[styles.text_white, styles.label]}>Date</Text>
              <Pressable style={styles.input_container} onPress={() => {
                setIsVisible(!isVisible);
              }}>
                <Feather name="calendar" style={styles.white_icon} />
                <TextInput 
                  editable={false} 
                  style={styles.input} 
                  placeholderTextColor={'#111'}
                  placeholder={date || 'Select a date'} // Show the selected date or placeholder
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {/* Date Picker */}
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        date={selectedDate}
        is24Hour={true}
        onConfirm={handleTimeConfirm} // Triggered when the user selects a date
        onCancel={() => setIsVisible(false)} // Hide the picker if the user cancels
      />

      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 10 }}>
        <View style={styles.mt_4}>
          <View style={{ alignItems: "center" }}>
            { loading ? (
                <ActivityIndicator size={"large"} color={MAIN_COLOR} />
              ) : (
                appointmentData.length ? (
                  appointmentData.map((a, index) => {
                    return (
                      <View style={styles.appointment_card} key={index}>
                        <View style={styles.align_items_center}>
                          <View style={styles.online_doctor_profile}>
                            { a.CustomerImage ? (
                                <Image source={require('../../assets/images/live.png')} style={styles.online_doctor_image} />
                              ) : (
                                <Feather name="user" style={styles.online_doctor_profile_icon} />
                              )
                            }
                          </View>
                          <View style={styles.ml_1}>
                            <Text style={styles.appointment_card_name}>{a.CustomerName}</Text>
                            <Text style={styles.appointment_card_detail}>
                              {a.Reason === "Urgent" ? "Urgent Consultation" : `Time: ${a.From} to ${a.To}`}
                            </Text>
                          </View>
                        </View>

                        <View style={styles.mt_1}>
                          <Text style={[styles.text_13, styles.text_semi]}>Reason</Text>
                          <Text style={styles.appointment_card_detail}>{a.Reason}</Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.justify_content_between}>
                          {/* Audio Call Button (Placeholder) */}
                          <TouchableOpacity style={[styles.appointment_card_button, styles.appointment_card_button_call]}>
                            <Text style={styles.appointment_card_button_text}>AUDIO CALL</Text>
                          </TouchableOpacity>

                          {/* Video Call Button (Placeholder) */}
                          <TouchableOpacity style={[styles.appointment_card_button, styles.appointment_card_button_call]}>
                            <Text style={styles.appointment_card_button_text}>VIDEO CALL</Text>
                          </TouchableOpacity>

                          {/* Chat Button */}
                          <TouchableOpacity style={styles.appointment_card_button} onPress={async () => {
                            let sender = await AsyncStorage.getItem("UserId");
                            let avatar = await AsyncStorage.getItem("UserImage") || 'https://freesvg.org/img/publicdomainq-0006224bvmrqd.png';
                            navigation.navigate("Chat", {
                              sender: sender,
                              avatar: avatar,
                              uid: a.CustomerId,
                              name: a.CustomerName,
                              image: a.CustomerImage
                            });
                          }}>
                            <Feather name="message-square" style={styles.appointment_card_button_icon} />
                            <Text style={styles.appointment_card_button_text}>Chat Now</Text>
                          </TouchableOpacity>

                          {/* Reports Button */}
                          <TouchableOpacity style={styles.appointment_card_button} onPress={async () => {
                            let sender = await AsyncStorage.getItem("UserId");
                            navigation.navigate("Prescriptions", { sender, receiver: a.CustomerId });
                          }}>
                            <Text style={styles.doctor_btn_footer_text}>
                              <Feather name={'file'} /> Reports
                            </Text>
                          </TouchableOpacity>
                        </View>

                        {/* Mark As Complete Button */}
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
                )
              )
            }
          </View>
        </View>
        <View style={styles.mt_2} />
      </ScrollView>
    </View>
  );
};

export default Appointments;
