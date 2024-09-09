import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './Page/Signup';
import Signin from './Page/Signin';
import Password from './Page/Password';
import MemuatFont from "./Page/MemuatFont";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign-In" component={Signin} />
        <Stack.Screen name="Sign-Up" component={SignUpScreen} />
        <Stack.Screen name="Forgot Password" component={Password} />
        <Stack.Screen name="Memuat Font" component={MemuatFont} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;