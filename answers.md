## PHẦN A:

## CÂU A1:

*** DỰ ĐOÁN: ***
1. Đoạn 1: `undefined`. Vì `var` được hoisted lên đầu phạm vi nhưng chưa được gán giá trị
2. Đoạn 2: `ReferenceError`. Vì `let` có Temporal Dead Zone (TDZ), không thể truy cập trước khi khai báo
3. Đoạn 3: `TypeError: Assignment to constant variable`. `const` không cho phép gán lại giá trị mới
4. Đoạn 4: `[1, 2, 3, 4]`. Tuy `arr` là `const` nhưng nó trỏ đến một mảng (object), ta có thể thay đổi nội dung bên trong mảng đó
5. Đoạn 5:
   - Trong block: 2
   - Ngoài block: 1
   (`let` có phạm vi block scope)

## CÂU A2:

*** Dự đoán: ***
- `typeof null` -> `"object"` (Lỗi lịch sử của JS)
- `typeof undefined` -> `"undefined"`
- `typeof NaN` -> `"number"`
- `"5" + 3` -> `"53"` (Số 3 bị ép kiểu thành chuỗi để nối)
- `"5" - 3` -> `2` (Chuỗi "5" bị ép kiểu thành số để thực hiện phép trừ)
- `"5" * "3"` -> `15` (Cả hai bị ép kiểu thành số)
- `true + true` -> `2` (`true` tương đương với 1)
- `[] + []` -> `""` (Mảng trống chuyển thành chuỗi rỗng)
- `[] + {}` -> `"[object Object]"` (Mảng trống là `""`, Object chuyển thành string)
- `{} + []` -> `0` (Trong console, `{}` có thể bị coi là block trống, còn lại `+ []` -> `0`. Tuy nhiên trong code expression thường là `"[object Object]"`)

*** Giải thích ***: `"5" + 3` cho ra `"53"` vì toán tử `+` được ưu tiên làm toán tử nối chuỗi nếu có một toán hạng là chuỗi. Ngược lại, toán tử `-` không dùng cho chuỗi nên JS ép kiểu chuỗi "5" về số để tính toán

## Câu A3:

*** Dự đoán ***: 
- `5 == "5"` -> `true` (Ép kiểu)
- `5 === "5"` -> `false` (Khác kiểu dữ liệu)
- `null == undefined` -> `true`
- `null === undefined` -> `false`
- `NaN == NaN` -> `false` (NaN không bao giờ bằng chính nó)
- `0 == false` -> `true`
- `0 === false` -> `false`
- `"" == false` -> `true`

**Quy tắc**: Nên dùng `===` (Strict Equality)

**Tại sao**: Để tránh các lỗi logic tiềm ẩn do cơ chế tự động ép kiểu (type coercion) của JS. `===` kiểm tra cả giá trị và kiểu dữ liệu

## CÂU A4:

- Các giá trị Falsy trong JS: `false`, `0`, `-0`, `0n` (BigInt zero), `""` (string rỗng), `null`, `undefined`, và `NaN`.

**Dự đoán**:
- `if ("0") console.log("A");` -> In "A" (Chuỗi không rỗng là Truthy)
- `if ("") console.log("B"); ` -> Không in (Falsy)
- `if ([]) console.log("C");` -> In "C" (Mảng là object, luôn Truthy)
- `if ({}) console.log("D");` -> In "D" (Object luôn Truthy)
- `if (null) console.log("E");` -> Không in (Falsy)
- `if (0) console.log("F");` -> Không in (Falsy)
- `if (-1) console.log("G");` -> In "G" (Số khác 0 là Truthy)
- `if (" ") console.log("H");` -> In "H" (Chuỗi có khoảng trắng không phải rỗng)

## CÂU A5:

1. `greeting = \`Xin chào ${name}! Bạn ${age} tuổi.\``

2. `url = \`https://api.example.com/users/${userId}/orders?page=${page}\``

3. `html = \`
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>\``

## PHẦN C:

## Câu C1:

1. Gán thay vì so sánh
if (giaSauGiam = 0) dùng = là phép gán, khiến giaSauGiam luôn bị gán thành 0. Sửa thành if (giaSauGiam === 0)

2. Truyền string thay vì number
tinhGiaGiamGia("100000", 20) truyền vào chuỗi "100000", JS tự ép kiểu nên đôi khi vẫn ra kết quả nhưng không đảm bảo. Sửa thành tinhGiaGiamGia(100000, 20)

3. Không validate kiểu đầu vào
Hàm không kiểm tra giaBan có phải number không, nếu truyền string hoặc null sẽ cho kết quả sai. Thêm if (typeof giaBan !== 'number' || typeof phanTramGiam !== 'number') return "Tham số phải là số"

4. Thiếu kiểm tra NaN
NaN < 0 và NaN > 100 đều trả về false, nên NaN lọt qua điều kiện mà không bị chặn. Thêm isNaN(phanTramGiam) vào điều kiện kiểm tra

5. Dùng var thay vì const trong hàm
var giamGia có function scope, dễ bị ghi đè hoặc gây nhầm lẫn. Đổi thành const giamGia vì giá trị không thay đổi sau khi gán

6. (Lỗi ẩn) var i trong vòng lặp + setTimeout
var chỉ có function scope nên chỉ có 1 biến i dùng chung. Khi setTimeout chạy sau 1 giây, vòng lặp đã xong, i = 5 → tất cả đều in "Item 5". Đổi thành let i để mỗi lần lặp có biến i riêng, kết quả đúng là 0, 1, 2, 3, 4.