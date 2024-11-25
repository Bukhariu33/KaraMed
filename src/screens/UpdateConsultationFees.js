import { View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import styles, { MAIN_COLOR } from '../componentts/styles';
import Feather from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const UpdateConsultationFees = ({ navigation }) => {
  const [fee, setFee] = useState(''); // Initial fee state
  const [isLoading, setIsLoading] = useState(false); // For initial page load
  const [loading, setLoading] = useState(false); // For button submission

  // Simulate form submission logic
  const submitHandle = () => {
    setLoading(true);
    setTimeout(() => {
      alert(`Consultation fee updated to $${fee}`);
      setLoading(false);
      navigation.goBack(); // Navigate back after submission
    }, 2000); // Simulate network request delay
  };

  return (
    <View style={styles.container_bg}>
      {/* Header */}
      <View style={styles.home_header}>
        <View style={styles.align_items_center}>
          <TouchableOpacity style={styles.btn_menu} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" style={styles.btn_menu_icon} />
          </TouchableOpacity>
          <Text style={styles.header_name}>Update Consultation Fee</Text>
        </View>
      </View>

      {/* Main Content */}
      {isLoading ? (
        <ActivityIndicator size={"large"} style={{ marginTop: 40 }} color={MAIN_COLOR} />
      ) : (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
          <View style={[styles.auth_form]}>
            {/* Fee Input Field */}
            <View style={styles.mt_2}>
              <Text style={[styles.text_grey, styles.label]}>Fee</Text>
              <View style={styles.form_container}>
                <Feather name={'dollar-sign'} style={styles.auth_input_icon} />
                <TextInput
                  style={styles.auth_input}
                  placeholder={'Enter fee amount'}
                  value={fee}
                  keyboardType={'numeric'}
                  onChangeText={(val) => setFee(val)}
                />
              </View>
            </View>

            {/* Submit Button */}
            <View style={[styles.form_group, styles.mt_3]}>
              <TouchableOpacity
                style={styles.button_green}
                disabled={loading}
                onPress={submitHandle}
              >
                <Text style={styles.button_text}>
                  {loading ? "Processing..." : "Update Fee"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      )}
    </View>
  );
};

export default UpdateConsultationFees;
