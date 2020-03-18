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

import BoardAdd from './src/components/BoardAdd';
import BoardList from './src/components/BoardList';
import TodoList from './src/components/TodoList';
import {Root} from 'native-base';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator keyboardDismissMode="none" initialRouteName={BoardList}>
      <Drawer.Screen name="게시판1" component={BoardList} />
      <Drawer.Screen name="설비일지" component={BoardList} />
      <Drawer.Screen name="달력" component={TodoList} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <Root>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName={Login}>
          {/*사이드 메뉴 */}
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          <Stack.Screen name="Logo" component={Logo} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  );
}
