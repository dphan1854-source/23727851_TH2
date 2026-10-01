// TH2 | 23727851 | PHAN XUAN DUNG | #997321
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuthStore } from '@stores/authStore';
import { LoginScreen } from '@screens/LoginScreen';
import { MainTabs } from './MainTabs';

const Stack = createStackNavigator();

export const RootNavigator = () => {
    const token = useAuthStore((state) => state.token);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {token ? (
                    <Stack.Screen name="MainTabs" component={MainTabs} />
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};