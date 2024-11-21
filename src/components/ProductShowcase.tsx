"use client";
import appScreen from "../assets/images/app-screenshot.png";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Una Interfaz Intuitiva
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-white/70 text-center mt-5">
            Navegá fácilmente por nuestra app y descubrí cómo aprender Lengua de Señas Argentina puede ser sencillo y agradable. Cada función está diseñada pensando en vos.
          </p>
        </div>
        <div className="flex justify-center">
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
            }}
          >
            <Image
              src={appScreen}
              ref={appImage}
              alt="Captura de pantalla de la app Dígalo"
              className="mt-14 rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
