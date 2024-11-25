import React from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "../componentts/styles";

export default function Terms({navigation}) {
    return (
        <View style={styles.container_bg}>
            <View style={styles.home_header}>
                <View style={styles.align_items_center}>
                    <TouchableOpacity style={styles.btn_menu} onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" style={styles.btn_menu_icon}/>
                    </TouchableOpacity>
                    <Text style={styles.header_name}>Terms & Conditions</Text>
                </View>
            </View>
            <ScrollView style={[{paddingHorizontal: 20}]}>
                <View style={styles.mt_4}>
                    <Text style={[styles.text_17, styles.text_semi]}>Terms and Conditions for KARAMeD Telemedicine Mobile Application</Text>
                </View>
                <View style={[styles.while_card, styles.mt_2, {paddingVertical: 20, paddingHorizontal: 20}]}>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        1. Acceptance of Terms: By downloading, installing, or using the KARAMeD
                        telemedicine mobile application, you agree to comply with and be bound by these
                        terms and conditions.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        2. Eligibility: You must be at least 18 years old or have legal parental or guardian
                        consent to use the KARAMeD app. You also agree to provide accurate and complete
                        information during the registration process.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        3. Services Overview: KARAMeD provides a telemedicine platform connecting users
                        with healthcare professionals for virtual consultations. The platform facilitates secure
                        communication for medical advice, diagnosis, and treatment planning.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        4. Medical Disclaimer: KARAMeD does not replace traditional in-person medical care.
                        The services provided are not intended for emergencies. If you have a medical
                        emergency, please call your local emergency number immediately.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        5. Privacy and Security: We take the privacy and security of your information
                        seriously. KARAMeD adheres to applicable data protection laws. Personal health
                        information shared during consultations is handled in compliance with our Privacy
                        Policy.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        6. User Responsibilities: You are responsible for maintaining the confidentiality of
                        your account information, including login credentials. You agree to notify us
                        immediately of any unauthorized access to your account.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        7. Consultation Fees: Fees for telemedicine consultations are outlined in the app
                        and may vary based on services provided. Users are responsible for payment at the
                        time of service.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        8. Cancellation and Refund Policy: Users may cancel appointments in accordance
                        with the cancellation policy outlined in the app. Refund eligibility is subject to the
                        terms and conditions specified in our refund policy.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        9. License and Restrictions: KARAMeD grants you a limited, non-exclusive, nontransferable license to use the app for its intended purpose. You agree not to modify,
                        reverse engineer, or attempt to access the source code.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        10. Termination of Services: KARAMeD reserves the right to terminate or suspend
                        services to users who violate these terms and conditions or engage in inappropriate
                        behavior.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        11. Updates and Changes: KARAMeD may update the app, including these terms
                        and conditions, at any time. Continued use of the app after such updates constitutes
                        acceptance of the modified terms.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        12. Governing Law: These terms and conditions are governed by the laws of [your
                        jurisdiction], and any disputes will be resolved in accordance with these laws.

                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        13. Contact Information: For questions or concerns regarding these terms and
                        conditions, please contact [contact@karamedapp.com].
                    </Text>
                    <Text style={[styles.text_14, styles.text_regular]}>
                        By accepting these terms, you acknowledge that you have read, understood, and
                        agree to be bound by the terms and conditions outlined above.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}
