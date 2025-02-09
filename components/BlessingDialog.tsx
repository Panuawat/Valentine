"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const blessings = [
  "ขอให้คุณมีความสุขในทุกวัน และได้รับความรักอย่างเต็มเปี่ยม! 💖",
  "ขอให้วันของคุณเต็มไปด้วยเสียงหัวเราะและรอยยิ้ม 😊🎉",
  "ขอให้คุณพบแต่สิ่งดี ๆ และมีพลังบวกในทุกวัน 🌟✨",
  "สุขสันต์วันเกิดและวาเลนไทน์ ขอให้เป็นปีที่พิเศษสุด! 🎂❤️",
];

export default function BlessingDialog() {
  const [blessing, setBlessing] = useState("");

  const handleOpen = () => {
    const randomBlessing =
      blessings[Math.floor(Math.random() * blessings.length)];
    setBlessing(randomBlessing);
  };

  return (
    <div className="py-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={handleOpen}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            🌸 รับคำอวยพร! 🌸
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white rounded-lg p-6 shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-red-500">
              💌 คำอวยพรพิเศษ 💌
            </DialogTitle>
            <DialogDescription className="text-gray-700 text-lg mt-2">
              {blessing}
            </DialogDescription>
            <DialogDescription>
              วันเกิดและวันวาเลนไทน์ปีนี้เค้าก็ขอให้คุณสุขภาพร่างกายแข็งแรงไม่เจ็บไม่ป่วยง่ายนะ
              ช่วงนี้มีเรื่องเครียดเยอะเลยใช่ไหม
              แต่ไม่เป็นไรนะเค้าจะอวยพรให้คุณตั้งแต่วันนี้เป็นต้นไป
              ขอให้คุณมีแต่ความสุขพบเจอแต่สิ่งดีๆ เจอเพื่อน
              เจอสังคมที่ไม่ทำให้คุณต้องเครียดเข้ามาในชีวิต
              ขอให้ปีนี้เป็นปีที่ทำให้คุณมีแต่รอยยิ้มหัวเราะออกมาดังๆได้
              อย่าเพิ่งท้อนะเค้าเชื่อว่าถ้าคุณผ่านตรงนี้ไปได้คุณจะต้องพบเจอแต่สิ่งดีๆเข้ามาในชีวิตแน่นอน
              สู้ๆเค้าเป็นใจให้เสมอจะคอยอยู่ใกล้ๆคุณแบบนี้ไม่ห่างแน่นอน ❤️
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
