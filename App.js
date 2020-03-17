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
import {Root} from 'native-base';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator keyboardDismissMode="none" initialRouteName={Login}>
      <Drawer.Screen name="테스트1" component={Test1} />
      <Drawer.Screen name="테스트2" component={Test2} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <Root>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName={Login}>
          <Stack.Screen name="Logo" component={Logo} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  );
}
