function tinhHoaDon(danhSachMon, coTip = false) {
    const hom_nay = new Date().getDay(); // 0=CN, 3=Thứ 4
    const laNgayThu3 = hom_nay === 3;

    // Tính tổng cộng
    let tongCong = 0;
    danhSachMon.forEach(mon => {
        tongCong += mon.gia * mon.soLuong;
    });

    // Tính giảm giá
    let phanTramGiam = 0;
    if (tongCong > 1_000_000) {
        phanTramGiam = 15;
    } else if (tongCong > 500_000) {
        phanTramGiam = 10;
    }
    if (laNgayThu3) {
        phanTramGiam += 5;
    }

    const giamGia = tongCong * phanTramGiam / 100;
    const sauGiam  = tongCong - giamGia;
    const vat      = sauGiam * 0.08;
    const tip      = coTip ? sauGiam * 0.05 : 0;
    const thanhToan = sauGiam + vat + tip;

    // Format số
    const fmt = (n) => n.toLocaleString('vi-VN') + 'đ';

    // In hóa đơn
    console.log('╔══════════════════════════════════════╗');
    console.log('║          HÓA ĐƠN NHÀ HÀNG            ║');
    console.log('╠══════════════════════════════════════╣');

    danhSachMon.forEach((mon, i) => {
        const thanh = mon.gia * mon.soLuong;
        console.log(
            `║ ${i + 1}. ${mon.ten.padEnd(10)} x${mon.soLuong}  @${String(mon.gia / 1000).padStart(3)}k = ${thanh / 1000}k`.padEnd(39) + '║'
        );
    });

    console.log('╠══════════════════════════════════════╣');
    console.log(`║ Tổng cộng:          ${fmt(tongCong).padStart(15)}  ║`);
    console.log(`║ Giảm giá (${phanTramGiam}%):      ${fmt(giamGia).padStart(15)}  ║`);
    console.log(`║ VAT (8%):           ${fmt(vat).padStart(15)}  ║`);
    console.log(`║ Tip (${coTip ? '5%' : '0%'}):           ${fmt(tip).padStart(15)}  ║`);
    console.log('╠══════════════════════════════════════╣');
    console.log(`║ THANH TOÁN:         ${fmt(thanhToan).padStart(15)}  ║`);
    console.log('╚══════════════════════════════════════╝');
}

const danhSach = [
    { ten: 'Phở bò',   gia: 65_000, soLuong: 2 },
    { ten: 'Trà đá',   gia:  5_000, soLuong: 3 },
    { ten: 'Bún chả',  gia: 55_000, soLuong: 1 },
];

tinhHoaDon(danhSach, true); // true = có tip