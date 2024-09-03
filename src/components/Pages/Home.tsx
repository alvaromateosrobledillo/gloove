import React, { Suspense, useState, useEffect, useMemo } from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Loader from "./Loader";
import Testimonials from "./Testimonios";
import ResponsiveSection from "./ResponsiveSection";
import MobileResponsiveSection from "./MobileResponsiveSection";
import PCResponsiveSection from "./ResponsiveSection";

// Carga diferida de los componentes menos críticos
const Header = React.lazy(() => import("./Header"));
const Hero = React.lazy(() => import("./Hero"));
const ServicesSection = React.lazy(() => import("./ServicesSection"));
const FeaturesSection = React.lazy(() => import("./FeaturesSection"));
const Footer = React.lazy(() => import("./Footer"));
const Contacto = React.lazy(() => import("./Contacto"));

const Home: React.FC = () => {
  const { mode } = useDarkMode();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga mínima para mostrar el Loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Reducido el tiempo del Loader para mejorar la percepción de carga

    return () => clearTimeout(timer);
  }, []);

  // Cargar primero los componentes más críticos, como Header y Hero
  return (
    <div className={mode === "dark" ? "dark" : ""}>
      {loading ? (
        // Muestra el Loader mientras loading es true
        <Loader />
      ) : (
        <>
          <Suspense fallback={<Loader />}>
            {/* Carga del Header y Hero de forma prioritaria */}
            <Header />
            <Element name="inicio">
              <motion.div
                id="inicio"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Hero />
              </motion.div>
            </Element>
          </Suspense>

          {/* Carga diferida de los demás componentes */}
          <Suspense fallback={<div>Cargando sección...</div>}>
            <Element name="servicios">
              <ServicesSection />
            </Element>

            <Element name="nosotros">
              {/* Componente para PC */}
              <PCResponsiveSection />
              {/* Componente para móviles y tablets */}
            </Element>
            <Element name="nosotros">
              {/* Componente para PC */}
              {/* Componente para móviles y tablets */}
              <MobileResponsiveSection />
            </Element>
            <Element name="nosotros">
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <FeaturesSection />
              </motion.section>
            </Element>
            <Testimonials />

            <Element name="contacto">
              <motion.section
                id="contacto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Contacto />
              </motion.section>
            </Element>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Footer />
            </motion.section>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Home;
