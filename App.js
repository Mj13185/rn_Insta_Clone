import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import ProfileTab from './Screens/ProfileTab';
import LikesTab from './Screens/LikesTab';
import AddMediaTab from './Screens/AddMediaTab';
import SearchTab from './Screens/SearchTab';
import FeedsTab from './Screens/FeedsTab';





function HomeTabs({ navigation }) {
  

  return (
    <Tab.Navigator initialRouteName="Feeds"
    screenOptions={({ route }) => ({
      
      tabBarIcon: ({ focused, size }) => {
        let iconName;

        if (route.name === 'Feeds') {
          iconName = focused ? 'home': 'home';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search';
        }else if (route.name === 'AddMedia') {
          iconName = focused ? 'plus-circle' : 'plus-circle';
        }else if (route.name === 'Likes') {
          iconName = focused ? 'heart' : 'heart';
        }else if (route.name === 'Profile') {
          iconName = focused ? 'user' : 'user';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size}/>;
      },
    })}
    tabBarOptions={{
      showLabel : false,
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    }}

    >
    <Tab.Screen name="Feeds" component={FeedsTab}/>
    <Tab.Screen name="Search" component={SearchTab} />
    <Tab.Screen name="AddMedia" component={AddMediaTab} />
    <Tab.Screen name="Likes" component={LikesTab} />
    <Tab.Screen name="Profile" component={ProfileTab} />
  </Tab.Navigator>
    
  );
}



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs}
        options={{
          title :'Instagram',
          headerLeft: ()=> (<Icon
          name = 'camera'
          size = {25}
          style={{paddingLeft : 10}}
          />),
          headerRight : () =>(
            <Icon 
            name = 'send'
          size = {25}
          style={{paddingRight : 15}}
            />
          )
        }}
        />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

export default App;
