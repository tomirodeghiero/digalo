"use client";
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    question: "¿La aplicación web es gratuita?",
    answer:
      "Sí, podés descargar y usar Dígalo de forma gratuita. Algunas funciones premium están disponibles mediante una suscripción.",
  },
  {
    question: "¿Está disponible para iOS y Android?",
    answer:
      "Aún no, pero el objetivo es que pronto Dígalo está disponible tanto en la App Store como en Google Play.",
  },
  {
    question: "¿Necesito conexión a Internet para usar la app?",
    answer:
      "Algunas funciones están disponibles sin conexión, pero para acceder al contenido completo y actualizaciones, es necesaria una conexión a Internet.",
  },
  {
    question: "¿Cómo puedo contactar al soporte?",
    answer:
      "Podés enviarnos un correo a soporte@digalo.com.ar o contactarnos a través de nuestras redes sociales.",
  },
];

const AccordinationItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            <p className="mt-4 text-white/70">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Preguntas Frecuentes
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordinationItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
