const students = [
    { name: "An",    math: 8,  physics: 7, cs: 9, gender: "M" },
    { name: "Bình",  math: 6,  physics: 9, cs: 7, gender: "F" },
    { name: "Chi",   math: 9,  physics: 6, cs: 8, gender: "F" },
    { name: "Dũng",  math: 5,  physics: 5, cs: 6, gender: "M" },
    { name: "Em",    math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3,  physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7,  physics: 7, cs: 7, gender: "F" },
    { name: "Huy",   math: 4,  physics: 6, cs: 3, gender: "M" },
];

for (let i = 0; i < students.length; i++) {
    const s = students[i];
    s.tb = Math.round((s.math * 0.4 + s.physics * 0.3 + s.cs * 0.3) * 10) / 10;
}

for (let i = 0; i < students.length; i++) {
    const tb = students[i].tb;
    if (tb >= 8.0)      students[i].xepLoai = "Giỏi";
    else if (tb >= 6.5) students[i].xepLoai = "Khá";
    else if (tb >= 5.0) students[i].xepLoai = "Trung bình";
    else                students[i].xepLoai = "Yếu";
}


console.log("| STT | Tên      | TB   | Xếp loại     |");
console.log("|-----|----------|------|--------------|");
for (let i = 0; i < students.length; i++) {
    const s = students[i];
    const stt     = String(i + 1).padEnd(3);
    const ten     = s.name.padEnd(8);
    const tb      = String(s.tb.toFixed(1)).padEnd(4);
    const xepLoai = s.xepLoai.padEnd(12);
    console.log(`| ${stt} | ${ten} | ${tb} | ${xepLoai} |`);
}

const demXepLoai = { "Giỏi": 0, "Khá": 0, "Trung bình": 0, "Yếu": 0 };
for (let i = 0; i < students.length; i++) {
    demXepLoai[students[i].xepLoai]++;
}
console.log("\n--- Thống kê xếp loại ---");
for (const loai in demXepLoai) {
    console.log(`${loai}: ${demXepLoai[loai]} SV`);
}


let caoNhat = students[0];
let thapNhat = students[0];
for (let i = 1; i < students.length; i++) {
    if (students[i].tb > caoNhat.tb)   caoNhat  = students[i];
    if (students[i].tb < thapNhat.tb)  thapNhat = students[i];
}
console.log("\n--- Điểm cao nhất / thấp nhất ---");
console.log(`Cao nhất:  ${caoNhat.name}  (${caoNhat.tb})`);
console.log(`Thấp nhất: ${thapNhat.name} (${thapNhat.tb})`);


let tongMath = 0, tongPhysics = 0, tongCs = 0;
for (let i = 0; i < students.length; i++) {
    tongMath    += students[i].math;
    tongPhysics += students[i].physics;
    tongCs      += students[i].cs;
}
const n = students.length;
console.log("\n--- Điểm TB toàn lớp theo môn ---");
console.log(`Toán:   ${(tongMath    / n).toFixed(2)}`);
console.log(`Lý:     ${(tongPhysics / n).toFixed(2)}`);
console.log(`CS:     ${(tongCs      / n).toFixed(2)}`);


let tongTB_M = 0, demM = 0;
let tongTB_F = 0, demF = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "M") { tongTB_M += students[i].tb; demM++; }
    else                            { tongTB_F += students[i].tb; demF++; }
}
console.log("\n--- Điểm TB theo giới tính ---");
console.log(`Nam (M): ${(tongTB_M / demM).toFixed(2)}`);
console.log(`Nữ (F):  ${(tongTB_F / demF).toFixed(2)}`);