// TH2 | 23727851 | PHAN XUAN DUNG | #997321
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '@stores/authStore';
import { Watermark } from '@components/Watermark';
import { COLORS } from '@constants/theme';
import { STUDENT } from '@constants/student';

export const LoginScreen = () => {
    const [input, setInput] = useState('');
    const login = useAuthStore((state) => state.login);
    const exampleEmail = `${STUDENT.mssv}@iuh.edu.vn`;

    const handleLogin = () => {
        const trimmed = input.trim();
        if (!trimmed) {
            Alert.alert(
                'Yêu cầu nhập Email',
                `Vui lòng nhập Email sinh viên trước khi vào cửa hàng (Ví dụ: ${exampleEmail})`
            );
            return;
        }
        console.log('Logging in with:', trimmed);
        login(trimmed);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Luôn hiển thị Watermark ở phía trên */}
            <Watermark />

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={styles.content}>
                    <Text style={styles.title}>KTXGO</Text>
                    <Text style={styles.subtitle}>Giao đồ ăn tận phòng ký túc xá</Text>

                    <Text style={styles.inputLabel}>
                        Email sinh viên <Text style={styles.required}>*</Text>
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder={`Email — ${exampleEmail}`}
                        placeholderTextColor={COLORS.textLight}
                        value={input}
                        onChangeText={setInput}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <TouchableOpacity
                        style={styles.quickFillBtn}
                        onPress={() => setInput(exampleEmail)}
                    >
                        <Text style={styles.quickFillText}>Điền nhanh: {exampleEmail}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.button}
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Vào cửa hàng</Text>
                    </TouchableOpacity>
                    <Text style={styles.footerNote}>Auth Stack · Yêu cầu nhập Email sinh viên</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.background },
    content: { padding: 20, justifyContent: 'center' },
    title: { fontSize: 32, fontWeight: 'bold', color: COLORS.primary, textAlign: 'center' },
    subtitle: { fontSize: 15, color: COLORS.textLight, textAlign: 'center', marginBottom: 24, marginTop: 4 },
    inputLabel: { fontSize: 14, fontWeight: '600', color: COLORS.text, marginBottom: 8 },
    required: { color: COLORS.error },
    input: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 8,
        padding: 12,
        fontSize: 15,
        color: COLORS.text,
    },
    quickFillBtn: {
        alignSelf: 'flex-start',
        paddingVertical: 6,
        paddingHorizontal: 8,
        marginTop: 6,
        marginBottom: 16,
    },
    quickFillText: {
        fontSize: 13,
        color: COLORS.primary,
        textDecorationLine: 'underline',
    },
    button: { backgroundColor: COLORS.primary, padding: 14, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
    footerNote: { textAlign: 'center', color: COLORS.textLight, marginTop: 16, fontSize: 13 },
});