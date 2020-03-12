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
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator initialRouteName={Logo}>
      <Stack.Screen
        name="Logo"
        component={Logo}
        options={({navigation, route}) => ({
          headerTitle: '',
          headerLeft: () => (
            <Button onPress={() => navigation.toggleDrawer()} title="열기" />
          ),
        })}
      />
      <Stack.Screen options={{title: 'Login'}} name="Login" component={Login} />
      <Stack.Screen options={{title: 'Test1'}} name="Test1" component={Test1} />
      <Stack.Screen options={{title: 'Test2'}} name="Test2" component={Test2} />
    </Stack.Navigator>
  );
}

function getHeaderTitle(route) {
  // Access the tab navigator's state using `route.state`
  const routeName = route.state
    ? // Get the currently active route name in the tab navigator
      route.state.routes[route.state.index].name
    : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
      // In our case, it's "Feed" as that's the first screen inside the navigator
      route.params?.screen || 'Logo';

  switch (routeName) {
    case 'Logo':
      return 'Logo';
    case 'Login':
      return 'Login';
    case 'Test1':
      return 'Test1';
    case 'Test2':
      return 'Test2';
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator keyboardDismissMode="none">
        <Drawer.Screen name="Root" component={Root} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
