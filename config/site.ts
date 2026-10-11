// Đường dẫn: src/config/site.ts

export const siteConfig = {
    name: "Hệ thống Nhắc Hạn BHYT Cộng Đồng",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
    hotline: process.env.NEXT_PUBLIC_COLLECT_HOTLINE || "1900 xxxx",
    
    // Thông tin nhân viên thu phí phụ trách
    collector: {
      name: process.env.NEXT_PUBLIC_COLLECTOR_NAME || "Chưa cập nhật",
      phone: process.env.NEXT_PUBLIC_COLLECTOR_PHONE || "Chưa cập nhật",
      zaloUrl: process.env.NEXT_PUBLIC_COLLECTOR_ZALO_URL || "#",
      email: process.env.NEXT_PUBLIC_COLLECTOR_EMAIL || "contact@yourdomain.com",
      address: process.env.NEXT_PUBLIC_COLLECT_ADDRESS || "Chưa có địa chỉ chính thức",
    }
  };
  
  export type SiteConfig = typeof siteConfig;
  