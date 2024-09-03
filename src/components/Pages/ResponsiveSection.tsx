import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ResponsiveSection: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState("/dist/colaboradores/RuletaM.mp4");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateVideoSrc = () => {
      const width = window.innerWidth;
      if (width >= 1920) {
        setVideoSrc("/dist/colaboradores/RuletaO2.mp4"); // Monitores grandes
        setIsLargeScreen(true);
      } else if (width >= 1024) {
        setVideoSrc("/dist/colaboradores/RuletaO2.mp4"); // PC
        setIsLargeScreen(true);
      } else if (width >= 768) {
        setVideoSrc("/dist/colaboradores/RuletaT.mp4"); // Tablets
        setIsLargeScreen(false);
      } else {
        setVideoSrc("/dist/colaboradores/RuletaM.mp4"); // Móviles
        setIsLargeScreen(false);
      }
    };

    updateVideoSrc(); // Ejecutar al montar el componente
    window.addEventListener("resize", updateVideoSrc); // Ejecutar al redimensionar la ventana

    return () => window.removeEventListener("resize", updateVideoSrc);
  }, []);

  return (
    <section className="min-h-screen bg-[#F6F7F5] flex flex-col justify-center items-center">
      {isLargeScreen ? (
        // Layout para PC y Monitores
        <div className="grid grid-cols-3 gap-0 w-full h-screen">
          {/* Video - Ocupa 2/3 en pantallas grandes */}
          <div className="col-span-2 h-full relative overflow-hidden">
            <video
              className="w-full h-full object-cover absolute inset-0"
              src={videoSrc}
              autoPlay
              muted
              loop
            />
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
      ) : (
        // Layout para Móviles y Tablets
        <div className="flex flex-col justify-between items-center w-full h-full">
          {/* Título y Subtítulo arriba */}
          <div className="flex flex-col justify-center items-center text-center p-8 w-full">
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold text-gloovePrimary-dark mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              COLABORADORES
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-glooveSecondary-dark mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              CON LOS QUE TRABAJAMOS
            </motion.p>
          </div>

          {/* Video abajo */}
          <div className="w-full h-2/3">
            <video
              className="w-full h-full object-cover"
              src={videoSrc}
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ResponsiveSection;
