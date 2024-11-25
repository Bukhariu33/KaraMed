import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'

const DrawerItemButton  = ({iconName, label, onPress, IconComponent}) => {
  return (
    <TouchableOpacity style={styles.drawer_btn} onPress={onPress}>
      <IconComponent name={iconName} style={styles.drawer_btn_icon} />
      <Text style={styles.drawer_btn_text}>{label}</Text>
    </TouchableOpacity>
  );
};


export default DrawerItemButton 