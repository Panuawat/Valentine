"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Gifts() {
  const gifts = ["💐 ดอกไม้", "🍫 ช็อกโกแลต", "💍 แหวน", "🎈 ลูกโป่ง"];
  const [selectedGift, setSelectedGift] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink text-white">
      <h2 className="text-4xl font-bold">🎁 ส่งของขวัญพิเศษ</h2>
      <div className="flex space-x-4 mt-6">
        {gifts.map((gift, index) => (
          <Button key={index} onClick={() => setSelectedGift(gift)} className="bg-rose px-6 py-3 rounded-full">
            {gift}
          </Button>
        ))}
      </div>
      {selectedGift && <p className="mt-6 text-lg">คุณเลือก: {selectedGift} 💖</p>}
    </div>
  );
}
