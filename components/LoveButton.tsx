"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// ประกาศ Type สำหรับหัวใจ
type HeartType = {
  id: number;
  x: number;
  y: number;
};

export default function LoveButton() {
  const [hearts, setHearts] = useState<HeartType[]>([]);

  const handleClick = () => {
    const newHearts = Array.from({ length: 10 }).map(() => ({
      id: Date.now() + Math.random(), // สร้าง ID ไม่ให้ซ้ำกัน
      x: Math.random() * 80 - 40, // กระจายแนวแกน X ภายในช่วง -40 ถึง 40
      y: Math.random() * 30 - 15, // กระจายแนวแกน Y ภายในช่วง -15 ถึง 15
    }));

    setHearts((prev) => [...prev, ...newHearts]);

    // ลบหัวใจหลังจาก 1.5 วินาที
    setTimeout(() => {
      setHearts((prev) => prev.slice(newHearts.length));
    }, 1500);
  };

  return (
    <div className="relative inline-block">
      {/* ปุ่มกดเพื่อให้หัวใจกระจาย */}
      <Button
        onClick={handleClick}
        className="relative z-10 bg-red-500 hover:bg-red-700 text-white px-6 py-3 text-lg rounded-full shadow-md"
      >
        ส่งหัวใจ ❤️
      </Button>

      {/* แสดงหัวใจที่กระจายออกมาภายในพื้นที่ปุ่ม */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, scale: 0.8 }}
            animate={{
              opacity: 0,
              scale: 1.5,
              x: heart.x,
              y: heart.y,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute text-red-500 text-3xl z-10"
          >
            ❤️
          </motion.div>
        ))}
      </div>
    </div>
  );
}
