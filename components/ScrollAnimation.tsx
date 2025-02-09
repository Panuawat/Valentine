"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const texts = ["เค้า", "รัก", "คุณ", "นะ","🩷",];

export default function ScrollAnimation() {
  return (
    <div className="flex flex-col items-center w-full">
      {texts.map((text, index) => (
        <ScrollSection key={index} text={text} colorIndex={index} />
      ))}
    </div>
  );
}

function ScrollSection({ text, colorIndex }: { text: string; colorIndex: number }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: -100 });
    }
  }, [inView, controls]);

  const colors = [
    "text-pink-500",  // ชมพูสดใส
    "text-rose-500",  // ชมพูอมแดง
    "text-red-500",   // แดงคลาสสิก
    "text-pink-600",  // ชมพูเข้มขึ้นสำหรับไฮไลท์
    "text-rose-600"   // แดงอมชมพูเข้ม
  ];
  
  const bgColors = [
    "bg-pink-100",    // พื้นหลังชมพูอ่อนนุ่ม
    "bg-rose-100",    // พื้นหลังชมพูอมแดงอ่อน
    "bg-red-100",     // พื้นหลังแดงอ่อน
    "bg-pink-200",    // ชมพูอ่อนเพิ่มความอบอุ่น
    "bg-rose-200"     // แดงอมชมพูอ่อนเพิ่มความนุ่มนวล
  ];
  

  return (
    <section
      ref={ref}
      className={`flex items-center justify-center w-screen h-screen ${bgColors[colorIndex]}`}
    >
      <motion.pre
        className={`text-6xl font-bold ${colors[colorIndex]}`}
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
      >
        {text}
      </motion.pre>
    </section>
  );
}
