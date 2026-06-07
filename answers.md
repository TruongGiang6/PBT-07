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