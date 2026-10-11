// Đường dẫn: src/app/page.tsx
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

// Import các thành phần giao diện động
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nhắc Hạn BHYT Thanh Trì - Nhân Viên Thu Nguyễn Thị Phương',
  description: 'Hệ thống đăng ký nhắc lịch gia hạn thẻ BHYT tự động tại Thanh Trì, Hà Nội. Được quản lý bởi Nhân viên thu BHXH Nguyễn Thị Phương - Hỗ trợ bà con giữ vững quyền lợi 5 năm liên tục.',
  keywords: [
    'nguyen thi phuong bao hiem', 
    'nhắc hạn bhyt thanh trì', 
    'bhyt 5 nam lien tuc nguyen thi phuong', 
    'gia han bao hiem y te thanh tri', 
    'diem thu bhxh thanh tri'
  ],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nhắc Hạn BHYT Tự Động - Nhân Viên Thu Nguyễn Thị Phương (Thanh Trì)',
    description: 'Bà con Thanh Trì đăng ký nhận tin nhắn nhắc hạn BHYT miễn phí trước 30 ngày. Đảm bảo quỹ BHYT chi trả 100% viện phí, bảo vệ thẻ 5 năm liên tục.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: '/images/og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Hệ thống nhắc hạn BHYT Nguyễn Thị Phương Thanh Trì',
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* 1. MÀN HÌNH ĐẦU (HERO SECTION) */}
      <Hero />

      {/* 2. ĐOẠN NỘI DUNG THUYẾT PHỤC CHẠM ĐẾN NỖI ĐAU KHÁCH HÀNG */}
      <section className="py-16 px-4 max-w-4xl mx-auto border-b border-slate-100">
        <div className="text-center mb-10">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Cảnh báo từ nhân viên thu bảo hiểm
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight mt-3 leading-tight">
            Thẻ BHYT Mẫu Mới Không In Hạn Dùng:<br/>
            <span className="text-red-600">80% Người Dân Đang Quên Ngày Gia Hạn!</span>
          </h2>
        </div>

        <div className="space-y-6 text-base text-slate-700 leading-relaxed text-justify">
          <p>
            Chào bà con, mình là <strong>Nguyễn Thị Phương</strong> - Nhân viên thu bảo hiểm trực thuộc cơ quan Bảo hiểm Xã hội tại khu vực <strong>Thanh Trì, Hà Nội</strong>. Trong quá trình hỗ trợ bà con làm thủ tục KCB, Phương đã chứng kiến rất nhiều trường hợp đau lòng: Nhiều gia đình có người thân đổ bệnh nặng, nằm viện điều trị tốn hàng trăm triệu đồng mới tá hỏa phát hiện ra thẻ BHYT đã hết hạn từ lúc nào không hay.
          </p>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-amber-800 mb-2 text-md flex items-center gap-1.5">
              ⚠️ Quyền lợi &ldquo;5 năm liên tục&rdquo; dễ dàng bị HỦY BỎ chỉ vì chậm đóng 1 ngày!
            </h4>
            <p className="text-sm text-amber-900">
              Quy định của Luật Bảo hiểm nêu rõ: Nếu thời gian gián đoạn giữa 2 lần đóng BHYT <strong>quá 3 tháng (90 ngày)</strong>, toàn bộ thời gian tích lũy trước đó của bà con sẽ <strong>bị ngắt quãng và tính lại từ đầu</strong>. Bà con sẽ mất quyền được Quỹ BHYT chi trả 100% viện phí đúng tuyến, phải tự đồng chi trả những khoản tiền khổng lồ ngoài ý muốn.
            </p>
          </div>

          <p>
            Thấu hiểu việc thẻ giấy mẫu mới không còn ghi hạn sử dụng khiến bà con gặp khó khăn trong việc theo dõi, Phương đã xây dựng <strong>Hệ thống nhắc hạn BHYT tự động hoàn toàn MIỄN PHÍ</strong> này. Chỉ cần đăng ký thông tin một lần duy nhất, hệ thống cá nhân của Phương sẽ tự động gửi tin nhắn SMS hoặc thông báo qua Zalo trực tiếp đến số điện thoại của bà con trước <strong>30 ngày</strong> để kịp thời đóng tiếp, bảo vệ quyền lợi khám chữa bệnh liên tục cho cả gia đình.
          </p>
        </div>

        {/* BẢNG SO SÁNH QUYỀN LỢI TẬP TRUNG NGỮ NGHĨA */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-10">
          <table className="w-full text-left border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-700 border-b border-slate-200 font-bold">
                <th className="p-4">Quyền lợi khi đi khám bệnh</th>
                <th className="p-4">Thẻ bị gián đoạn / Dưới 5 năm</th>
                <th className="p-4 text-blue-700 bg-blue-50/50">Thẻ đạt mốc 5 năm liên tục</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="p-4 font-medium text-slate-800">Mức chi trả viện phí đúng tuyến</td>
                <td className="p-4">Chỉ hưởng từ 80% đến 95% chi phí</td>
                <td className="p-4 font-bold text-emerald-600 bg-blue-50/50">Được quỹ BHYT chi trả 100%</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">Cấp giấy miễn cùng chi trả</td>
                <td className="p-4">Không được áp dụng</td>
                <td className="p-4 bg-blue-50/50 text-slate-700">Được miễn hoàn toàn tiền đồng chi trả đến hết ngày 31/12 của năm đó</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">Hệ quả nếu quên đóng quá hạn</td>
                <td className="p-4">Phải mua thẻ mới</td>
                <td className="p-4 text-red-500 bg-blue-50/50 font-medium">Bị hủy mốc tích lũy, phải đóng lại từ năm đầu tiên</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. KHỐI QUY TRÌNH HỆ THỐNG ĐÃ SỬ DỤNG MOTION & LUCIDE */}
      <Benefits />

      {/* 4. FORM ĐĂNG KÝ AN TOÀN BẢO MẬT THÔNG TIN CỦA CHỊ PHƯƠNG */}
      <RegistrationForm />

      {/* 5. CHÂN TRANG ĐẦY ĐỦ THÔNG TIN LIÊN HỆ & BẢN QUYỀN THIẾT KẾ LONG WEB STUDIO */}
      <Footer />

    </main>
  );
}
