import { View, Text, Button, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Appointments from './Appointments';
import ManageAppointments from './ManageAppointments';
import PaymentHistory from './PaymentHistory';
import Home from './Home'; 
import styles, {MAIN_COLOR} from '../componentts/styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import ManageAvailability from './ManageAvailability';
import UpdateConsultationFees from './UpdateConsultationFees';
import Reviews from './Reviews';
import EditProfile from './EditProfile';
import Feather from 'react-native-vector-icons/Feather'
import Chat from './Chat';
import Notifications from './Notifications';
import Prescriptions from './Prescriptions';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerTitle: 'Home', headerShown: false }} // Customize the header if needed
      />
      <Stack.Screen name='ManageAvailability' component={ManageAvailability} options={{headerShown:false}}/>
      <Stack.Screen name='ConsultationFees' component={UpdateConsultationFees} options={{headerShown:false}}/>
      <Stack.Screen name='Reviews' component={Reviews} options={{headerShown:false}}/>
      <Stack.Screen name='Edit' component={EditProfile} options={{headerShown:false}}/>
      <Stack.Screen name='Chat' component={Chat} options={{headerShown:false}}/>
      <Stack.Screen name='Notifications' component={Notifications} options={{headerShown:false}}/>
      <Stack.Screen name='Prescriptions' component={Prescriptions} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

// Custom drawer content component
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
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
          <Image source={require('../../assets/images/announcement.png')} style={{
            width: 95,
            height: 95,
            borderRadius: 50,
            objectFit: "fill"
          }} />
          <Text style={{ fontSize: 25, fontFamily: "semi", color: "#fff" }}>Sam</Text>
        </View>
        <Text style={{ fontSize: 18, fontFamily: "semi", color: "#333" }}>Sam</Text>
        <Text style={{ fontSize: 12, color: "#888", marginTop: -7 }}>sam@gmail.com</Text>
        <TouchableOpacity style={{ marginVertical: 7 }} onPress={()=>props.navigation.navigate('Edit')}>
          <Text style={{ color: MAIN_COLOR, fontFamily: "regular", fontSize: 13 }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Drawer Items */}
      <View style={styles.justify_content_center}>
        <View style={styles.drawer_item}>
          
          <TouchableOpacity style={styles.drawer_btn} onPress={() => {
            Linking.openURL("https://wa.me/+14379730887");
          }}>
            <AntDesign name="customerservice" style={styles.drawer_btn_icon} />
            <Text style={styles.drawer_btn_text}>Customer Care</Text>
          </TouchableOpacity>
        </View>
      </View>

      <DrawerItemList {...props} />

      <View style={styles.justify_content_center}>
        <View style={styles.drawer_item}>
          <TouchableOpacity style={styles.drawer_btn} onPress={()=>props.navigation.navigate('Terms')}>
            <Ionicons name="newspaper-outline" style={styles.drawer_btn_icon} />
            <Text style={styles.drawer_btn_text}>Terms & Condition</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.justify_content_center}>
        <View style={styles.drawer_item}>
          <TouchableOpacity style={styles.drawer_btn}  onPress={()=>props.navigation.navigate('Privacy')}>
            <MaterialCommunityIcons name="security-network" style={styles.drawer_btn_icon} />
            <Text style={styles.drawer_btn_text}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Logout Button */}
      <View style={styles.justify_content_center}>
        <View style={styles.drawer_item}>
          <TouchableOpacity style={styles.drawer_btn} onPress={() => props.navigation.navigate('Login')}>
            <AntDesign name="poweroff" style={styles.drawer_btn_icon} />
            <Text style={styles.drawer_btn_text}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.justify_content_center}>
        <Text style={[styles.mv_4, styles.text_semi, styles.text_12]}>Version 0.0.1</Text>
      </View>
    </DrawerContentScrollView>
  );
};


const NavBar = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />} // Passing custom drawerContent
      screenOptions={{headerShown:false, drawerStyle:{ backgroundColor: "#fff",width: 290} }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
                    drawerLabel: "Home",
                    title: "Home",
                    drawerIcon: ({color, size}) => (
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
      />
      <Drawer.Screen
        name="Appointments"
        component={Appointments}
        options={{
                    drawerLabel: "Appointments List",
                    drawerIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="calendar-text-outline" size={size} color={color}/>
                    )
                }}
      />
      <Drawer.Screen
        name="ManageAppointments"
        component={ManageAppointments}
       options={{
                    drawerLabel: "Manage Availability",
                    drawerIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="calendar-edit" size={size} color={color}/>
                    )
                }}
      />
      <Drawer.Screen
        name="PaymentHistory"
        component={PaymentHistory}
         options={{
                    drawerLabel: "Payment History",
                    drawerIcon: ({color, size}) => (
                        <Ionicons name="wallet-outline" size={size} color={color}/>
                    )
                }}
      />
    </Drawer.Navigator>
  );
};

export default NavBar;
