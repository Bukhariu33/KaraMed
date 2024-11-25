import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
    TextInput,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import React, { useState } from 'react';
import styles, { MAIN_COLOR } from '../componentts/styles';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ManageAvailability = ({ navigation }) => {
    // State variables for time slots, loading, price, and date selection
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleTime, setIsVisibleTime] = useState(false);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(false);
    const [timingData, setTimingData] = useState([
        { From: '10:00 AM', To: '11:00 AM' },
        { From: '12:00 PM', To: '01:00 PM' },
        { From: '02:00 PM', To: '03:00 PM' }
    ]);
    const [type, setType] = useState('');

    // Dummy handleTimeConfirm for DateTimePicker
    const handleTimeConfirm = (date) => {
        setIsVisible(false);
        setSelectedDate(date);
    };

    // Function to handle slot confirmation
    const submitHandle = () => {
        if (from && to && price) {
            const newSlot = { From: from, To: to, Price: price };
            setTimingData([...timingData, newSlot]);
            setFrom('');
            setTo('');
            setPrice('');
        } else {
            alert('Please fill all fields.');
        }
    };

    return (
        <View style={styles.container_bg}>
            <View style={styles.home_header}>
                <View style={styles.align_items_center}>
                    <TouchableOpacity style={styles.btn_menu} onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" style={styles.btn_menu_icon} />
                    </TouchableOpacity>
                    <Text style={styles.header_name}>Manage Availability</Text>
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
                                <TextInput editable={false} style={styles.input} placeholderTextColor={'#111'}
                                    placeholder={selectedDate.toDateString()} />
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
                <View style={styles.mt_4} />
                <View style={styles.while_card}>
                    <View style={{ width: "100%" }}>
                        <Text style={[styles.text_16, styles.text_semi]}>Today's Slots</Text>
                    </View>
                    <View style={styles.slots_container}>
                        {
                            loading ? (
                                <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
                                    <ActivityIndicator size={"large"} color={MAIN_COLOR} />
                                </View>
                            ) : timingData.length ? (
                                timingData.map((t, index) => (
                                    <View style={styles.slot_card} key={index}>
                                        <Text style={[styles.slot_card_text, styles.text_13]}>{t.From} to {t.To}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text style={[styles.mt_3, styles.text_semi, styles.text_13]}>
                                    No slots available for selected date!
                                </Text>
                            )
                        }
                    </View>
                </View>

                <View style={styles.while_card}>
                    <View style={[styles.auth_form]}>
                        <View>
                            <Text style={[styles.text_grey, styles.label]}>From</Text>
                            <Pressable style={styles.form_container} onPress={() => {
                                setType('from');
                                setIsVisibleTime(true);
                            }}>
                                <FontAwesome name="calendar-check-o" style={styles.auth_input_icon} />
                                <TextInput editable={false} value={from} style={styles.auth_input}
                                    placeholder={'00:00'} />
                            </Pressable>
                        </View>
                        <View>
                            <Text style={[styles.text_grey, styles.label]}>To</Text>
                            <Pressable style={styles.form_container} onPress={() => {
                                setType('to');
                                setIsVisibleTime(true);
                            }}>
                                <FontAwesome name="calendar-times-o" style={styles.auth_input_icon} />
                                <TextInput editable={false} value={to} style={styles.auth_input} placeholder={'00:00'} />
                            </Pressable>
                        </View>
                        <View>
                            <Text style={[styles.text_grey, styles.label]}>Price</Text>
                            <View style={styles.form_container}>
                                <Ionicons name="pricetags-outline" style={styles.auth_input_icon} />
                                <TextInput value={price} style={styles.auth_input}
                                    placeholder={'Enter Appointment Price *'} keyboardType={'numeric'}
                                    onChangeText={(val) => setPrice(val)} />
                            </View>
                        </View>
                        <View style={[styles.form_group, styles.mt_3]}>
                            <TouchableOpacity style={styles.button_green} onPress={() => submitHandle()}>
                                <Text style={styles.button_text}>Confirm Slot</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <DateTimePickerModal
                    isVisible={isVisibleTime}
                    mode="time"
                    is24Hour={true}
                    onConfirm={(d) => {
                        let time = d.toLocaleTimeString();
                        time = time.split(' ');
                        let t = time[0].split(':');
                        t[2] = '00';
                        time = t[0] + ":" + t[1] + " " + time[1];
                        setIsVisibleTime(false);
                        if (type === "from") setFrom(time);
                        else setTo(time);
                    }}
                    onCancel={() => setIsVisibleTime(false)}
                />

                <View style={styles.mt_2} />
            </ScrollView>
        </View>
    );
};

export default ManageAvailability;
