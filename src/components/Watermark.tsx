// TH2 | 23727851 | PHAN XUAN DUNG | #997321
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { STUDENT, examStamp } from '@constants/student';
import { COLORS } from '@constants/theme';

export const Watermark = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                TH2 · {STUDENT.mssv} · {STUDENT.hoTen} · #{examStamp()}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DBEAFE',
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#BFDBFE',
    },
    text: {
        color: COLORS.primary,
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});