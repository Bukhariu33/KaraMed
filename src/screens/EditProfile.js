import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { MAIN_COLOR } from '../componentts/styles';
import ImagePicker from 'react-native-image-picker'; // Ensure you have the image picker library imported

const EditProfile = ({ navigation }) => {
  // State management for form fields
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [contact, setContact] = useState('+1234567890');
  const [cnic, setCnic] = useState('12345-6789012-3');
  const [country, setCountry] = useState('Select Country');
  const [state, setState] = useState('California');
  const [city, setCity] = useState('Los Angeles');
  const [address, setAddress] = useState('123 Street Name');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Simple image picker logic (not fully implemented)
    const result = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });
    if (!result.didCancel && result.assets) {
      setImage(result.assets[0].uri);
    }
  };

  const submitHandle = () => {
    setLoading(true);
    // Simulate form submission and loading
    setTimeout(() => {
      setLoading(false);
      alert("Profile updated!"); // Basic feedback
    }, 2000);
  };

  return (
    <View style={styles.container_bg}>
      <View style={styles.home_header}>
        <View style={styles.align_items_center}>
          <TouchableOpacity style={styles.btn_menu} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" style={styles.btn_menu_icon} />
          </TouchableOpacity>
          <Text style={styles.header_name}>Manage Personal Details</Text>
        </View>
      </View>
      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 40 }} color={MAIN_COLOR} />
      ) : (
        <ScrollView contentContainerStyle={styles.auth_form}>
          {/* Profile Picture */}
          <View style={styles.profile_pic_container}>
            {image ? (
              <Image source={{ uri: image }} style={styles.profile_image} />
            ) : (
              <Text style={styles.profile_initials}>{name.split(' ').map(n => n[0]).join('')}</Text>
            )}
          </View>
          <TouchableOpacity style={styles.choose_image_btn} onPress={pickImage}>
            <Text style={styles.choose_image_text}>Choose Image</Text>
          </TouchableOpacity>

          {/* Form Fields */}
          <View style={styles.mt_2}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput style={styles.auth_input} placeholder="e.g. John Doe" value={name} onChangeText={setName} />
          </View>
          <View>
            <Text style={styles.label}>Email Address</Text>
            <TextInput style={styles.auth_input} placeholder="abcd@gmail.com" value={email} onChangeText={setEmail} />
          </View>
          <View>
            <Text style={styles.label}>Contact No</Text>
            <TextInput style={styles.auth_input} placeholder="e.g. +1234567890" value={contact} onChangeText={setContact} />
          </View>
          <View>
            <Text style={styles.label}>CNIC</Text>
            <TextInput style={styles.auth_input} placeholder="Enter Your CNIC No." value={cnic} onChangeText={setCnic} />
          </View>
          <View>
            <Text style={styles.label}>Country</Text>
            <TextInput editable={false} style={styles.auth_input} placeholder="Select Country" value={country} />
          </View>
          <View>
            <Text style={styles.label}>State</Text>
            <TextInput style={styles.auth_input} placeholder="Enter State" value={state} onChangeText={setState} />
          </View>
          <View>
            <Text style={styles.label}>City</Text>
            <TextInput style={styles.auth_input} placeholder="Enter City Name" value={city} onChangeText={setCity} />
          </View>
          <View>
            <Text style={styles.label}>Address</Text>
            <TextInput style={styles.auth_input} placeholder="Enter Your Address" value={address} onChangeText={setAddress} />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.auth_input} placeholder="Enter Password" secureTextEntry value={password} onChangeText={setPassword} />
          </View>
          <View>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput style={styles.auth_input} placeholder="Re-enter Password" secureTextEntry value={cpassword} onChangeText={setCpassword} />
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.auth_btn} onPress={submitHandle}>
            <Text style={styles.text_white}>Save Changes</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container_bg: {
    flex: 1,
    backgroundColor: '#f8f8f8',
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
  align_items_center: {
    display: "flex",
        flexDirection: "row",
        alignItems: "center",
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
  header_name: {
    fontFamily: "semi",
        color: "#fff",
        fontSize: 18,
        marginLeft: 10,
  },
  auth_form: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexGrow: 1, // This allows the ScrollView to expand properly
  },
  profile_pic_container: {
    alignItems: 'center',
    marginBottom: 15,
  },
  profile_image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profile_initials: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: MAIN_COLOR,
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 100,
  },
  choose_image_btn: {
    backgroundColor: MAIN_COLOR,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  choose_image_text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  mt_2: {
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  auth_input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  auth_btn: {
    backgroundColor: MAIN_COLOR,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  text_white: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default EditProfile;
