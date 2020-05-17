import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native'
import EStyleSheet from "react-native-extended-stylesheet";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from './src/Main/Main'
import Notification from './src/Notifications/Notification'
import  Profiles  from './src/Profile/Profiles'


let { height, width } = Dimensions.get('window');
EStyleSheet.build({
  $rem: Dimensions.get('window').height / 2208,
});

const TabNavigator = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator initialRouteName="Main"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Main') {
              iconName = 'ios-home';
            } else if (route.name === 'Notification') {
              iconName = 'ios-notifications-outline';
            } else if (route.name === "Profiles") {
              iconName = 'ios-contact'
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: 'skyblue',
          inactiveTintColor: 'gray',
        }}
      >
        <TabNavigator.Screen name="Main" component={Main} options={{ tabBarLabel: 'Anasayfa' }} />
        <TabNavigator.Screen name="Notification" component={Notification} options={{ tabBarLabel: 'Bildirimler' }} />
        <TabNavigator.Screen name="Profiles" component={Profiles} options={{ tabBarLabel: 'Profilim' }} />
      </TabNavigator.Navigator >
    </NavigationContainer >
  );
}

export default App;