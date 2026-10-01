// TH2 | 23727851 | PHAN XUAN DUNG | #997321

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export const KTX_FOOD_PRODUCTS: Product[] = [
    {
        id: 1,
        title: 'Cơm sườn nướng mỡ hành KTX',
        price: 1.8,
        description: 'Cơm tấm dẻo thơm, sườn nướng than hoa mật ong đậm đà ăn kèm mỡ hành, dưa chua và nước mắm chua ngọt.',
        category: 'Cơm',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
    },
    {
        id: 2,
        title: 'Bánh mì pate thịt nguội đặc biệt',
        price: 1.2,
        description: 'Vỏ bánh mì giòn tan, nhân pate gan béo ngậy, thịt nguội, chả lụa tươi, dưa leo, ngò rí và sốt bơ trứng gà.',
        category: 'Bánh mì',
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500',
    },
    {
        id: 3,
        title: 'Trà sữa trân châu đường đen',
        price: 1.5,
        description: 'Trà sữa Đài Loan thơm nồng hương trà tự nhiên kết hợp trân châu đen nấu đường mật dẻo dai ngọt dịu.',
        category: 'Đồ uống',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
    },
    {
        id: 4,
        title: 'Mì cay hải sản kim chi cấp độ 2',
        price: 2.0,
        description: 'Mì sợi to Hàn Quốc dai giòn, tôm sú tươi, mực lá giòn sần sật, xúc xích và kim chi trong nước lẩu chua cay bốc khói.',
        category: 'Món nước',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500',
    },
    {
        id: 5,
        title: 'Gà rán sốt chua cay giòn rụm',
        price: 2.2,
        description: 'Đùi và cánh gà tươi chiên bột giòn rụm bên ngoài mọng nước bên trong, phủ đẫm sốt cay ngọt Hàn Quốc thơm lừng.',
        category: 'Ăn vặt',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500',
    },
    {
        id: 6,
        title: 'Cơm chiên Dương Châu lạp xưởng',
        price: 1.7,
        description: 'Hạt cơm tơi vàng óng chiên lửa lớn với lạp xưởng tôm tươi, đậu Hà Lan, cà rốt và trứng gà thơm phức.',
        category: 'Cơm',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500',
    },
    {
        id: 7,
        title: 'Bún đậu mắm tôm thập cẩm KTX',
        price: 2.4,
        description: 'Mẹt bún đậu đầy đặn với bún lá, đậu hũ rán vàng, chả cốm chiên thơm, thịt chân giò luộc chấm mắm tôm tắc ớt cay nồng.',
        category: 'Bún - Phở',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=500',
    },
    {
        id: 8,
        title: 'Trà đào cam sả hạt chia thanh mát',
        price: 1.4,
        description: 'Vị trà lài thanh tao hòa cùng nước cam tươi, miếng đào vàng giòn ngọt ngào và hương sả tươi sảng khoái giải nhiệt ngày nóng.',
        category: 'Đồ uống',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500',
    },
    {
        id: 9,
        title: 'Bánh tráng trộn bò khô trứng cút',
        price: 1.0,
        description: 'Bánh tráng sợi phơi sương trộn khô bò cay, trứng cút bùi béo, xoài xanh bào sợi, rau răm tươi và nước sốt tắc sa tế cay the.',
        category: 'Ăn vặt',
        image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500',
    },
    {
        id: 10,
        title: 'Phở bò tái nạm chuẩn vị Hà Nội',
        price: 2.2,
        description: 'Bánh phở mềm thơm, nước dùng ninh xương ống hầm 12 tiếng ngọt thanh đậm đà, thịt bò nạm giòn và thịt tái thơm ngọt.',
        category: 'Bún - Phở',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500',
    },
    {
        id: 11,
        title: 'Cà phê muối béo ngậy IUH',
        price: 1.1,
        description: 'Cà phê phin truyền thống thơm đượm hòa quyện cùng lớp kem muối béo ngậy, mặn mà độc đáo nạp năng lượng học tập.',
        category: 'Đồ uống',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500',
    },
    {
        id: 12,
        title: 'Pizza bò xúc xích phô mai kéo sợi',
        price: 2.8,
        description: 'Đế bánh pizza nướng giòn rụm phủ đầy phô mai mozzarella béo ngậy kéo sợi dài, thịt bò băm sốt BBQ và xúc xích thơm ngon.',
        category: 'Ăn vặt',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
    },
];

export const fetchProducts = async (): Promise<Product[]> => {
    // Giả lập network delay ngắn cho React Query & trạng thái tải
    await new Promise((resolve) => setTimeout(resolve, 200));
    return KTX_FOOD_PRODUCTS;
};

export const fetchProductDetail = async (id: string | number): Promise<Product> => {
    await new Promise((resolve) => setTimeout(resolve, 150));
    const found = KTX_FOOD_PRODUCTS.find((p) => String(p.id) === String(id));
    if (!found) {
        throw new Error('Không tìm thấy món ăn');
    }
    return found;
};