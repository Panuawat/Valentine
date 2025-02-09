"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Audio element สำหรับเล่นเพลง */}
      <audio ref={audioRef} src="/valen-ms.mp3" loop />
      
      {/* ปุ่มสำหรับเล่น/หยุดเพลง */}
      <Button
        onClick={handlePlayPause}
        className="bg-pink-500 hover:bg-blue-700 text-white rounded-full shadow-md p-5"
      >
        <Image
          src="/music-disc-white-circle.png"
          alt="music-disc-white-circle"
          width={30}
          height={30}
          className={isPlaying ? "animate-spin" : ""}
        />
      </Button>
    </div>
  );
}
