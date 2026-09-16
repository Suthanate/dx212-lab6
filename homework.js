// คำนวณค่าโดยสารรถ NGV ในมหาวิทยาลัย
// 2 กม.แรก 10 บาท, กม.ถัดไป กม.ละ 2 บาท, เศษปัดขึ้น

const calcFare = (distanceKm) => {
  // ตรวจสอบระยะทางติดลบหรือไม่ใช่ตัวเลข
  if (typeof distanceKm !== 'number' || distanceKm < 0) return 0;

  // ปัดเศษขึ้น
  const distance = Math.ceil(distanceKm);

  // คำนวณค่าโดยสาร
  if (distance <= 2) return 10;
  return 10 + (distance - 2) * 2;
};

// ตัวอย่างการเรียกใช้งาน
console.log(calcFare(0));     // 10 บาท (2 กม.แรก)
console.log(calcFare(1.5));   // 10 บาท
console.log(calcFare(2));     // 10 บาท
console.log(calcFare(3));     // 12 บาท
console.log(calcFare(5));     // 16 บาท
console.log(calcFare(-1));    // 0 บาท
console.log(calcFare('abc')); // 0 บาท
