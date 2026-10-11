// Đường dẫn: src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Thay đổi 'https://yourdomain.com' thành tên miền chính thức của bạn
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nguyenphuong.io.vn'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Vì là landing page ít thay đổi nội dung
      priority: 1.0,             // Mức độ ưu tiên cao nhất cho trang chủ
    },
  ]
}
