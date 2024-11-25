import React from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from "../componentts/styles";

export default function Notifications({navigation}) {
    return (
        <View style={styles.container_bg}>
            <View style={styles.home_header}>
                <View style={styles.align_items_center}>
                    <TouchableOpacity style={styles.btn_menu} onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" style={styles.btn_menu_icon}/>
                    </TouchableOpacity>
                    <Text style={styles.header_name}>Notifications</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <View style={styles.mt_4}/>
                <View style={styles.notification_container}>
                    <View style={styles.notification_icon_container}>
                        <Ionicons name="megaphone" style={styles.notification_icon}/>
                    </View>
                    <Text style={styles.notification_text}>This is test notification for announcement</Text>
                </View>
                <View style={styles.notification_container}>
                    <View style={styles.notification_icon_container}>
                        <Feather name="bell" style={styles.notification_icon}/>
                    </View>
                    <Text style={styles.notification_text}>This is test notification for notification</Text>
                </View>
                <View style={styles.notification_container}>
                    <View style={styles.notification_icon_container}>
                        <Ionicons name="megaphone" style={styles.notification_icon}/>
                    </View>
                    <Text style={styles.notification_text}>This is test notification for announcement</Text>
                </View>
                <View style={styles.notification_container}>
                    <View style={styles.notification_icon_container}>
                        <Feather name="bell" style={styles.notification_icon}/>
                    </View>
                    <Text style={styles.notification_text}>This is test notification for notification</Text>
                </View>
                <View style={styles.notification_container}>
                    <View style={styles.notification_icon_container}>
                        <Ionicons name="megaphone" style={styles.notification_icon}/>
                    </View>
                    <Text style={styles.notification_text}>This is test notification for announcement</Text>
                </View>
                <View style={styles.notification_container}>
                    <View style={styles.notification_icon_container}>
                        <Feather name="bell" style={styles.notification_icon}/>
                    </View>
                    <Text style={styles.notification_text}>This is test notification for notification</Text>
                </View>
                <View style={styles.notification_container}>
                    <View style={styles.notification_icon_container}>
                        <Ionicons name="megaphone" style={styles.notification_icon}/>
                    </View>
                    <Text style={styles.notification_text}>This is test notification for announcement</Text>
                </View>
                <View style={styles.notification_container}>
                    <View style={styles.notification_icon_container}>
                        <Feather name="bell" style={styles.notification_icon}/>
                    </View>
                    <Text style={styles.notification_text}>This is test notification for notification</Text>
                </View>
                <View style={styles.notification_container}>
                    <View style={styles.notification_icon_container}>
                        <Ionicons name="megaphone" style={styles.notification_icon}/>
                    </View>
                    <Text style={styles.notification_text}>This is test notification for announcement</Text>
                </View>
                <View style={styles.notification_container}>
                    <View style={styles.notification_icon_container}>
                        <Feather name="bell" style={styles.notification_icon}/>
                    </View>
                    <Text style={styles.notification_text}>This is test notification for notification</Text>
                </View><View style={styles.notification_container}>
                <View style={styles.notification_icon_container}>
                    <Ionicons name="megaphone" style={styles.notification_icon}/>
                </View>
                <Text style={styles.notification_text}>This is test notification for announcement</Text>
            </View>
                <View style={styles.notification_container}>
                    <View style={styles.notification_icon_container}>
                        <Feather name="bell" style={styles.notification_icon}/>
                    </View>
                    <Text style={styles.notification_text}>This is test notification for notification</Text>
                </View><View style={styles.notification_container}>
                <View style={styles.notification_icon_container}>
                    <Ionicons name="megaphone" style={styles.notification_icon}/>
                </View>
                <Text style={styles.notification_text}>This is test notification for announcement</Text>
            </View>
                <View style={styles.notification_container}>
                    <View style={styles.notification_icon_container}>
                        <Feather name="bell" style={styles.notification_icon}/>
                    </View>
                    <Text style={styles.notification_text}>This is test notification for notification</Text>
                </View>
            </ScrollView>
        </View>
    )
}