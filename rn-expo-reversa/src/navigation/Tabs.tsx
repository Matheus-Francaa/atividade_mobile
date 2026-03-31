import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import IconsScreen from '../screens/IconsScreen';
import FormsScreen from '../screens/FormsScreen';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => <Text style={{ fontSize: 22 }}>◻️</Text>,
                }}
            />

            <Tab.Screen
                name="Icons"
                component={IconsScreen}
                options={{
                    tabBarIcon: () => <Text style={{ fontSize: 22 }}>⭐</Text>,
                }}
            />

            <Tab.Screen
                name="Forms"
                component={FormsScreen}
                options={{
                    tabBarIcon: () => <Text style={{ fontSize: 22 }}>⚪</Text>,
                }}
            />
        </Tab.Navigator>
    );
}