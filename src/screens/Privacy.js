import React from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "../componentts/styles";

export default function Privacy({navigation}) {
    return (
        <View style={styles.container_bg}>
            <View style={styles.home_header}>
                <View style={styles.align_items_center}>
                    <TouchableOpacity style={styles.btn_menu} onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" style={styles.btn_menu_icon}/>
                    </TouchableOpacity>
                    <Text style={styles.header_name}>Privacy Policy</Text>
                </View>
            </View>
            <ScrollView style={[{paddingHorizontal: 20}]}>
                <View style={styles.mt_4}>
                    <Text style={[styles.text_17, styles.text_semi]}>Privacy Policy for KARAMeD Telemedicine Mobile
                        Application</Text>
                </View>
                <View style={[styles.while_card, styles.mt_2, {paddingVertical: 20, paddingHorizontal: 20}]}>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        1. Introduction: Welcome to KARAMeD, a telemedicine mobile application designed
                        to connect users with healthcare professionals for virtual consultations. This privacy
                        policy outlines how we collect, use, disclose, and protect your personal information.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        2. Information We Collect: a. Personal Information: We collect personal
                        information, including but not limited to your name, contact details, date of birth,
                        and medical history, to provide telemedicine services.
                        b. Device Information: We may collect information about the device you use to
                        access our app, including device type, operating system, and unique device
                        identifiers.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        3. How We Use Your Information: a. Provision of Services: We use your
                        information to facilitate telemedicine consultations, provide medical advice, and
                        deliver personalized healthcare services.
                        b. Communication: We may use your contact information to communicate with you
                        regarding appointment reminders, updates, and important information related to our
                        services.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        4. Data Security: a. Encryption: We employ industry-standard encryption and
                        security measures to protect your personal information during transmission and
                        storage.
                        b. Access Controls: Access to your personal information is restricted to authorized
                        personnel who need the information to provide telemedicine services.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        5. Sharing of Information: a. Healthcare Professionals: Your information may be
                        shared with healthcare professionals involved in your telemedicine consultations.
                        b. Legal Requirements: We may disclose your information if required by law or in
                        response to a court order or government request.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        6. Data Retention: We retain your personal information for the duration necessary
                        to fulfill the purposes outlined in this privacy policy or as required by applicable laws.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        7. Your Choices: a. Account Information: You can review and update your account
                        information at any time through the app.
                        b. Opt-Out: You may choose to opt-out of receiving non-essential communications
                        from KARAMeD.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        8. Third-Party Services: KARAMeD may use third-party services for analytics,
                        payment processing, and other functionalities. These third parties may have their
                        own privacy policies, and we encourage you to review them.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        9. Changes to the Privacy Policy: We may update this privacy policy to reflect
                        changes in our practices or for legal reasons. Any updates will be posted on the app,
                        and we recommend reviewing the policy periodically.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        10. Contact Information: If you have questions or concerns about this privacy
                        policy, please contact us at [contact@karamedapp.com].

                    </Text>
                    <Text style={[styles.text_14, styles.text_semi]}>
                        By using the KARAMeD telemedicine app, you acknowledge that you have read,
                        understood, and agreed to the terms of this privacy policy.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}