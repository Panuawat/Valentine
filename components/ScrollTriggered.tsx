"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function ScrollTriggered() {
  return (
    <div className="flex flex-col items-center space-y-8 py-10">
      {images.map((src, i) => (
        <ValentineCard key={i} i={i} src={src} />
      ))}
    </div>
  );
}

interface ValentineCardProps {
  src: string;
  i: number;
}

function ValentineCard({ src, i }: ValentineCardProps) {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8, once: false }}
    >
      <motion.div
        className="w-52 h-52 bg-white shadow-lg rounded-xl flex justify-center items-center"
        variants={cardVariants}
      >
        <Image src={src} alt={`Valentine ${i + 1}`} width={150} height={150} className="rounded-lg" />
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

/**
 * ==============   Data   ================
 */
const images = [
  "/valen1.jpg",
  "/valen2.jpg",
  "/valen3.jpg",
  "/valen4.jpg",
  "/valen5.jpg",
];
