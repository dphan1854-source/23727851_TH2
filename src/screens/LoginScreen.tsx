// TH2 | 23727851 | PHAN XUAN DUNG | #997321
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '@stores/authStore';
import { Watermark } from '@components/Watermark';
import { COLORS } from '@constants/theme';
import { STUDENT, VARIANT } from '@constants/student';

export const LoginScreen = () => {
    const [input, setInput] = useState('');
    const login = useAuthStore((state) => state.login);

    return (
        <SafeAreaView style={styles.container}>
            {VARIANT.watermarkAtTop && <Watermark />}

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={styles.content}>
                    <Text style={styles.title}>KTXGO</Text>
                    <Text style={styles.subtitle}>Giao đồ tận phòng ký túc xá</Text>

                    <TextInput
                        style={styles.input}
                        placeholder={`Số điện thoại — 09${STUDENT.mssv.slice(-7)}`}
                        value={input}
                        onChangeText={setInput}
                        keyboardType="phone-pad"
                    />

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.button}
                        onPress={() => {
                            console.log('Logging in with:', input);
                            login(input);
                        }}
                    >
                        <Text style={styles.buttonText}>Vào cửa hàng</Text>
                    </TouchableOpacity>
                    <Text style={styles.footerNote}>Auth Stack · chưa có token</Text>
                </View>
            </View>

            {!VARIANT.watermarkAtTop && <Watermark />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.background },
    content: { padding: 20, justifyContent: 'center' },
    title: { fontSize: 32, fontWeight: 'bold', color: COLORS.primary, textAlign: 'center' },
    subtitle: { fontSize: 14, color: COLORS.textLight, textAlign: 'center', marginBottom: 24 },
    input: { backgroundColor: '#FFF', borderWidth: 1, borderColor: COLORS.border, borderRadius: 8, padding: 12, marginBottom: 16 },
    button: { backgroundColor: COLORS.primary, padding: 14, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
    footerNote: { textAlign: 'center', color: COLORS.textLight, marginTop: 16 },
});