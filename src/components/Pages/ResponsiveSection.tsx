import React from "react";
import { motion } from "framer-motion";

const PCResponsiveSection: React.FC = () => {
  const videoSrc = "/Colaboradores/RuletaO2.mp4"; // Ajusta esta ruta según necesites

  return (
    <section className="hidden lg:flex min-h-screen bg-[#F6F7F5] justify-center items-center">
      <div className="grid grid-cols-3 gap-0 w-full h-screen">
        {/* Video - Ocupa 2/3 en pantallas grandes */}
        <div className="col-span-2 h-full relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Título y Subtítulo - Ocupa 1/3 a la derecha */}
        <div className="flex flex-col justify-center items-center text-center lg:text-left p-8 bg-[#F6F7F5] h-full">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-gloovePrimary-dark mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            COLABORADORES
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-glooveSecondary-dark mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            CON LOS QUE TRABAJAMOS
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PCResponsiveSection;
