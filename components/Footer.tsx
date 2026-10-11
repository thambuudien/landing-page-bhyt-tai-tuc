'use client';

import { ExternalLink, MapPin, User, PhoneCall, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      {/* KHU VỰC THÔNG TIN ĐIỂM THU */}
      <div className="border-b border-slate-800 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-base font-bold text-slate-300 tracking-wider uppercase mb-6">
            🎯 ĐIỂM THU & HỖ TRỢ GIA HẠN BHYT CHÍNH THỨC
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-sm text-slate-400">
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex gap-3">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-300 mb-1">Địa chỉ điểm thu:</p>
                <p className="text-slate-400 leading-relaxed">{siteConfig.collector.address}</p>
              </div>
            </div>
            
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-blue-500" />
                <p><span className="font-semibold text-slate-300">Nhân viên phụ trách:</span> {siteConfig.collector.name}</p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-emerald-500" />
                <p>
                  <span className="font-semibold text-slate-300">Điện thoại / Zalo:</span>{' '}
                  <a href={siteConfig.collector.zaloUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline font-medium transition-colors">
                    {siteConfig.collector.phone}
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-500" />
                <p><span className="font-semibold text-slate-300">Email:</span> {siteConfig.collector.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KHU VỰC BẢN QUYỀN VÀ CREDIT */}
      <div className="py-8 text-center text-xs px-4 space-y-4">
        <div className="space-y-1">
          <p className="font-medium text-slate-300">
            © {new Date().getFullYear()} {siteConfig.name}. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-slate-500 text-[11px] max-w-xl mx-auto leading-relaxed">
            Hệ thống nhắc lịch an sinh xã hội độc lập, hỗ trợ tự động hóa quy trình quản lý thông tin tái tục. Không mạo danh hay thay thế bất kỳ Cơ quan BHXH Nhà nước nào.
          </p>
        </div>

        {/* Khối ghi nhận đơn vị thiết kế website độc quyền */}
        <div className="longwebstudio-credit text-slate-500 text-[10px] pt-3 border-t border-slate-800/60 max-w-sm mx-auto flex items-center justify-center gap-1">
          <span>Thiết kế website bởi</span>
          <a
            href="https://longwebstudio.io.vn"
            target="_blank"
            rel="noopener noreferrer"
            title="Long Web Studio - Thiết kế website cho nhân viên thu BHXH, BHYT"
            className="text-slate-400 hover:text-amber-400 font-medium underline underline-offset-2 transition-colors duration-150 inline-flex items-center gap-0.5"
          >
            Long Web Studio <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
