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
import {fetchCategories} from './actions/actions';
import Categories from './reducers/reducers';
import {API, graphqlOperation} from 'aws-amplify';
import {listCategorys} from './graphql/queries';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

API.graphql(graphqlOperation(listCategorys)).then((response) => {
  console.log('graphql test response:');
  console.log(response);
});

const Stack = createStackNavigator();
// const loggerMiddleware = createLogger();
const store = createStore(
  Categories,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    // loggerMiddleware, // neat middleware that logs actions
  ),
);

store.dispatch(fetchCategories()).then(() => console.log(store.getState()));

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
