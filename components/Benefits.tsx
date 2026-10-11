'use client';

import { motion } from 'framer-motion';
import { UserCheck, RefreshCw, SmartphoneNfc, AlertCircle } from 'lucide-react';

const steps = [
  {
    icon: <UserCheck className="w-6 h-6 text-blue-600" />,
    title: '1. Đăng ký thông tin',
    desc: 'Điền mã thẻ BHYT và số điện thoại nhận tin nhắn của bạn.'
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-blue-600" />,
    title: '2. Hệ thống đồng bộ',
    desc: 'Hệ thống lưu trữ lịch và tự động tính toán thời gian gia hạn.'
  },
  {
    icon: <SmartphoneNfc className="w-6 h-6 text-blue-600" />,
    title: '3. Nhận tin nhắc nhở',
    desc: 'Tự động gửi tin SMS/Zalo trước 30 ngày, 15 ngày và 7 ngày thẻ hết hạn.'
  }
];

export default function Benefits() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center justify-center gap-2">
          <AlertCircle className="w-7 h-7 text-red-500" />
          Quy trình hoạt động thông minh
        </h2>
        <p className="text-sm text-gray-500 mt-2">Đơn giản, tự động, bảo mật tối đa cho thông tin cá nhân của bạn</p>
      </div>

      {/* Danh sách 3 bước chuyển động so le (Staggered Animation) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm text-center md:text-left transition-shadow hover:shadow-md"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              {item.icon}
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
