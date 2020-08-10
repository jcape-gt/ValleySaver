import 'react-native-gesture-handler';
import 'babel-polyfill'; // [todo]: determine if needed for 'cross-fetch'
import React from 'react';
import thunkMiddleware from 'redux-thunk';
// import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import ImageScreen from './screens/ImageScreen';
import rootReducer from './reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const Stack = createStackNavigator();
// const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      // loggerMiddleware, // neat middleware that logs actions
    ),
  ),
);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
