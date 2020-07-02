import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Main" component={HomeScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
