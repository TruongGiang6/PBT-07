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