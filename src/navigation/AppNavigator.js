import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import AdminDashboard from '../screens/AdminDashboard';
import UserDashboard from '../screens/UserDashboard';
import { getToken } from '../utils/Auth'; 

const Stack = createStackNavigator();

const AppNavigator = () => {
  const token = getToken();
  const role = token ? jwtDecode(token).role : null; 

  return (
    <Stack.Navigator>
      {role === 'Admin' ? (
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      ) : (
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
      )}
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
