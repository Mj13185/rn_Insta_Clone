import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import ProfileTab from './Screens/ProfileTab';
import LikesTab from './Screens/LikesTab';
import AddMediaTab from './Screens/AddMediaTab';
import SearchTab from './Screens/SearchTab';
import FeedsTab from './Screens/FeedsTab';

const FeedStack = createStackNavigator();
const SearchStack = createStackNavigator();
const AddMediaStack = createStackNavigator();
const LikesStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="Home"
        component={FeedsTab}
        options={{
          title: 'Instagram',
          headerTitleStyle: {
            fontFamily: 'GrandHotel-Regular',
            fontWeight: '900',
            fontSize: 30,
          },
          headerLeft: () => (
            <Icon name="camera" size={25} style={{paddingLeft: 15}} />
          ),
          headerRight: () => (
            <Icon name="send" size={25} style={{paddingRight: 15}} />
          ),
        }}
      />
    </FeedStack.Navigator>
  );
}
function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Profile" component={SearchTab} />
    </SearchStack.Navigator>
  );
}
function AddMediaStackScreen() {
  return (
    <AddMediaStack.Navigator>
      <AddMediaStack.Screen name="Profile" component={AddMediaTab} />
    </AddMediaStack.Navigator>
  );
}
function LikesStackScreen() {
  return (
    <LikesStack.Navigator>
      <LikesStack.Screen name="Profile" component={LikesTab} />
    </LikesStack.Navigator>
  );
}
function ProfileStcakScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          title: null,
          headerLeft: () => (
            <Icon name="camera" size={25} style={{paddingLeft: 15}} />
          ),
          headerRight: () => (
            <Icon name="menu" size={25} style={{paddingRight: 15}} />
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feeds"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size}) => {
            let iconName;
            let iconColor;

            if (route.name === 'Feeds') {
              iconName = focused ? 'home' : 'home';
              iconColor = focused ? 'blue' : 'grey ;';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
              iconColor = focused ? 'blue' : 'grey ;';
            } else if (route.name === 'AddMedia') {
              iconName = focused ? 'plus-square' : 'plus-square';
              iconColor = focused ? 'blue' : 'grey ;';
            } else if (route.name === 'Likes') {
              iconName = focused ? 'heart' : 'heart';
              iconColor = focused ? 'blue' : 'grey ;';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
              iconColor = focused ? 'blue' : 'grey ;';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={iconColor} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Feeds" component={FeedStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="AddMedia" component={AddMediaStackScreen} />
        <Tab.Screen name="Likes" component={LikesStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStcakScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
