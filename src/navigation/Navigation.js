import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import NavBar from '../screens/NavBar'
import Terms from '../screens/Terms'
import Privacy from '../screens/Privacy'
import ManageAvailability from '../screens/ManageAvailability'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Dashboard" component={NavBar} options={{headerShown:false}}/>
          <Stack.Screen name="Terms" component={Terms} options={{headerShown:false}}/>
          <Stack.Screen name="Privacy" component={Privacy} options={{headerShown:false}}/>
          {/* <Stack.Screen name="ManageAvailaibility" component={ManageAvailability} options={{headerShown:true}}/> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation