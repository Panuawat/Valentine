"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoveLetter() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-rose">
      <h2 className="text-4xl font-bold">💌 เขียนจดหมายรัก</h2>
      <Input
        className="w-96 mt-4 border-2 border-love text-lg p-3 rounded-lg"
        placeholder="พิมพ์ข้อความของคุณที่นี่..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button className="mt-4 bg-love hover:bg-rose text-white px-6 py-3 rounded-full">
        ส่งจดหมาย 💖
      </Button>
      {message && <p className="mt-6 text-lg text-love">{message}</p>}
    </div>
  );
}
