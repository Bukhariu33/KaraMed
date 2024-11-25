import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ManageAvailability from '../screens/ManageAvailability';
import UpdateConsultationFees from '../screens/UpdateConsultationFees';
import Reviews from '../screens/Reviews';
import EditProfile from '../screens/EditProfile';
import Chat from '../screens/Chat';
import Home from '../screens/Home';
import styles, { MAIN_COLOR } from './styles';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home Stack Navigator for the Home and related screens
const HomeStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="intial"
                component={Home}
                options={{ headerTitle: 'Home', headerShown: false }} // Customize the header if needed
            />
            <Stack.Screen name='ManageAvailability' component={ManageAvailability} options={{ headerShown: false }} />
            <Stack.Screen name='ConsultationFees' component={UpdateConsultationFees} options={{ headerShown: false }} />
            <Stack.Screen name='Reviews' component={Reviews} options={{ headerShown: false }} />
            <Stack.Screen name='Edit' component={EditProfile} options={{ headerShown: false }} />
            <Stack.Screen name='Chat' component={Chat} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

// Random Component Placeholder
const Random = () => {
    return (
        <View>
            <Text>Random Screen</Text>
        </View>
    );
};

// Bottom Tab Navigator
const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: MAIN_COLOR,
                tabBarInactiveTintColor: '#999',
                tabBarStyle: { height: 65, backgroundColor: "#fff" },
                tabBarLabelStyle: { marginBottom: 4, fontSize: 12, fontFamily: "semi" },
            }}
        >
            <Tab.Screen name={'HomeScreen'} component={HomeStack} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="home" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name={'Finance'} component={Random} options={{
                tabBarLabel: "Finance",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="finance" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name={'Cards'} component={Random} options={{
                tabBarLabel: "Cards",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="credit-card" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name={'Me'} component={Random} options={{
                tabBarLabel: "Me",
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="user" size={size} color={color} />
                ),
            }} />
        </Tab.Navigator>
    );
};

export default BottomTab;
