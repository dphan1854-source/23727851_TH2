// TH2 | 23727851 | PHAN XUAN DUNG | #997321
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Watermark } from '@components/Watermark';
import { useAuthStore } from '@stores/authStore';
import { useCampusLocation } from '@hooks/useCampusLocation';
import { STUDENT, examStamp, VARIANT } from '@constants/student';
import { COLORS } from '@constants/theme';

export const MeScreen = () => {
    const logout = useAuthStore((state) => state.logout);
    const { status, distanceKm, shipFee, requestLocation } = useCampusLocation();

    return (
        <SafeAreaView style={styles.container}>
            <Watermark />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>TÔI · LOCATION</Text>
            </View>

            <View style={styles.infoBox}>
                <Text style={styles.name}>{STUDENT.hoTen}</Text>
                <Text style={styles.subInfo}>{STUDENT.mssv} · #{examStamp()}</Text>

                <View style={styles.card}>
                    <Text style={{ color: status === 'granted' ? COLORS.success : COLORS.error }}>
                        Quyền: {status}
                    </Text>
                    {distanceKm !== null && <Text>≈ {distanceKm.toFixed(1)} km tới cổng KTX</Text>}
                    {shipFee !== null && (
                        <Text style={styles.feeText}>Phí ship ước tính: {shipFee.toLocaleString('vi-VN')} đ</Text>
                    )}
                </View>

                <TouchableOpacity style={styles.actionBtn} onPress={requestLocation}>
                    <Text style={styles.btnText}>Lấy vị trí ước tính ship</Text>
                </TouchableOpacity>

                {status === 'blocked' && (
                    <TouchableOpacity style={styles.outlineBtn} onPress={() => Linking.openSettings()}>
                        <Text style={{ color: COLORS.primary }}>Mở Cài đặt (blocked)</Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
                    <Text style={styles.btnText}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.background },
    header: { backgroundColor: COLORS.primary, padding: 12, alignItems: 'center' },
    headerTitle: { color: '#FFF', fontWeight: 'bold' },
    infoBox: { padding: 16, alignItems: 'center' },
    name: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
    subInfo: { color: COLORS.textLight, marginBottom: 12 },
    card: { backgroundColor: '#FFF', width: '100%', padding: 16, borderRadius: 8, marginBottom: 12 },
    feeText: { fontSize: 16, fontWeight: 'bold', color: COLORS.secondary, marginTop: 4 },
    actionBtn: { backgroundColor: COLORS.primary, width: '100%', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 8 },
    outlineBtn: { borderWidth: 1, borderColor: COLORS.primary, width: '100%', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 8 },
    logoutBtn: { backgroundColor: COLORS.error, width: '100%', padding: 12, borderRadius: 8, alignItems: 'center' },
    btnText: { color: '#FFF', fontWeight: 'bold' },
});