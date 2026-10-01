// TH2 | 23727851 | PHAN XUAN DUNG | #997321
import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@services/productApi';
import { ProductCard } from '@components/ProductCard';
import { Watermark } from '@components/Watermark';
import { useDebouncedValue } from '@hooks/useDebouncedValue';
import { DEBOUNCE_MS, ROOM_LABEL, STALE_TIME_MS, STUDENT, VARIANT } from '@constants/student';
import { COLORS } from '@constants/theme';

export const HomeScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebouncedValue(search, DEBOUNCE_MS);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: STALE_TIME_MS,
  });

  const filteredProducts = data?.filter((item) =>
    item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Watermark luôn hiển thị ở phía trên */}
      <Watermark />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>KTXGO</Text>
        <Text style={styles.headerSub}>Giao tận {ROOM_LABEL}</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder={`Tìm món (debounce) — ${STUDENT.mssv}`}
        value={search}
        onChangeText={setSearch}
      />

      {/* 3 Trạng thái Mạng */}
      {isLoading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={COLORS.primary} />
          <Text style={{ marginTop: 8 }}>Đang tải món...</Text>
        </View>
      ) : isError ? (
        <View style={styles.center}>
          <Text style={{ color: COLORS.error, fontWeight: 'bold', fontSize: 16 }}>{STUDENT.mssv}</Text>
          <Text>Không tải được dữ liệu món.</Text>
          <TouchableOpacity style={styles.retryBtn} onPress={() => refetch()}>
            <Text style={{ color: '#FFF' }}>Thử lại</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlashList
          data={filteredProducts}
          numColumns={2}
          keyExtractor={(item) => `${STUDENT.mssv}-${item.id}`}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() => navigation.navigate('Detail', { id: String(item.id) })}
            />
          )}
          refreshing={isLoading}
          onRefresh={refetch}
        />
      )}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { backgroundColor: COLORS.primary, padding: 12 },
  headerTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  headerSub: { color: '#BFDBFE', fontSize: 12 },
  searchInput: { backgroundColor: '#FFF', margin: 10, padding: 10, borderRadius: 8, borderWidth: 1, borderColor: COLORS.border },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  retryBtn: { backgroundColor: COLORS.error, padding: 10, borderRadius: 6, marginTop: 10 },
});
