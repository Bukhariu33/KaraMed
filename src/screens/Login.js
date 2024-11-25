import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import styles, { MAIN_COLOR } from "./components/Styles";
import styles , {MAIN_COLOR} from '../componentts/styles'
import Feather from 'react-native-vector-icons/Feather'

import {
    Image,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { Picker } from "@react-native-picker/picker";
const Login = ({ navigation }) => {
    const [docType, setDocType] = useState('Regular');

    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                                 style={[styles.container, {paddingHorizontal: 0}]}>
            <StatusBar backgroundColor={MAIN_COLOR} barStyle={'light-content'}/>
            <View style={[styles.auth_banner, styles.justify_content_center]}>
                <Image source={require('../../assets/images/logo_white.png')} style={styles.auth_banner_image}/>
                <View style={styles.auth_banner_support_left}>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                    <View style={styles.auth_banner_support_lines}/>
                </View>
            </View>
            <View style={[styles.auth_form, {paddingHorizontal: 25, marginTop: 30}]}>
                <View style={styles.justify_content_center}>
                    <Text style={[styles.text_center, styles.text_20, styles.main_color, {
                        fontFamily: "bold",
                        textDecorationStyle: "solid",
                        textDecorationLine: "underline",
                        textDecorationColor: MAIN_COLOR
                    }]}>Welcome</Text>
                </View>
                <View style={styles.mt_4}>
                    <Text style={[styles.text_grey, styles.label, styles.text_center]}>This is our demo application you
                        can just go with guest account.</Text>
                </View>
                <View>
                    <Text style={[styles.text_grey, styles.label]}>Type</Text>
                    <View style={[styles.form_container, {paddingVertical: 0}]}>
                        <Feather name={'edit-3'} style={styles.auth_input_icon}/>
                        <Picker style={[styles.auth_input, {marginLeft: 10}]} mode={'dropdown'} selectedValue={docType}
                                onValueChange={setDocType}>
                            <Picker.Item label={'Doctors / Specialists'} value='Regular' fontFamily={'regular'}
                                         style={{fontSize: 14, color: "#333"}}/>
                            <Picker.Item label={'Doctors / Specialists with E Consent feature'}
                                         value='EConsent' style={{fontSize: 14, color: "#333"}}/>
                            <Picker.Item label={'Complementary & Alternate Medicine (CAM) Professionals'}
                                         value='Cam' style={{fontSize: 14, color: "#333"}}/>
                        </Picker>
                    </View>
                </View>
                <View style={[styles.form_group, styles.mt_3]}>
                    <TouchableOpacity style={styles.button_green} onPress={()=>navigation.navigate('Dashboard')}>
                        <Text style={styles.button_text}>{"Continue As Guest"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Login;
