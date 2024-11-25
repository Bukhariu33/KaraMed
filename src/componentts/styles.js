import {Dimensions, Platform, StatusBar} from "react-native";

const APP_NAME = "KARAMeD";
const MAIN_COLOR = "#00136B";
const SECOND_COLOR = "#057DB7";
const LOGO = require('../../assets/images/logo.png');
const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // backgroundColor: "#F5F5F5",
        paddingVertical: 0,
        paddingHorizontal: 25,
    },
    container_bg: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    mv_2: {
        marginVertical: 2
    },
    mv_3: {
        marginVertical: 3
    },
    mv_4: {
        marginVertical: 4
    },
    mv_8: {
        marginVertical: 8,
    },
    mv_9: {
        marginVertical: 9,
    },
    mv_10: {
        marginVertical: 10,
    },
    mt_1: {
        marginTop: 5,
    },
    mt_2: {
        marginTop: 10,
    },
    mt_3: {
        marginTop: 15,
    },
    mt_4: {
        marginTop: 20,
    },
    mb_1: {
        marginTop: 10,
    },
    ml_1: {
        marginLeft: 10,
    },
    text_regular: {
        color: "#333",
        fontFamily: "regular",
    },
    text_12: {
        fontSize: 12,
    },
    text_13: {
        fontSize: 13,
    },
    text_14: {
        fontSize: 14,
    },
    text_15: {
        fontSize: 15,
    },
    text_16: {
        fontSize: 16,
    },
    text_17: {
        fontSize: 17,
    },
    text_18: {
        fontSize: 18,
    },
    text_19: {
        fontSize: 19,
    },
    text_20: {
        fontSize: 20,
    },
    heading: {
        fontFamily: "bold",
        fontSize: 30,
        width: "100%",
    },
    text_center: {
        // width: "100%",
        textAlign: "center",
    },
    text_grey: {
        color: "#7B6F72",
        fontFamily: "regular",
    },
    text_green: {
        color: "#337E81",
        fontFamily: "regular",
    },
    bg_gray: {
        backgroundColor: "#f0f0f0",
    },
    text_semi: {
        fontFamily: "semi",
    },
    text_bold: {
        fontFamily: "bold",
    },
    text_medium: {
        fontFamily: "medium",
    },
    justify_content_center: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // flexWrap: "wrap",
    },
    justify_content_between: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    justify_content_end: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    align_items_center: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    form_container: {
        // backgroundColor: "#F7F8F8",
        borderRadius: 8,
        marginVertical: 5,
        paddingVertical: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: "center",
        position: "relative",
        borderWidth: 1,
        borderColor: "#DCDCDC"
    },
    input_container: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 8,
        marginVertical: 5,
        paddingVertical: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: "center",
        position: "relative",
        borderWidth: 1,
        borderColor: "#DCDCDC",
    },
    form_group: {
        marginVertical: 3,
    },
    form_control: {
        marginVertical: 5,
        paddingVertical: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: "center",
        position: "relative",
    },
    auth_input: {
        width: "100%",
        // marginLeft: 5,
        fontSize: 14,
        paddingVertical: 5,
        paddingHorizontal: 14,
        paddingLeft: 30,
        color: "#333",
        fontFamily: "regular",
    },
    input: {
        width: "100%",
        // marginLeft: 5,
        fontSize: 14,
        paddingVertical: 5,
        paddingHorizontal: 14,
        paddingLeft: 30,
        color: "#111",
        fontFamily: "regular",
    },
    auth_input_icon: {
        position: "absolute",
        left: 10,
        fontSize: 20,
        color: "#999",
    },
    white_icon: {
        position: "absolute",
        left: 10,
        fontSize: 20,
        color: "#111",
    },
    text_white: {
        color: "#fff",
        fontFamily: "regular",
    },
    //auth from
    auth_banner: {
        width: "100%",
        height: 200,
        backgroundColor: MAIN_COLOR,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    auth_banner_support_left: {
        width: 170,
        height: 170,
        backgroundColor: "#fff",
        // borderRadius: 100,
        position: "absolute",
        bottom: -90,
        left: -90,
        borderBottomLeftRadius: 0,
        transform: [{rotate: "45deg"}],
    },
    auth_banner_support_lines: {
        width: "100%",
        height: 2,
        backgroundColor: SECOND_COLOR,
        marginTop: 2,
    },
    auth_banner_image: {
        width: 130,
        height: 130,
        objectFit: "fill",
    },
    //     HeaderBar
    header_bar: {
        width: "100%",
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: MAIN_COLOR,
    },
    btn_back: {
        position: "absolute",
        left: 0,
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    text_headerbar: {
        fontSize: 16,
        fontFamily: "semi",
        color: "#000",
    },
    bg_green: {
        backgroundColor: "#86CCBB",
    },
//
    logo_text: {
        marginTop: 5,
        fontFamily: "bold",
        fontSize: 25,
        letterSpacing: 0.2,
        color: MAIN_COLOR,
    },
    form_image: {
        width: 130,
        height: 130,
        objectFit: "fill",
        marginTop: 70,
    },
    auth_form: {
        width: "100%",
        paddingVertical: 20,
    },
    label: {
        textTransform: "uppercase",
        marginVertical: 2,
        fontFamily: "semi",
    },
    button_black: {
        width: "100%",
        paddingVertical: 7,
        backgroundColor: "#000",
        borderRadius: 8,
    },
    button_green: {
        width: "100%",
        paddingVertical: 13,
        backgroundColor: MAIN_COLOR,
        borderRadius: 8,
    },
    button_text: {
        fontFamily: "semi",
        fontSize: 14,
        color: "#fff",
        textAlign: "center",
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "rgba(0,0,0,0.2)",
        marginVertical: 10,
    },
    //Home Page for Banking
    home_hero: {
        backgroundColor: MAIN_COLOR,
        paddingVertical: 8,
        paddingBottom: 15,
        paddingHorizontal: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    home_header: {
        backgroundColor: MAIN_COLOR,
        // marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 8,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
    },
    profile_image: {
        width: 45,
        height: 45,
        borderRadius: 50,
        objectFit: "cover",
    },
    header_name: {
        fontFamily: "semi",
        color: "#fff",
        fontSize: 18,
        marginLeft: 10,
    },
    header_button: {
        marginHorizontal: 6,
    },
    header_button_icon: {
        fontSize: 20,
        color: "#fff",
    },
    hero_detail: {
        marginTop: 0,
        paddingVertical: 8,
    },
    btn_add_money: {
        backgroundColor: "#fff",
        paddingVertical: 6,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    main_color: {
        color: MAIN_COLOR,
        fontFamily: "regular",
    },
    second_color: {
        color: SECOND_COLOR,
        fontFamily: "regular",
    },
    while_card: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-between",
        textAlign: "center",
        marginVertical: 5,
    },
    white_card_button: {
        width: "32%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 4,
    },
    white_card_icon: {
        width: 70,
        height: 70,
        borderRadius: 50,
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
        padding: 15,
        shadowColor: "#666",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    },
    white_card_image: {
        width: "100%",
        height: "100%",
        objectFit: "fill",
    },
    white_card_text: {
        fontFamily: "medium",
        fontSize: 12,
        marginVertical: 2,
        textAlign: "center",
    },
    white_banner: {
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
    },
    white_banner_text_container: {
        marginLeft: 10,
    },
    white_banner_main_text: {
        fontFamily: "semi",
        fontSize: 14,
    },
    white_banner_text: {
        fontFamily: "regular",
        fontSize: 12,
    },
    btn_menu: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    btn_menu_icon: {
        color: MAIN_COLOR,
        fontSize: 20,
    },
    white_input_container: {
        width: "100%",
        backgroundColor: "#000",
        borderRadius: 4,
    },
    white_input: {
        width: "100%",
    },
    online_doctors_container: {
        width: "100%",
        backgroundColor: "#fff",
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    online_doctors_list: {
        marginTop: 15,
    },
    online_doctor: {
        width: 180,
        backgroundColor: "#f5f5f5",
        padding: 10,
        borderRadius: 5,
        shadowColor: "#666",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        marginVertical: 10,
        marginHorizontal: 8,
    },
    online_doctor_header: {
        flexDirection: "row",
        alignItems: "center",
    },
    online_doctor_image: {
        width: 60,
        height: 60,
        borderRadius: 50,
        objectFit: "fill",
    },
    online_doctor_text: {
        fontFamily: "regular",
        color: "#555",
        fontSize: 13,
    },
    online_doctor_bold: {
        fontFamily: "semi",
        fontSize: 15,
    },
    btn_online_doctor_consult: {
        marginVertical: 8,
        backgroundColor: MAIN_COLOR,
        paddingVertical: 8,
        borderRadius: 4,
    },
    btn_online_doctor_consult_text: {
        fontFamily: "medium",
        color: "#fff",
        textAlign: "center",
        fontSize: 13,
    },
    online_doctor_profile: {
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: MAIN_COLOR,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    online_doctor_profile_icon: {
        fontSize: 25,
        color: MAIN_COLOR,
    },
    specialist_box: {
        width: 120,
        backgroundColor: SECOND_COLOR,
        paddingVertical: 12,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        shadowColor: MAIN_COLOR,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 10,
        marginHorizontal: 5,
    },
    specialist_box_image: {
        width: 50,
        height: 50,
        objectFit: "fill",
    },
    specialist_box_text: {
        fontSize: 12,
        fontFamily: "medium",
        marginTop: 7,
        color: "#fff",
        textAlign: "center"
    },
    specialist_box_small: {
        width: "31%",
        height: 100,
        backgroundColor: SECOND_COLOR,
        paddingVertical: 12,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        shadowColor: MAIN_COLOR,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 2,
        marginHorizontal: 2,
    },
    specialist_box_image_small: {
        width: 40,
        height: 40,
        objectFit: "fill",
    },
    specialist_box_text_small: {
        fontSize: 9,
        fontFamily: "medium",
        marginTop: 7,
        color: "#fff",
        textAlign: "center",
    },
//    Doctor Search
    doctor_btn_footer: {
        width: "45%",
        backgroundColor: MAIN_COLOR,
        marginHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 5,
    },
    doctor_btn_footer_text: {
        color: "#fff",
        fontFamily: "medium",
        textAlign: "center",
        textTransform: "uppercase",
    },
    doctor_card_main_color_text: {
        fontSize: 15,
        color: MAIN_COLOR,
        fontFamily: "semi",
        marginVertical: 2,
    },
    doctor_rating: {
        width: 30,
        height: 30,
        backgroundColor: '#CBA620',
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    doctor_rating_text: {
        color: "#fff",
        fontFamily: "regular",
        fontSize: 12,
    },
    doctor_card: {
        width: "98%",
        backgroundColor: "#fff",
        shadowColor: MAIN_COLOR,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginTop: 8,
        marginVertical: 4,
    },
    doctor_card_detail: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    doctor_card_detail_left: {
        width: "80%",
    },
    doctor_card_detail_right: {
        width: "20%",
    },
    doctor_category: {
        borderWidth: 1,
        borderColor: MAIN_COLOR,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginHorizontal: 5,
    },
    doctor_category_text: {
        color: MAIN_COLOR,
        fontSize: 11,
        fontFamily: "regular",
    },
    doctor_image: {
        width: 60,
        height: 60,
        objectFit: "fill",
        borderWidth: 2,
        borderColor: MAIN_COLOR,
        borderRadius: 50,
        marginRight: 5,
    },
    doctor_card_name: {
        fontFamily: "semi",
        fontSize: 14,
        marginVertical: 1,
    },
    drawer_item: {
        width: 270,
        marginVertical: 4,
    },
    drawer_btn: {
        // backgroundColor: "#eee",
        borderRadius: 4,
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
    },
    drawer_btn_icon: {
        color: "#666",
        fontSize: 24,
    },
    drawer_btn_text: {
        fontFamily: "medium",
        fontSize: 13,
        marginLeft: 20,
        color: "#666"
    },
    subscription_container: {
        width: Dimensions.get("window").width - 40,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: MAIN_COLOR,
        marginVertical: 8,
        paddingVertical: 20,
        paddingHorizontal: 15,
        shadowColor: MAIN_COLOR,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: "hidden",
    },
    subscription_star: {
        // backgroundColor: "rgba(0,0,0,0.05)",
        backgroundColor: MAIN_COLOR,
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    subscription_star_icon: {
        fontSize: 24,
        color: "#fff"
    },
    subscription_text_main: {
        fontFamily: "semi",
        fontSize: 23,
        color: MAIN_COLOR,
        marginVertical: 8,
    },
    discount: {
        position: "absolute",
        width: 100,
        height: 100,
        backgroundColor: MAIN_COLOR,
        right: -20,
        top: -20,
        borderRadius: 100,
        alignItems: "center",
    },
    discount_text: {
        color: "#fff",
        fontFamily: "medium",
        fontSize: 13,
        position: "absolute",
        left: 15,
        bottom: 30
    },
    subscription_text: {
        textAlign: "center",
        fontFamily: "medium",
        fontSize: 12,
        color: "#999"
    },
    subscription_text_black: {
        fontSize: 13,
        color: "#111",
        fontFamily: "regular",
    },
    notification_container: {
        width: "100%",
        backgroundColor: "#fff",
        marginVertical: 3,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: MAIN_COLOR,
        flexDirection: "row",
        // flexWrap: "wrap",
        // alignItems: "center",
    },
    notification_icon_container: {
        width: 40,
        height: 40,
        backgroundColor: MAIN_COLOR,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    notification_icon: {
        color: "#fff",
        fontSize: 20,
    },
    notification_text: {
        fontFamily: "regular",
        color: "#666",
        marginLeft: 8,
        width: "80%"
    },
    appointment_card: {
        width: "97%",
        backgroundColor: "#fff",
        shadowColor: MAIN_COLOR,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginVertical: 5,
        // borderWidth: 0.5,
        // borderColor: MAIN_COLOR,
    },
    appointment_card_image: {
        width: 60,
        height: 60,
        objectFit: "fill",
    },
    appointment_card_name: {
        fontFamily: "semi",
        fontSize: 17,
    },
    appointment_card_detail: {
        fontFamily: "regular",
        fontSize: 13,
        color: "#666",
    },
    appointment_card_button_call: {
        backgroundColor: SECOND_COLOR,
        shadowColor: SECOND_COLOR,
    },
    appointment_card_button_reject: {
        backgroundColor: "#f45",
        shadowColor: "#f45",
    },
    appointment_card_button: {
        width: "48%",
        backgroundColor: MAIN_COLOR,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        marginVertical: 8,
        borderRadius: 4,
        shadowColor: MAIN_COLOR,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    },
    appointment_card_button_icon: {
        fontSize: 18,
        color: "#fff",
        marginRight: 5,
    },
    appointment_card_button_text: {
        fontSize: 14,
        fontFamily: "medium",
        color: "#fff"
    },
    slots_container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginVertical: 4,
    },
    slot_card: {
        width: "48%",
        backgroundColor: "#fff",
        borderRadius: 4,
        shadowColor: MAIN_COLOR,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        borderWidth: 1,
        borderColor: MAIN_COLOR,
        paddingVertical: 7,
        paddingHorizontal: 8,
        marginVertical: 4,
    },
    slot_card_text: {
        fontFamily: "medium",
        color: MAIN_COLOR
    },
    star_filled: {
        color: "#F7BB39",
        fontSize: 20,
    },
    star_empty: {
        color: "#999",
        fontSize: 20,
    },
    chat_header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderBottomColor: MAIN_COLOR,
        borderBottomWidth: 1,
        paddingVertical: 8,
    },
    chat_user_image: {
        width: 60,
        height: 60,
        objectFit: "fill",
        borderRadius: 50,
    },
    chat_user_detail: {
        marginLeft: 8,
        width: "52%",
    },
    chat_btn_back: {
        marginRight: 10,
    },
    btn_send_message: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: MAIN_COLOR,
        alignItems: "center",
        justifyContent: "center",
        // marginBottom: 10,
        marginLeft: 10,
        marginBottom: Platform.OS === "ios" ? 50 : 0
    },
    chat_input_container: {
        width: "85%",
        marginVertical: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#eee",
        fontFamily: "regular",
        paddingHorizontal: 15,
        borderRadius: 20,
        justifyContent: "center",
        marginBottom: Platform.OS === "ios" ? 50 : 0
    },
    chat_input: {
        width: "90%",
        fontSize: 14,
        fontFamily: "regular",
    },
    chat_btn_file: {
        position: "absolute",
        right: 10
    },
    user_name: {
        color: MAIN_COLOR,
        fontSize: 16,
        fontFamily: "regular",
    },
    user_message: {
        fontFamily: "regular",
        fontSize: 12,
        color: "#999",
    },
    btnUpload: {
        width: "100%",
        backgroundColor: MAIN_COLOR,
        position: "absolute",
        bottom: 0,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    btnUploadText: {
        fontSize: 14,
        fontFamily: "semi",
        color: "#fff",
        textAlign: "center"
    },
    btnRefresh: {
        backgroundColor: SECOND_COLOR,
        borderRadius: 4,
        position: "absolute",
        bottom: 55,
        right: 5,
        paddingVertical: 4,
        paddingHorizontal: 10,
        zIndex: 9,
    },
    reportViewer: {
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
        marginVertical: 3,
    },
    reportViewerText: {
        fontSize: 14,
        fontFamily: "medium",
        color: "#000",
    },
    reportViewerImage: {
        width: "100%",
        height: 200,
        objectFit: "cover",
        borderRadius: 10,
    }
}

export default styles;
export {MAIN_COLOR, LOGO, APP_NAME, SECOND_COLOR};
