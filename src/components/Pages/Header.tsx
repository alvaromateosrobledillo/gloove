import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  FaUser,
  FaHome,
  FaHandsHelping,
  FaBlog,
  FaConciergeBell,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { title: "Inicio", label: "inicio", url: "inicio", icon: FaHome },
  {
    title: "Servicios",
    label: "servicios",
    url: "servicios",
    icon: FaConciergeBell,
  },
  { title: "Nosotros", label: "nosotros", url: "nosotros", icon: FaUser },
  {
    title: "Contacto",
    label: "contacto",
    url: "contacto",
    icon: FaHandsHelping,
  },
  { title: "Blog", label: "blog", url: "blog", icon: FaBlog },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setIsTransparent(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 backdrop-blur-md ${
        isTransparent
          ? "bg-transparent text-white"
          : "bg-glooveSecondary-light text-glooveText"
      } ${scrollPosition > 50 ? "shadow-lg" : "shadow-none"}`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <RouterLink to="/" className="flex items-center space-x-2">
          <motion.img
            src="/RecursosWeb/img/Logo/Logo-Gloove.webp"
            alt="Logo"
            className={`h-12 ${
              isTransparent ? "filter invert brightness-0" : ""
            }`}
            whileHover={{ scale: 1.1, rotate: 3 }}
          />
        </RouterLink>

        {/* Botón de menú para móviles */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`focus:outline-none ${
              isTransparent ? "text-white" : "text-gloovePrimary"
            }`}
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menú en dispositivos grandes */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((link) => (
            <ScrollLink
              key={link.label}
              to={link.url}
              smooth={true}
              offset={-70}
              duration={500}
              className={`relative flex items-center space-x-2 px-3 py-2 transition hover:text-gloovePrimary-dark hover:rounded ${
                isTransparent ? "text-white" : "text-gloovePrimary-dark"
              }`}
              style={{ textTransform: "uppercase" }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <link.icon className="mr-2" />
              </motion.div>
              <span>{link.title}</span>
            </ScrollLink>
          ))}
          <RouterLink to="/login" className="ml-4">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                filter: "brightness(1.2)",
                transition: { duration: 0.5 },
              }}
              className="flex items-center bg-gradient-to-r from-gloovePrimary via-gloovePrimary-dark to-glooveAccent text-white font-bold py-3 px-8 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaUser className="mr-2 text-xl" />
              INICIAR SESIÓN
            </motion.button>
          </RouterLink>
        </nav>
      </div>

      {/* Menú desplegable para móviles */}
      {menuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-gloovePrimary-dark z-40 h-screen flex flex-col justify-center items-center px-4"
          initial={{ opacity: 0, y: -20 }} // Añadimos animación de deslizamiento
          animate={{ opacity: 1, y: 0 }} // El menú se desliza suavemente hacia abajo
          exit={{ opacity: 0, y: -20 }} // Al cerrarse, se desliza hacia arriba
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <XMarkIcon className="h-8 w-8 hover:text-glooveAccent-light transition-colors duration-200 ease-in-out transform hover:scale-110 active:scale-95" />
          </button>

          {/* Navegación del menú */}
          <nav className="w-full flex flex-col items-center space-y-8">
            {" "}
            {/* Aumenta el espacio entre ítems */}
            {navItems.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.url}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full flex items-center justify-center text-white py-4 text-lg uppercase transform transition duration-300 hover:text-glooveAccent-light hover:scale-110"
                onClick={() => setMenuOpen(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mr-2"
                >
                  <item.icon className="text-2xl" />
                </motion.div>
                {item.title}
              </ScrollLink>
            ))}
            {/* Botón de "Iniciar Sesión" */}
            <RouterLink to="/login" className="">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#1c84d1", // glooveAccent dark
                }}
                whileTap={{ scale: 0.95 }} // Añadir feedback al hacer click
                className="w-full max-w-xs flex items-center justify-center bg-glooveAccent-light text-white font-bold py-4 px-6 mt-6 rounded-full text-lg transition duration-300 hover:scale-105 hover:bg-glooveAccent-dark"
                onClick={() => setMenuOpen(false)}
              >
                <FaUser className="mr-3 text-2xl" />
                INICIAR SESIÓN
              </motion.button>
            </RouterLink>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
