import * as React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {Button, Header, Item, Input} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import ProfileTab from './Screens/ProfileTab';
import LikesTab from './Screens/LikesTab';
import AddMediaTab from './Screens/AddMediaTab';
import SearchTab from './Screens/SearchTab';
import FeedsTab from './Screens/FeedsTab';
import {ScreenStackHeaderLeftView} from 'react-native-screens';

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
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchTab}
        options={{
          title: null,
          headerLeft: () => (
            <View
              style={{
                paddingLeft: 10,
                justifyContent: 'center',
                alignItems: 'center',
                width: screenWidth,
                padding: 10,
              }}>
              <Button
                transparent
                style={{
                  height: 35,
                }}>
                <Item style={{padding: 10}}>
                  <Icon name="search" style={{fontSize: 25, color: '#000'}} />
                  <Input
                    placeholder="Search"
                    style={{fontSize: 18, paddingLeft: 10, color: '#d9d9d9'}}
                  />
                </Item>
              </Button>
            </View>
          ),
          headerRight: () => (
            <AntIcon
              name="scan1"
              style={{fontSize: 25, color: '#000', paddingRight: 10}}
            />
          ),
        }}
      />
    </SearchStack.Navigator>
  );
}
function AddMediaStackScreen() {
  return (
    <AddMediaStack.Navigator>
      <AddMediaStack.Screen name="Add Media" component={AddMediaTab} />
    </AddMediaStack.Navigator>
  );
}
function LikesStackScreen() {
  return (
    <LikesStack.Navigator>
      <LikesStack.Screen name="Likes" component={LikesTab} />
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
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                paddingLeft: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Text style={{fontSize: 18}}> mj_choudhry </Text>
              </TouchableOpacity>
              <IonIcons
                name="ios-arrow-down"
                size={15}
                style={{paddingLeft: 5}}
              />
            </View>
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
