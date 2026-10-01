import { apiClient } from './apiClient';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>('/products?limit=12');
    return response.data;
};

export const fetchProductDetail = async (id: string): Promise<Product> => {
    const response = await apiClient.get<Product>(`/products/${id}`);
    return response.data;
};