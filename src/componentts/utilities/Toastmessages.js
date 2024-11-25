import Toast from "react-native-toast-message";

const showMessage = (type, header, body) => {
    Toast.show({
        type: type,
        text1: header,
        text2: body
    });
}
const showError = () => {
    Toast.show({
        type: "error",
        text1: "Server Error !",
        text2: "Please try again later."
    })
}
const showSuccess = (header, body) => {
    Toast.show({
        type: "success",
        text1: header,
        text2: body,
    })
}
export default showMessage;
export {showError, showSuccess};