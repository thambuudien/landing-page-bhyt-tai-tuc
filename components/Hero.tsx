'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, BellRing, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white py-20 px-4 overflow-hidden">
      {/* Hiệu ứng vòng tròn mờ làm nền trang trí */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -ml-20 -mb-20" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge thông báo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 bg-blue-950/60 border border-blue-500/30 text-emerald-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400 animate-pulse" />
          Dịch vụ an sinh cộng đồng miễn phí
        </motion.div>
        
        {/* Tiêu đề chính */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight mt-6 leading-tight max-w-3xl mx-auto"
        >
          Đừng Để Gián Đoạn 1 Ngày – <br className="hidden md:inline"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
            Mất Sạch Quyền Lợi BHYT 5 Năm Liên Tục!
          </span>
        </motion.h1>
        
        {/* Đoạn mô tả */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-blue-100 font-normal mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          Hệ thống tự động quét và nhắn lịch nhắc trước <strong className="text-yellow-300 font-semibold">30 ngày</strong> khi thẻ hết hạn qua SMS/Zalo. Kịp thời gia hạn, bảo vệ quyền lợi được quỹ BHYT chi trả <strong className="text-emerald-400 font-semibold">100% viện phí</strong>.
        </motion.p>
        
        {/* Nút Kêu gọi hành động (CTA) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-10"
        >
          <a 
            href="#register-form" 
            className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-base md:text-lg px-8 py-4 rounded-xl transition duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-orange-500/20 uppercase tracking-wide"
          >
            <BellRing className="w-5 h-5 group-hover:animate-bounce" />
            Đăng Ký Nhắc Hạn Miễn Phí
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
