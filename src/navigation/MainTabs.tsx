// TH2 | 23727851 | PHAN XUAN DUNG | #997321
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ShopStack } from './ShopStack';
import { CartScreen } from '@screens/CartScreen';
import { MeScreen } from '@screens/MeScreen';
import { useCartStore } from '@stores/cartStore';

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
    const totalQty = useCartStore((state) => state.getTotalQuantity());

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            {/* Thứ tự shopFirst theo quy định số cuối = 1 */}
            <Tab.Screen name="Cửa hàng" component={ShopStack} />
            <Tab.Screen
                name="Giỏ"
                component={CartScreen}
                options={{ tabBarBadge: totalQty > 0 ? totalQty : undefined }}
            />
            <Tab.Screen name="Tôi" component={MeScreen} />
        </Tab.Navigator>
    );
};