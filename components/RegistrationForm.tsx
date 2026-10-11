'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendGAEvent } from '@next/third-parties/google';

type FormData = {
  fullName: string;
  phone: string;
  bhxhCode: string;
  expiryDate?: string;
};

export default function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSuccess(true);
        
        // 🔥 BẮN SỰ KIỆN GHI NHẬN CHUYỂN ĐỔI VỀ GOOGLE ANALYTICS
        sendGAEvent({ 
          event: 'buttonClicked', 
          value: 'submit_bhyt_registration',
          category: 'Registration',
          label: 'Đăng ký nhắc hạn BHYT thành công'
        });
      }
    } catch (error) {
      console.error('Đăng ký thất bại:', error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 p-6 rounded-2xl border border-green-200 text-center max-w-md mx-auto my-10">
        <span className="text-4xl">🎉</span>
        <h3 className="text-xl font-bold text-green-800 mt-2">Đăng ký thành công!</h3>
        <p className="text-gray-600 mt-1">Hệ thống sẽ gửi tin nhắn xác nhận qua Zalo/SMS đến bạn trong ít phút.</p>
      </div>
    );
  }

  return (
    <section id="register-form" className="py-12 bg-slate-50">
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border border-slate-100 mx-4 sm:mx-auto">
        <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">ĐĂNG KÝ NHẮC HẠN MIỄN PHÍ</h3>
        <p className="text-sm text-gray-500 text-center mb-6">Đảm bảo quyền lợi khám chữa bệnh 5 năm liên tục</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Họ và tên người dùng thẻ *</label>
            <input
              {...register('fullName', { required: 'Vui lòng nhập họ và tên' })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Nguyễn Văn A"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Số điện thoại nhận tin (Zalo/SMS) *</label>
            <input
              {...register('phone', { 
                required: 'Vui lòng nhập số điện thoại',
                pattern: { value: /^(0[3|5|7|8|9])+([0-8]{8})\b$/, message: 'Số điện thoại không hợp lệ' }
              })}
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="0912345678"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mã số BHXH / 10 số cuối thẻ BHYT *</label>
            <input
              {...register('bhxhCode', { 
                required: 'Vui lòng nhập mã số BHXH',
                minLength: { value: 10, message: 'Mã số BHXH gồm đúng 10 ký tự số' },
                maxLength: { value: 10, message: 'Mã số BHXH gồm đúng 10 ký tự số' }
              })}
              type="text"
              maxLength={10}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="VD: 0123456789"
            />
            {errors.bhxhCode && <p className="text-red-500 text-xs mt-1">{errors.bhxhCode.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Ngày hết hạn hiện tại (Nếu biết)</label>
            <input
              {...register('expiryDate')}
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md uppercase tracking-wider"
          >
            {loading ? 'Đang xử lý...' : 'Kích hoạt nhắc hạn miễn phí'}
          </button>
          
          <p className="text-[11px] text-gray-400 text-center italic mt-2">
            🔒 Cam kết bảo mật thông tin cá nhân theo tiêu chuẩn an toàn dữ liệu.
          </p>
        </form>
      </div>
    </section>
  );
}
