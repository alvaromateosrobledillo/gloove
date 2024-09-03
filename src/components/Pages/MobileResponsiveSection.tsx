import { motion } from "framer-motion";

const MobileResponsiveSection: React.FC = () => {
  return (
    <section className="lg:hidden min-h-screen bg-[#F6F7F5] flex flex-col justify-between items-center">
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
          className="text-lg md:text-xl text-glooveSecondary-dark mb-1"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          CON LOS QUE TRABAJAMOS
        </motion.p>
      </div>

      {/* Video abajo */}
      <div className="w-full h-2/3 flex-shrink-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="RecursosWeb/vid//Colaboradores/RuletaT.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default MobileResponsiveSection;
