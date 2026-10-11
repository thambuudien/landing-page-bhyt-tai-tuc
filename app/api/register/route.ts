import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, bhxhCode, expiryDate } = body;

    // 1. Thực hiện validate server-side cơ bản
    if (!fullName || !phone || !bhxhCode) {
      return NextResponse.json({ error: 'Thiếu thông tin bắt buộc' }, { status: 400 });
    }

    // 2. [Tùy chọn kết nối] Đẩy data về cơ sở dữ liệu hoặc Google Sheets / CRM của bạn
    // Ví dụ: await saveToDatabase({ fullName, phone, bhxhCode, expiryDate });
    console.log('Đã ghi nhận đăng ký nhắc hạn:', { fullName, phone, bhxhCode, expiryDate });

    // 3. Trả về phản hồi thành công
    return NextResponse.json({ success: true, message: 'Đăng ký hệ thống nhắc hạn thành công!' }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Lỗi máy chủ nội bộ' }, { status: 500 });
  }
}
