import { View, Text, TouchableOpacity, Pressable, TextInput, ScrollView, Image, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles, { MAIN_COLOR } from '../componentts/styles';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const PaymentHistory = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [date, setDate] = useState('Select Date');
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [appointmentData, setAppointmentData] = useState([]);
  const [paymentData, setPaymentData] = useState([]);

  // Dummy payment and appointment data
  const dummyPaymentData = [
    { TotalAmount: 1000, Paid: 750, Today: 50 },
  ];

  const dummyAppointmentData = [
    {
      CustomerName: 'John Doe',
      Date: '2024-09-15',
      From: '10:00 AM',
      To: '11:00 AM',
      Reason: 'Consultation',
      Amount: 100,
      Image: '',
    },
    {
      CustomerName: 'Jane Smith',
      Date: '2024-09-16',
      From: '2:00 PM',
      To: '3:00 PM',
      Reason: 'Follow-up',
      Amount: 150,
      Image: '',
    },
  ];

  // Fetch payment and appointment data (dummy data in this case)
  const fetchData = (selectedDate = null) => {
    setLoading(true);
    setTimeout(() => {
      setPaymentData(dummyPaymentData);
      setAppointmentData(dummyAppointmentData);
      setLoading(false);
    }, 1000); // Simulate a loading time of 1 second
  };

  // Handle date picker confirmation
  const handleDateConfirm = (selectedDate) => {
    setIsVisible(false);
    const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
    setDate(formattedDate);
    fetchData(formattedDate); // Fetch data for the selected date (if necessary)
  };

  // Load initial data when the component mounts
  useEffect(() => {
    fetchData(); // Fetch initial data without a specific date
  }, []);

  return (
    <View style={styles.container_bg}>
      {/* Header Section */}
      <View style={styles.home_header}>
        <View style={styles.align_items_center}>
          <TouchableOpacity style={styles.btn_menu} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" style={styles.btn_menu_icon} />
          </TouchableOpacity>
          <Text style={styles.header_name}>Payment History</Text>
        </View>
      </View>

      {/* Hero Section */}
      <View style={styles.home_hero}>
        <View style={styles.hero_detail}>
          <View>
            <Text style={[styles.text_17, styles.text_white, styles.text_semi]}>
              Till Date&nbsp;: ${paymentData.length ? paymentData[0].TotalAmount : '0'}
            </Text>
            <Text style={[styles.text_15, styles.text_white, styles.text_medium]}>
              Balance&nbsp;&nbsp;&nbsp;: ${paymentData.length ? paymentData[0].TotalAmount - paymentData[0].Paid : '0'}
            </Text>
            <Text style={[styles.text_15, styles.text_white, styles.text_medium]}>
              Today&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${paymentData.length ? paymentData[0].Today : '0'}
            </Text>
          </View>
          <View style={[styles.justify_content_center, styles.mv_2, { alignItems: 'flex-start' }]}>
            <View>
              <Text style={[styles.text_white, styles.label]}>Date</Text>
              <Pressable
                style={styles.input_container}
                onPress={() => {
                  setIsVisible(!isVisible);
                }}
              >
                <Feather name="calendar" style={styles.white_icon} />
                <TextInput editable={false} style={styles.input} placeholderTextColor={'#111'} placeholder={date} />
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {/* Scrollable Appointment List */}
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 10 }}>
        <View style={styles.mt_4} />
        {loading ? (
          <View style={styles.mt_3}>
            <ActivityIndicator size="large" color={MAIN_COLOR} />
          </View>
        ) : (
          <View style={{ alignItems: 'center' }}>
            {appointmentData.length ? (
              appointmentData.map((a, index) => (
                <View key={index} style={styles.appointment_card}>
                  <View style={styles.align_items_center}>
                    <Image
                      source={{
                        uri: a.Image
                          ? `https://your-image-link.com/${a.Image}`
                          : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png',
                      }}
                      style={styles.appointment_card_image}
                    />
                    <View style={styles.ml_1}>
                      <Text style={styles.appointment_card_name}>{a.CustomerName}</Text>
                      <Text style={styles.appointment_card_detail}>
                        Dated: {a.Date} ( {a.From} to {a.To} )
                      </Text>
                    </View>
                  </View>
                  <View style={styles.mt_1}>
                    <Text style={[styles.text_13, styles.text_semi]}>Reason</Text>
                    <Text style={styles.appointment_card_detail}>{a.Reason}</Text>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.justify_content_end}>
                    <Text style={[styles.text_16, styles.text_semi]}>Fee : ${a.Amount}</Text>
                  </View>
                </View>
              ))
            ) : (
              <View style={styles.justify_content_center}>
                <Text style={[styles.text_15, styles.text_semi, styles.mt_3]}>No Record Found !!</Text>
              </View>
            )}
          </View>
        )}
        <View style={styles.mt_2} />
      </ScrollView>

      {/* Date Picker Modal */}
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={() => setIsVisible(false)}
      />
    </View>
  );
};

export default PaymentHistory;
