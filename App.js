import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Button} from 'react-native';
import Logo from './src/components/Logo';
import Login from './src/components/Login';
import Test1 from './src/components/Test1';
import Test2 from './src/components/Test2';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator keyboardDismissMode="none" initialRouteName={Logo}>
        <Drawer.Screen name="Logo" component={Logo} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Test1" component={Test1} />
        <Drawer.Screen name="Test2" component={Test2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
