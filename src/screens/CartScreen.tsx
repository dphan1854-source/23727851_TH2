// TH2 | 23727851 | PHAN XUAN DUNG | #997321
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCartStore } from '@stores/cartStore';
import { Watermark } from '@components/Watermark';
import { ROOM_LABEL, VARIANT } from '@constants/student';
import { COLORS } from '@constants/theme';

export const CartScreen = () => {
  const { items, changeQty, removeItem, getTotalAmount } = useCartStore();

  return (
    <SafeAreaView style={styles.container}>
      <Watermark />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GIỎ HÀNG</Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={{ color: COLORS.textLight }}>
                x{item.quantity} {(item.price * item.quantity).toLocaleString('vi-VN')} đ
              </Text>
            </View>
            <TouchableOpacity style={styles.delBtn} onPress={() => removeItem(item.id)}>
              <Text style={{ color: '#FFF' }}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={{ color: COLORS.text, fontWeight: 'bold' }}>Giao đến {ROOM_LABEL}</Text>
        <Text style={styles.totalText}>Tổng hàng: {getTotalAmount().toLocaleString('vi-VN')} đ</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { backgroundColor: COLORS.primary, padding: 12, alignItems: 'center' },
  headerTitle: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  itemRow: { flexDirection: 'row', backgroundColor: '#FFF', padding: 12, margin: 6, borderRadius: 8 },
  itemTitle: { fontWeight: 'bold', fontSize: 14 },
  delBtn: { backgroundColor: COLORS.error, padding: 8, borderRadius: 6, justifyContent: 'center' },
  footer: { padding: 16, backgroundColor: '#FFF', borderTopWidth: 1, borderColor: COLORS.border },
  totalText: { fontSize: 16, fontWeight: 'bold', color: COLORS.primary, marginTop: 4 },
});
