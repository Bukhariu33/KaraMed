import {
    Dimensions,
    Image, Linking,
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import React from 'react';
import styles, {MAIN_COLOR} from '../componentts/styles';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Home = ({navigation}) => {
  return (
    <View style={[styles.container_bg]}>
        <StatusBar backgroundColor={MAIN_COLOR} barStyle={'light-content'}/>
        <View style={styles.home_header}>
            <View style={styles.align_items_center}>
                <TouchableOpacity style={styles.btn_menu} onPress={() => {
                    navigation.openDrawer();
                }}>
                    <Feather name="menu" style={styles.btn_menu_icon}/>
                </TouchableOpacity>
                <Text style={styles.header_name}>Home</Text>
            </View>
            <View style={styles.align_items_center}>
                <TouchableOpacity style={styles.header_button}>
                    <AntDesign name="customerservice" style={styles.header_button_icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.header_button} onPress={() => navigation.navigate("Notifications")}>
                    <SimpleLineIcons name="bell" style={styles.header_button_icon}/>
                </TouchableOpacity>
            </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.home_hero}>
                <View style={styles.hero_detail}>
                    <View style={styles.justify_content_center}>
                        <Text style={[styles.text_20, styles.text_center, styles.text_white, styles.text_bold, {
                            textDecorationLine: "underline",
                            textDecorationColor: "#fff"
                        }]}> Welcome! </Text>
                    </View>
                </View>
                <View style={[styles.justify_content_center, styles.mv_2, {alignItems: "flex-start"}]}>
                    <Pressable style={[styles.white_card_button]} onPress={() => navigation.navigate("Appointments")}>
                        <View style={[styles.white_card_icon]}>
                            <Image source={require('../../assets/images/schedule.png')}
                                   style={styles.white_card_image}/>
                        </View>
                        <Text style={[styles.white_card_text, styles.text_white]}>Appointments List</Text>
                    </Pressable>
                    <Pressable style={styles.white_card_button} onPress={() => navigation.navigate("ManageAvailability")}>
                        <View style={styles.white_card_icon}>
                            <Image source={require('../../assets/images/planner.png')}
                                   style={styles.white_card_image}/>
                        </View>
                        <Text style={[styles.white_card_text, styles.text_white]}>Manage Availability</Text>
                    </Pressable>
                    <Pressable style={styles.white_card_button} onPress={() => navigation.navigate("Appointments")}>
                        <View style={styles.white_card_icon}>
                            <Image source={require('../../assets/images/live-chat.png')}
                                   style={styles.white_card_image}/>
                        </View>
                        <Text style={[styles.white_card_text, styles.text_white]}>Chat With Clients</Text>
                    </Pressable>          
                </View>
                <View style={{paddingHorizontal: 15}}>
                    <View style={[styles.while_card, styles.mv_10]}>
                        <Pressable style={styles.white_card_button} onPress={() => navigation.navigate("ConsultationFees")}>
                            <View style={styles.white_card_icon}>
                                <Image source={require('../../assets/images/receipt.png')}
                                       style={styles.white_card_image}/>
                            </View>
                            <Text style={styles.white_card_text}>Update Consultation Fee</Text>
                        </Pressable>
                        <Pressable style={styles.white_card_button} onPress={() => navigation.navigate("Appointments")}>
                            <View style={styles.white_card_icon}>
                                <Image source={require('../../assets/images/expired.png')}
                                       style={styles.white_card_image}/>
                            </View>
                            <Text style={styles.white_card_text}>Upcoming Appointments</Text>
                        </Pressable>
                        <Pressable style={styles.white_card_button} onPress={() => navigation.navigate("ManageAppointments")}>
                            <View style={styles.white_card_icon}>
                                <Image source={require('../../assets/images/schedule_2.png')}
                                       style={styles.white_card_image}/>
                            </View>
                            <Text style={styles.white_card_text}>Manage Appointments</Text>
                        </Pressable>
                        <Pressable style={styles.white_card_button} onPress={() => navigation.navigate("PaymentHistory")}>
                            <View style={styles.white_card_icon}>
                                <Image source={require('../../assets/images/wallet.png')}
                                       style={styles.white_card_image}/>
                            </View>
                            <Text style={styles.white_card_text}>Payment History</Text>
                        </Pressable>
                        <Pressable style={styles.white_card_button} onPress={() => navigation.navigate("Reviews")}>
                            <View style={styles.white_card_icon}>
                                <Image source={require('../../assets/images/reviews.png')}
                                       style={styles.white_card_image}/>
                            </View>
                            <Text style={styles.white_card_text}>Customer Reviews</Text>
                        </Pressable>
                        <View style={styles.white_card_button}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default Home;
