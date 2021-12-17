import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import All from './Screen/All';
import Business from './Screen/Business'
import Entertainment from './Screen/Entertainment'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{showLabel:false}}
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'All') {
            iconName = focused
              ? "home"
              : 'home';
          } else if (route.name === 'Business') {
            iconName = focused ? 'business' : 'business';
          }
          else if (route.name === 'Entertainment') {
            iconName = focused ? 'desktop-outline' : 'desktop-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0a1e96',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="All" component={All} options={{headerShown:false}} />
        <Tab.Screen name="Business" component={Business} options={{headerShown:false}}/>
        <Tab.Screen name="Entertainment" component={Entertainment} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
