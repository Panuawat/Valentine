"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function LoveQuestion() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const randomX = Math.random() * 300 - 150; // ค่าระหว่าง -150 ถึง 150
    const randomY = Math.random() * 300 - 150;
    setPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-rose-600 rounded-lg px-5">
      <h2 className="text-4xl font-bold text-white">
        แล้วคุณล่ะ รักเค้าไหม? 💖
      </h2>

      <div className="flex gap-6 relative mt-5">
        {/* ปุ่ม รักมาก */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-6 py-3 text-lg font-bold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 animate-bounce">
              รักมาก 💘
            </button>
          </DialogTrigger>
          <DialogContent className="text-center">
            <DialogHeader className=" flex flex-col items-center gap-4">
              <DialogTitle className="text-pink-600 text-2xl">
                💖 เค้าว่าแล้ว! 💖
              </DialogTitle>
              <DialogDescription className="text-lg ">
                เค้าว่าแล้วคุณต้องรักเค้ามาก 💘 <br />
                แต่คุณคงไม่พยายามกดคำว่าไม่รักหรอกใช่มั้ย? 😏💕 <br />
                เค้าก็รักคุณมากกกกเหมือนกันน้าาาาา 😘💖<br /> รับไปเลยหัวใจดวงโต๊โต
                ❤️❤️❤️
                <div className="flex justify-center items-center">
                  <Image  src={'/kiss.gif'} alt="kiss" width={200} height={200}/>
                </div>
                
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* ปุ่ม ไม่รัก ที่หนีได้ */}
        <motion.button
          className="px-6 py-3 text-lg font-bold text-white bg-red-500 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 100 }}
          onMouseEnter={moveButton}
          onClick={moveButton}
        >
          ไม่รัก 💔
        </motion.button>
      </div>
    </div>
  );
}
