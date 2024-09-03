import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Definir rutas de los videos
const videos = {
  largeScreen: "/colaboradores/RuletaO2.mp4",
  pc: "/colaboradores/RuletaO2.mp4",
  tablet: "/colaboradores/RuletaT.mp4",
  mobile: "/colaboradores/RuletaM.mp4",
};

const ResponsiveSection: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState(videos.mobile);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateVideoSrc = () => {
      const width = window.innerWidth;
      if (width >= 1920) {
        setVideoSrc(videos.largeScreen); // Monitores grandes
        setIsLargeScreen(true);
      } else if (width >= 1024) {
        setVideoSrc(videos.pc); // PC
        setIsLargeScreen(true);
      } else if (width >= 768) {
        setVideoSrc(videos.tablet); // Tablets
        setIsLargeScreen(false);
      } else {
        setVideoSrc(videos.mobile); // Móviles
        setIsLargeScreen(false);
      }
    };

    updateVideoSrc();
    window.addEventListener("resize", updateVideoSrc);

    return () => window.removeEventListener("resize", updateVideoSrc);
  }, []);

  return (
    <section className="min-h-screen bg-[#F6F7F5] flex flex-col justify-center items-center">
      {isLargeScreen ? (
        <div className="grid grid-cols-3 gap-0 w-full h-screen">
          <div className="col-span-2 h-full relative overflow-hidden">
            <video
              className="w-full h-full object-cover absolute inset-0"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

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
        <div className="flex flex-col justify-between items-center w-full h-full">
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

          <div className="w-full h-2/3">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResponsiveSection;
