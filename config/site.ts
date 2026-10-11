// Đường dẫn: src/config/site.ts

export const siteConfig = {
  name: "Văn phòng số Bảo hiểm Xã hội - Nguyễn Thị Phương",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.nguyenphuong.io.vn",
  hotline: process.env.NEXT_PUBLIC_COLLECT_HOTLINE || "0977.931.222",
  
  collector: {
    name: process.env.NEXT_PUBLIC_COLLECTOR_NAME || "Nguyễn Thị Phương",
    phone: process.env.NEXT_PUBLIC_COLLECTOR_PHONE || "0977.931.222",
    zaloUrl: process.env.NEXT_PUBLIC_COLLECTOR_ZALO_URL || "https://zalo.me",
    email: process.env.NEXT_PUBLIC_COLLECTOR_EMAIL || "phuongcuong72013@gmail.com",
    address: process.env.NEXT_PUBLIC_COLLECT_ADDRESS || "Điểm thu BHXH, Huyện Thanh Trì, TP. Hà Nội",
  }
};
