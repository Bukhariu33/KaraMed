import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles, {MAIN_COLOR} from '../styles';

const UserProfile = ({ navigation}) => {
  return (
    <View style={{
      height: 200,
      width: '100%',
      justifyContent: "center",
      alignItems: "center",
      borderBottomColor: "#f4f4f4",
      borderBottomWidth: 1
    }}>
      <View style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Image source={require('../../../assets/images/announcement.png')} style={{
          width: 95,
          height: 95,
          borderRadius: 50,
          objectFit: "fill"
        }} />
        <Text style={{ fontSize: 25, fontFamily: "semi", color: "#fff" }}>Sam</Text>
      </View>
      <Text style={{ fontSize: 18, fontFamily: "semi", color: "#333" }}>Sam</Text>
      <Text style={{ fontSize: 12, color: "#888", marginTop: -7 }}>sam@gmail.com</Text>
      <TouchableOpacity style={{ marginVertical: 7 }} onPress={() => navigation.navigate('Edit')}>
        <Text style={{ color: MAIN_COLOR, fontFamily: "regular", fontSize: 13 }}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};


export default UserProfile