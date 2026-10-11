// Đường dẫn: src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Thay đổi 'https://yourdomain.com' thành tên miền chính thức của bạn
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nguyenphuong.io.vn'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',       // Chặn bot quét các file API xử lý form đăng ký
        '/_next/',     // Chặn quét các file nội bộ của Next.js
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
