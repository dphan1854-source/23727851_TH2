// TH2 | 23727851 | PHAN XUAN DUNG | #997321
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@tanstack/react-query';
import * as Haptics from '../shims/expo-haptics';
import { fetchProductDetail } from '@services/productApi';
import { Watermark } from '@components/Watermark';
import { useCartStore } from '@stores/cartStore';
import { PRICE_MULTIPLIER, STUDENT, VARIANT } from '@constants/student';
import { COLORS } from '@constants/theme';

export const DetailScreen = ({ route, navigation }: any) => {
    const { id } = route.params;
    const addItem = useCartStore((state) => state.addItem);

    const { data: product, isLoading } = useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchProductDetail(id),
    });

    if (isLoading || !product) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
        );
    }

    const calculatedPrice = Math.round(product.price * PRICE_MULTIPLIER);

    const handleAdd = () => {
        Haptics.selectionAsync(); // selection do số cuối = 1
        addItem({ id: product.id, title: product.title, price: calculatedPrice, image: product.image });
        Alert.alert('Thông báo', `Đã thêm món vào giỏ! (${STUDENT.mssv})`);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
            <Watermark />
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
                <Text style={{ color: COLORS.primary }}>← Chi tiết món</Text>
            </TouchableOpacity>

            <View style={styles.card}>
                <Image source={{ uri: product.image }} style={styles.img} resizeMode="contain" />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{calculatedPrice.toLocaleString('vi-VN')} đ</Text>
                <Text style={styles.desc} numberOfLines={3}>{product.description}</Text>

                <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
                    <Text style={styles.btnText}>Thêm vào giỏ · Haptic</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: { padding: 16, backgroundColor: '#FFF', margin: 16, borderRadius: 12, alignItems: 'center' },
    img: { width: 150, height: 150, marginBottom: 12 },
    title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
    price: { fontSize: 16, color: COLORS.primary, marginVertical: 8, fontWeight: 'bold' },
    desc: { color: COLORS.textLight, textAlign: 'center', marginBottom: 16 },
    addBtn: { backgroundColor: COLORS.primary, padding: 12, borderRadius: 8, width: '100%', alignItems: 'center' },
    btnText: { color: '#FFF', fontWeight: 'bold' },
});