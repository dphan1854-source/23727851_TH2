# Họ tên: PHAN XUAN DUNG | MSSV: 23727851 | URL clone HTTPS: https://github.com/dphan1854-source/23727851_TH2.git | Stamp: #997321 | Số cuối: 1 | VARIANT: { watermarkAtTop: true, authField: 'email', tabOrder: 'shopFirst', hapticOnAdd: 'selection', shipFormula: 'B', detailPresentation: 'card' }

---

## 📌 THÔNG TIN SINH VIÊN & BIẾN THỂ ĐỀ THI (TH2)

- **Họ và tên:** PHAN XUAN DUNG
- **Mã số sinh viên (MSSV):** 23727851
- **Số cuối MSSV:** 1
- **Student Seed:** 851
- **Mã Stamp đề thi:** `#997321` (Tính theo công thức: `TH2|23727851|PHAN XUAN DUNG`)
- **URL Clone Repository (HTTPS):** `https://github.com/dphan1854-source/23727851_TH2.git`

### ⚙️ Bảng tham số sinh viên (src/constants/student.ts):
- **DEBOUNCE_MS:** `400ms` (300 + (851 % 5) * 100)
- **STALE_TIME_MS:** `21.000ms` (10.000 + (851 % 20) * 1000)
- **PRICE_MULTIPLIER:** `20.500` (15.000 + (851 % 40) * 500)
- **BASE_SHIP_FEE:** `9.000 đ` (8.000 + (851 % 10) * 1000)
- **ROOM_LABEL:** `P.151` (`P.${100 + (851 % 400)}`)
- **VARIANT:**
  - `watermarkAtTop`: `true` (Luôn hiển thị ở phía trên cùng tất cả màn hình)
  - `authField`: `'email'` (Màn hình đăng nhập yêu cầu Email: `23727851@iuh.edu.vn`)
  - `tabOrder`: `'shopFirst'` (Do số cuối 1 < 5)
  - `hapticOnAdd`: `'selection'` (Do 1 % 3 !== 0)
  - `shipFormula`: `'B'` (Do số cuối 1 là số lẻ: `BASE_SHIP_FEE + Math.round(km * 1500) + 2000`)
  - `detailPresentation`: `'card'` (Do số cuối 1 < 5)

---

## 🚀 CÁC TÍNH NĂNG CỦA ỨNG DỤNG KTXGO

1. **Watermark định danh sinh viên:**
   - Luôn hiển thị ở phía trên cùng: `TH2 · 23727851 · PHAN XUAN DUNG · #997321`.
2. **Màn hình Đăng nhập (Auth Stack):**
   - Yêu cầu nhập Email sinh viên (ví dụ: `23727851@iuh.edu.vn`).
   - Có nút tiện ích điền nhanh email sinh viên.
   - Validation bắt buộc nhập email trước khi vào cửa hàng.
3. **Màn hình Cửa hàng (HomeScreen):**
   - Hiển thị phòng giao hàng: `Giao tận P.151`.
   - Tìm kiếm món ăn với cơ chế debounce 400ms.
   - Menu 12 món ăn & thức uống KTX phong phú (Cơm sườn nướng mỡ hành, Bánh mì pate, Trà sữa trân châu, Mì cay, Gà rán...).
   - Hiển thị danh sách 2 cột bằng FlashList kèm hình ảnh, giá VND và nút thêm giỏ hàng.
4. **Màn hình Chi tiết món (DetailScreen):**
   - Xem chi tiết món ăn, hình ảnh lớn, mô tả và giá tiền.
   - Nút *"Thêm vào giỏ · Haptic"*.
5. **Màn hình Giỏ hàng (CartScreen):**
   - Danh sách món đã chọn, số lượng, thành tiền.
   - Nút xóa món khỏi giỏ hàng.
   - Tổng tiền và thông tin giao phòng P.151.
   - Badge số lượng trên Tab giỏ hàng.
6. **Màn hình Tôi · Location (MeScreen):**
   - Định danh sinh viên: PHAN XUAN DUNG - 23727851 · #997321.
   - Lấy tọa độ GPS và tính khoảng cách Haversine tới cổng KTX.
   - Ước tính phí ship theo công thức B: `9.000 + Math.round(km * 1500) + 2000`.
   - Nút đăng xuất quay lại màn hình Login.

---

## 🛠️ HƯỚNG DẪN CÀI ĐẶT & CHẠY

1. **Cài đặt thư viện:**
   ```bash
   npm install
   ```

2. **Khởi động Metro Bundler:**
   ```bash
   npm start
   ```

3. **Chạy trên thiết bị Android / Máy ảo:**
   ```bash
   npm run android
   ```
