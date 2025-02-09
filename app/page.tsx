"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import LoveButton from "@/components/LoveButton";
import BlessingDialog from "@/components/BlessingDialog";
import ScrollAnimation from "@/components/ScrollAnimation";
import LoveQuestion from "@/components/LoveQuestion";
import ScrollTriggered from "@/components/ScrollTriggered";
import MusicPlayer from "@/components/MusicPlayer";

const imageValentine = [
  { src: "/valen1.jpg", alt: "Valentine 1" },
  { src: "/valen2.jpg", alt: "Valentine 2" },
  { src: "/valen3.jpg", alt: "Valentine 3" },
  { src: "/valen4.jpg", alt: "Valentine 4" },
  { src: "/valen5.jpg", alt: "Valentine 5" },
  { src: "/valen6.jpg", alt: "Valentine 6" },
  { src: "/valen7.jpg", alt: "Valentine 7" },
  { src: "/valen8.jpg", alt: "Valentine 8" },
  { src: "/valen9.jpg", alt: "Valentine 9" },
  { src: "/valen10.jpg", alt: "Valentine 10" },
];

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <main className=" flex flex-col items-center justify-center max-w-full min-h-screen bg-gradient-to-b from-pink-500 to-red-500 text-center relative px-4 py-10">
      <div className=" fixed bottom-0 right-0 p-4 z-20">
        <p className="flex items-center">
          <motion.div
            animate={{ x: [0, 10, 0] }} // เลื่อนจากตำแหน่งเริ่มต้นไป 10px แล้วกลับมา
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Image
              src="/arrow-right.png"
              alt="arrow-right"
              width={30}
              height={30}
            />
          </motion.div>
          <span className="ml-2">
            <MusicPlayer />
          </span>
        </p>
      </div>
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300 drop-shadow-lg">
          Happy Valentine's & Birthday!{" "}
          <span className="">
            <span className=" inline-block animate-bounce">💖</span>🎂{" "}
          </span>
        </h1>

        <p className=" text-base sm:text-lg md:text-xl text-white bg-pink-600 p-10 rounded-xl mt-10">
          เว็บนี้ถูกสร้างมาเพื่อให้คนสำคัญของเค้าได้รับความสุขในวันพิเศษนี้
          และเค้าก็อยากนำเสนอความน่ารักของคุณผ่านเว็บนี้ครับ
        </p>

        {/* ปุ่มหัวใจ */}
        <div className="mt-4">
          <LoveButton />
        </div>
      </div>

      {/* Balloons Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute top-10 left-5 opacity-80 drop-shadow-lg hidden sm:block"
        >
          <Image src="/balloons.png" alt="Balloons" width={200} height={200} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute top-20 right-5 opacity-80 drop-shadow-lg hidden sm:block"
        >
          <Image src="/balloons.png" alt="Balloons" width={200} height={200} />
        </motion.div>
      </div>

      {/* Carousel (Responsive) */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-6 touch-pan-y">
        <Carousel plugins={[plugin.current]} className="w-full">
          <CarouselContent>
            {imageValentine.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-white bg-opacity-90">
                    <CardContent className="flex aspect-square items-center justify-center p-2">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={300}
                        className="rounded-xl shadow-md w-full h-auto"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="bg-gradient-to-b from-pink-100 to-rose-100 p-6 rounded-xl shadow-lg max-w-2xl mx-auto my-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-rose-600 mb-4 text-center">
          💖 รูปโปรดที่เค้าชอบที่สุดในปี 2025 💖
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          อันนี้เป็นรูปที่เค้าหยิบมาแค่ 5 รูปพอ เพราะจริงๆ เค้าก็ชอบทุกรูปเลย 😊
          เค้าสามารถนอนดูรูปน่ารักๆ ของคุณได้ตั้งแต่เช้ายันเย็นเลยนะ 😍
          ขอบคุณนะครับที่ส่งรูปน่ารักๆ แบบนี้มาให้ดูบ่อยๆ
          มันเป็นรูปที่ทำให้เค้ามีแรงใช้ชีวิตเพิ่มขึ้นแบบ 300% 🚀 เลยนะ
          ถ้ามีโอกาสถ่ายมาให้อีกก็ส่งมาเยอะๆ เลยเต็มใจรับมากๆๆ 😘
        </p>
        <ScrollTriggered />
      </div>

      <div className="my-10 relative">
        <Image
          className=" rounded-lg"
          src={"/letter.gif"}
          alt="letter"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <BlessingDialog />
        </div>
      </div>

      <div>
        <div className="my-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center text-yellow-500">
            นี้เป็นส่วนสุดท้ายที่เค้าอยากจะบอกให้คุณรู้!
          </h1>
        </div>
        <ScrollAnimation />
      </div>

      <div>
        <h1 className="text-4xl font-bold text-center text-red-500">
          Happy Valentine's & Birthday!
        </h1>
        <LoveQuestion />
      </div>
    </main>
  );
}
