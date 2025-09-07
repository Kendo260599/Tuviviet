# Tử Vi Việt 🌟

Ứng dụng web xem tử vi và cung hoàng đạo miễn phí, được xây dựng với React + TypeScript + Vite.

## 🌐 Demo

Xem demo tại: [https://kendo260599.github.io/Tuviviet/](https://kendo260599.github.io/Tuviviet/)

## ✨ Tính năng

### � Hệ Thống Lá Số Tử Vi (MỚI!)
- **Tứ Trụ (Bát Tự)**: Tính toán Can Chi theo năm-tháng-ngày-giờ sinh chính xác
- **Nhật Chủ**: Phân tích tính cách cốt lõi dựa trên thiên can ngày sinh  
- **Ngũ Hành**: Cân bằng Kim-Mộc-Thủy-Hỏa-Thổ trong bát tự
- **Đại Vận**: Dự đoán vận mệnh 8 giai đoạn 10 năm của cuộc đời
- **Tính Cách**: Phân tích 6 khía cạnh: điểm mạnh/yếu, nghề nghiệp, tình cảm, tài chính, sức khỏe
- **Hợp Tuổi**: Tương hợp thiên can trong hôn nhân và tình cảm

### 🐉 Tử Vi Việt Nam 
- **12 Con Giáp**: Theo năm sinh với đầy đủ thông tin truyền thống
- **Ngũ Hành Phong Thủy**: Kim-Mộc-Thủy-Hỏa-Thổ theo năm sinh
- **Tính Cách & Vận Mệnh**: Dựa trên con giáp và ngũ hành
- **Phương Vị May Mắn**: Hướng tốt cho nhà ở và làm việc

### ⭐ Cung Hoàng Đạo Phương Tây
- **12 Cung**: Xác định tự động theo ngày sinh  
- **Tử Vi Hàng Ngày**: Theo ngày, tuần và tháng
- **Tương Hợp Cung**: Độ hợp trong tình yêu và tình bạn
- **Tìm Kiếm Thông Minh**: Tìm cung hoàng đạo nhanh chóng

### 🚀 Công Nghệ & UX
- 📱 **Responsive Design**: Mượt mà trên mọi thiết bị  
- 🌙 **PWA**: Cài đặt như ứng dụng native
- ⚡ **Hiệu Suất Cao**: Lighthouse score ≥ 90
- ♿ **Accessibility**: Tuân thủ WCAG 2.1 AA

## 🛠️ Công nghệ

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: CSS Modules + CSS Custom Properties
- **Routing**: React Router DOM
- **Testing**: Vitest
- **Deployment**: GitHub Pages + GitHub Actions
- **PWA**: Service Worker + Web App Manifest

## 🚀 Hướng dẫn chạy local

### 1. Clone repository

```bash
git clone https://github.com/Kendo260599/Tuviviet.git
cd Tuviviet
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Chạy development server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

### 4. Build cho production

```bash
npm run build
```

### 5. Preview build

```bash
npm run preview
```

## 📋 Scripts có sẵn

- `npm run dev` - Chạy development server
- `npm run build` - Build cho production
- `npm run preview` - Preview production build
- `npm test` - Chạy tests
- `npm run test:ui` - Chạy tests với UI
- `npm run lint` - Kiểm tra linting
- `npm run deploy` - Deploy lên GitHub Pages (manual)

## 🌐 Triển khai lên GitHub Pages

### Cách 1: Tự động với GitHub Actions (Khuyến nghị)

1. Fork repository này
2. Vào **Settings** → **Pages** → **Source** → chọn **GitHub Actions**
3. Push code lên branch `main` → GitHub Actions sẽ tự động build và deploy

### Cách 2: Manual deploy

1. Cài đặt gh-pages:
```bash
npm install -g gh-pages
```

2. Build và deploy:
```bash
npm run build
npm run deploy
```

### Cấu hình cần thiết

1. **Vite config** (`vite.config.ts`):
```ts
export default defineConfig({
  base: '/Tuviviet/', // Thay bằng tên repository của bạn
  // ...
})
```

2. **Router config** (`src/App.tsx`):
```tsx
<Router basename="/Tuviviet"> {/* Thay bằng tên repository */}
```

3. **GitHub Pages Settings**:
   - Source: GitHub Actions (hoặc Deploy from a branch)
   - Branch: gh-pages (nếu dùng manual deploy)

## 🧪 Testing

Chạy test suite:

```bash
npm test
```

Test cases bao gồm:
- ✅ Xác định cung hoàng đạo từ ngày sinh
- ✅ Validation ngày tháng
- ✅ Format và parse ngày
- ✅ Ranh giới các cung (boundary testing)

## 📁 Cấu trúc thư mục

```
src/
├── components/          # React components
│   ├── DateInput/       # Component chọn ngày sinh
│   ├── ZodiacCard/      # Card hiển thị cung hoàng đạo
│   ├── HoroscopeCard/   # Card hiển thị tử vi
│   └── SearchBox/       # Component tìm kiếm
├── pages/               # Các trang chính
│   ├── HomePage.tsx     # Trang chủ
│   ├── YourSignPage.tsx # Trang cung của bạn
│   ├── CompatibilityPage.tsx # Trang tương hợp
│   └── AboutPage.tsx    # Trang giới thiệu
├── data/                # Dữ liệu static
│   ├── zodiacData.ts    # Thông tin 12 cung hoàng đạo
│   ├── horoscopeData.ts # Dữ liệu tử vi mẫu
│   └── compatibilityData.ts # Dữ liệu tương hợp
├── utils/               # Utility functions
│   ├── zodiacUtils.ts   # Logic xác định cung hoàng đạo
│   ├── localStorage.ts  # Quản lý localStorage
│   ├── shareUtils.ts    # Web Share API
│   └── helpers.ts       # Helpers khác
├── styles/              # CSS files
│   └── globals.css      # Global styles
└── types/               # TypeScript definitions
    └── index.ts         # Type definitions
```

## 🎨 Thiết kế

- **Color scheme**: Tím pastel (#8B5A9F) làm màu chủ đạo
- **Typography**: Inter + Noto Sans cho tiếng Việt
- **Layout**: Mobile-first responsive design
- **Theme**: Tối giản, thân thiện với người dùng

## 📈 Performance

- ⚡ **Lighthouse Score**: 90+ trên tất cả metrics
- 📦 **Bundle Size**: < 150KB gzipped
- 🚀 **First Load**: < 3s trên 3G
- 💾 **PWA**: Cache static assets với Service Worker

## 🐛 Báo lỗi

Nếu gặp lỗi, vui lòng [tạo issue](https://github.com/Kendo260599/Tuviviet/issues) với:
- Mô tả chi tiết lỗi
- Steps to reproduce
- Screenshots (nếu có)
- Browser và version

## 🤝 Đóng góp

1. Fork project
2. Tạo feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add some AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Tạo Pull Request

## 📄 License

Distributed under the MIT License.

## 🙏 Acknowledgments

- Dữ liệu cung hoàng đạo dựa trên hệ thống 12 cung truyền thống
- Icons từ emoji unicode
- Inspiration từ các ứng dụng tử vi hiện đại

---

**Made with ❤️ for Vietnamese astrology community**