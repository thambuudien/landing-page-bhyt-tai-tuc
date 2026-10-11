// Đường dẫn: src/app/page.tsx
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

// Import các thành phần giao diện
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

// 🚀 CẤU HÌNH METADATA TỐI ƯU SEO & OPEN GRAPH CHUẨN GOOGLE / FACEBOOK / ZALO
export const metadata: Metadata = {
  title: 'Nhắc Hạn BHYT Tự Động - Bảo Vệ Quyền Lợi 5 Năm Liên Tục',
  description: 'Đăng ký nhận thông báo nhắc lịch gia hạn thẻ BHYT miễn phí trước 30 ngày qua Zalo/SMS. Đảm bảo quyền lợi khám chữa bệnh 100% liên tục, không lo bị ngắt quãng tích lũy 5 năm.',
  keywords: [
    'nhắc hạn bhyt', 
    'bảo hiểm y tế 5 năm liên tục', 
    'gia hạn thẻ bhyt online', 
    'tra cứu hạn thẻ bhyt', 
    'nhân viên thu bhxh bhyt', 
    'quyền lợi bhyt'
  ],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  
  // Cấu hình hiển thị khi chia sẻ liên kết mạng xã hội (Facebook, Zalo)
  openGraph: {
    title: 'Nhắc Hạn BHYT Tự Động - Bảo Vệ Quyền Lợi 5 Năm Liên Tục',
    description: 'Hệ thống tự động quét và nhắn lịch nhắc hạn thẻ BHYT trước 30 ngày qua SMS/Zalo. Tránh gián đoạn, an tâm hưởng 100% chi phí khám chữa bệnh.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: '/images/og-banner.jpg', // Kích thước chuẩn khuyến nghị: 1200x630 pixel
        width: 1200,
        height: 630,
        alt: 'Hệ thống nhắc hạn thẻ Bảo hiểm Y tế tự động bảo vệ quyền lợi 5 năm liên tục',
      },
    ],
  },

  // Cấu hình hiển thị trên Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'Nhắc Hạn BHYT Tự Động - Bảo Vệ Quyền Lợi 5 Năm Liên Tục',
    description: 'Hệ thống tự động nhắn lịch nhắc hạn thẻ BHYT trước 30 ngày qua SMS/Zalo.',
    images: ['/images/og-banner.jpg'],
  },

  // Cấu hình chặn lập chỉ mục các trang rác (Nếu có) nhưng cho phép index trang chủ
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* 1. MÀN HÌNH ĐẦU (HERO SECTION) */}
      <Hero />

      {/* 2. KHỐI NỖI ĐAU & BẢNG SO SÁNH QUYỀN LỢI TỐI ƯU SEO COGNITIVE */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Tại sao việc giữ thẻ BHYT "5 năm liên tục" lại quan trọng đến thế?
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Theo quy định của Bảo hiểm Xã hội Việt Nam, nếu thời gian gián đoạn đóng quá 3 tháng, thời gian tích lũy cũ sẽ bị hủy bỏ hoàn toàn.
          </p>
        </div>
        
        {/* Bảng dữ liệu chuẩn ngữ nghĩa (Semantic HTML Table) giúp Google hiểu cấu trúc nội dung */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-8">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-slate-100 text-slate-700 text-sm border-b border-slate-200">
                <th className="p-4 font-bold">Quyền lợi Khám Chữa Bệnh (KCB)</th>
                <th className="p-4 font-bold">Thẻ thông thường</th>
                <th className="p-4 font-bold text-blue-700 bg-blue-50/50">Thẻ đạt 5 năm liên tục</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 font-medium text-slate-800">Mức hưởng bảo hiểm đúng tuyến</td>
                <td className="p-4 text-gray-600">Từ 80% - 95% chi phí danh mục</td>
                <td className="p-4 font-bold text-emerald-600 bg-blue-50/50">Quỹ BHYT chi trả tối đa 100% chi phí</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 font-medium text-slate-800">Giấy chứng nhận miễn cùng chi trả</td>
                <td className="p-4 text-gray-600">Không được hỗ trợ cấp</td>
                <td className="p-4 text-slate-700 bg-blue-50/50">
                  Được cấp khi số tiền cùng chi trả trong năm lớn hơn 6 lần mức lương cơ sở
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 font-medium text-slate-800">Thời gian gián đoạn tối đa cho phép</td>
                <td className="p-4 text-gray-600">Không giới hạn</td>
                <td className="p-4 text-red-500 bg-blue-50/50 font-medium">
                  Không quá 3 tháng (90 ngày), quá hạn phải tích lũy lại từ đầu
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-sm text-center italic text-red-500 font-medium max-w-2xl mx-auto leading-relaxed">
          ⚠️ Cảnh báo từ cơ sở: Thẻ BHYT mẫu mới hiện nay không in hạn dùng trực tiếp trên phôi giấy, khiến người dân rất dễ quên ngày đóng tiếp nếu không chủ động tra cứu thường xuyên!
        </p>
      </section>

      {/* 3. KHỐI QUY TRÌNH HỆ THỐNG (BENEFITS SECTION) */}
      <Benefits />

      {/* 4. FORM ĐĂNG KÝ NHẬN THÔNG BÁO (CLIENT INTERACTION FORM) */}
      <RegistrationForm />

      {/* 5. TOÀN BỘ CHÂN TRANG & THÔNG TIN ĐIỂM THU PHỤ TRÁCH & CREDIT THƯƠNG HIỆU */}
      <Footer />

    </main>
  );
}
