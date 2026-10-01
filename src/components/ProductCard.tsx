// TH2 | 23727851 | PHAN XUAN DUNG | #997321
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Haptics from '../shims/expo-haptics';
import { Product } from '@services/productApi';
import { PRICE_MULTIPLIER } from '@constants/student';
import { COLORS } from '@constants/theme';
import { useCartStore } from '@stores/cartStore';

interface Props {
  product: Product;
  onPress: () => void;
}

export const ProductCard: React.FC<Props> = ({ product, onPress }) => {
  const addItem = useCartStore((state) => state.addItem);
  const calculatedPrice = Math.round(product.price * PRICE_MULTIPLIER);

  const handleAddToCart = () => {
    // Haptic selection do số cuối MSSV = 1
    Haptics.selectionAsync();
    addItem({
      id: product.id,
      title: product.title,
      price: calculatedPrice,
      image: product.image,
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
      <Text style={styles.price}>{calculatedPrice.toLocaleString('vi-VN')} đ</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    padding: 10,
    margin: 6,
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  image: { width: '100%', height: 100, marginBottom: 8 },
  title: { fontSize: 14, fontWeight: 'bold', color: COLORS.text, height: 36 },
  price: { fontSize: 13, color: COLORS.primary, fontWeight: '600', marginTop: 4 },
  addButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  addText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});
