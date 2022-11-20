import * as React from 'react';
import {SafeAreaView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import Login from './screens/Login'
import Settings from './screens/Settings'
import Home from './screens/Home'
import SignUp from './screens/SignUp';

// Screen names
const loginName = 'Login';
const settingsName = 'Settings';
const homeName = 'Home';
const signUpName = 'Signup'

// Tab navigator
const Tab = createBottomTabNavigator();

export default function MainContainer(){

    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) =>{
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName){
                        iconName = focused ? 'home' : 'home-outline';
                    } else if(rn === settingsName){
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if(rn === loginName){
                        iconName = focused ? 'log-in' : 'log-in-outline';
                    } else if(rn === signUpName){
                        iconName = focused ? 'person-add' : 'person-add-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: '#0862ff',
                inactiveTintColor: 'black',
            }}
            >

            <Tab.Screen name={homeName} component={Home} />
            <Tab.Screen name={signUpName} component={SignUp} />
            <Tab.Screen name={loginName} component={Login} />
            <Tab.Screen name={settingsName} component={Settings} />



            </Tab.Navigator>
        </NavigationContainer>

    )
}