import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native'
import EStyleSheet from "react-native-extended-stylesheet";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from './src/Main/Main'
import Notification from './src/Notifications/Notification'
import Profiles from './src/Profile/Profiles'
import PastTransaction from './src/PastTransactions/PastTransaction'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
let { height, width } = Dimensions.get('window');
import { Provider } from 'react-redux';
import reducer from './src/redux/reducer/index'
import { createStore } from 'redux';

EStyleSheet.build({
  $rem: Dimensions.get('window').height / 2202,
});

const TabNavigator = createBottomTabNavigator();
function App() {
  return (
    <Provider store={createStore(reducer)}>
      <NavigationContainer>
        <TabNavigator.Navigator initialRouteName="Main"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Main') {
                iconName = 'home';
              } else if (route.name === 'Notification') {
                iconName = 'ios-notifications-outline';
                return <Ionicons name={iconName} size={size} color={color} />;
              } else if (route.name === "Profiles") {
                iconName = 'user-circle'
              } else if (route.name === "PastTransaction") {
                iconName = 'history'

              }

              return <FontAwesome5 name={iconName} size={size} color={color} />;
            }
          })}
          tabBarOptions={{
            activeTintColor: 'skyblue',
            inactiveTintColor: 'gray',
          }}
        >
          <TabNavigator.Screen name="Main" component={Main} options={{ tabBarLabel: 'Ana Sayfa' }} />
          <TabNavigator.Screen name="PastTransaction" component={PastTransaction} options={{ tabBarLabel: 'Geçmiş Kullanımlar' }} />
          <TabNavigator.Screen name="Notification" component={Notification} options={{ tabBarLabel: 'Bildirimler' }} />
          <TabNavigator.Screen name="Profiles" component={Profiles} options={{ tabBarLabel: 'Profilim' }} />

        </TabNavigator.Navigator >
      </NavigationContainer >
    </Provider>
  );
}

export default App;