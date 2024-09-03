import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const cardImages = [
  "/RecursosWeb/img/Servicios/1/s1.png",
  "/RecursosWeb/img/Servicios/2/s2.png",
  "/RecursosWeb/img/Servicios/3/s3.png",
  "/RecursosWeb/img/Servicios/4/s4_2.png",
  "/RecursosWeb/img/Servicios/5/s5.png",
  "/RecursosWeb/img/Servicios/6/s6.png",
];

const cardTitles = [
  "Servicios de gestión financiera",
  "Servicios de mejora continua",
  "Servicios de tecnología y automatización",
  "Servicios de gestión de reservas y ocupación",
  "Servicios de marketing y publicidad",
  "Servicios de consultoría estratégica",
];

const cardDetails = [
  "Ofrecemos un resumen mensual de contabilidad para los propietarios, garantizando una gestión transparente y eficiente.",
  "Proporcionamos análisis de datos y optimización de procesos para mejorar continuamente el rendimiento.",
  "Implementamos soluciones tecnológicas avanzadas para la automatización y eficiencia operativa.",
  "Gestionamos reservas y ocupación para maximizar la rentabilidad de las propiedades.",
  "Desarrollamos campañas de marketing efectivas para promocionar las propiedades y atraer más huéspedes.",
  "Ofrecemos consultoría estratégica para ayudar a los propietarios a tomar decisiones informadas y planificar el futuro.",
];

const Card: React.FC<{ title: string; details: string; imageUrl: string }> = ({
  title,
  details,
  imageUrl,
}) => {
  return (
    <div className="relative bg-white rounded-[20px] shadow-lg overflow-hidden w-[280px] md:w-[320px] lg:w-[360px] mx-auto md:mx-2 p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      {/* Imagen con efecto 3D */}
      <div className="relative mb-6">
        <img
          src={imageUrl}
          alt={title}
          className="w-[70%] mx-auto h-[100px] md:h-[120px] lg:h-[140px] object-cover rounded-[15px] transition-transform duration-500"
        />
      </div>

      {/* Título y detalles */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-sm text-gray-600">{details}</p>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-[#F4F7F5] min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row md:justify-between items-center">
        {/* Texto a la izquierda */}
        <div
          ref={titleRef}
          className="text-center md:text-left mb-12 md:mb-0 md:mr-8 px-4 md:flex-1"
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-gloovePrimary-dark mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: titleInView ? 1 : 0,
              y: titleInView ? 0 : -50,
            }}
          >
            Características de Nuestra Empresa
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: titleInView ? 1 : 0,
              y: titleInView ? 0 : -50,
            }}
          >
            Conoce más sobre lo que nos hace especiales.
          </motion.p>
        </div>

        {/* Carrusel a la derecha */}
        <div className="w-full md:flex-1">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            initialSlide={2} // Mostrar la tercera card de manera predefinida
            spaceBetween={20} // Espacio entre las cards aumentado
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
            }}
            autoplay={{
              delay: 3000, // Tiempo entre cambios automáticos (3 segundos)
              disableOnInteraction: false, // No detener autoplay al interactuar con el carrusel
            }}
            coverflowEffect={{
              rotate: 3, // Rotación muy ligera
              stretch: 0, // No estiramiento entre las cards
              depth: 60, // Profundidad ligera para un efecto 3D sutil
              modifier: 1,
              slideShadows: false, // Sin sombras para mantener el efecto limpio
            }}
            breakpoints={{
              320: {
                slidesPerView: 1, // Mostrar una card en dispositivos móviles pequeños
              },
              640: {
                slidesPerView: 1, // Mostrar una card en móviles
              },
              768: {
                slidesPerView: 2, // Dos cards en tablets
              },
              1024: {
                slidesPerView: 3, // Tres cards en pantallas grandes
              },
              1440: {
                slidesPerView: 3, // Cuatro cards en pantallas más grandes
              },
              1920: {
                slidesPerView: 3, // Cinco cards en pantallas aún más grandes
              },
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="swiper_container"
          >
            {cardTitles.map((title, index) => (
              <SwiperSlide key={index}>
                <Card
                  title={title}
                  details={cardDetails[index]}
                  imageUrl={cardImages[index]}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination swiper-pagination-bullets"></div>
          </Swiper>
        </div>
      </div>

      {/* Iconos separados al final */}
      <div className="mt-12 flex justify-center space-x-6">
        <a
          href="#"
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </section>
  );
};

export default FeaturesSection;
