import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "María López",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080",
    rating: 5,
    testimonial:
      "Gloove ha hecho que la gestión de mi propiedad sea más eficiente y rentable. El servicio es excelente y siempre están disponibles para ayudar.",
  },
  {
    id: 2,
    name: "José García",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080",
    rating: 4,
    testimonial:
      "Desde que trabajo con Gloove, mis ingresos han aumentado significativamente. La plataforma es fácil de usar y muy efectiva.",
  },
  {
    id: 3,
    name: "Carlos Martinez",
    image:
      "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    testimonial:
      "Gloove ha transformado mi forma de aprender. Los cursos son excepcionales y el soporte es inmejorable.",
  },
];

const handleScrollToContact = () => {
  console.log("Scrolling to contact section...");
};

const LearningSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-20 bg-gradient-to-r from-[#F6F7F5] to-[#E8E9E7] px-4 sm:px-6 lg:px-[10%] min-h-screen">
      {/* Tarjetas de testimonios a la izquierda en pantallas grandes */}
      <div className="flex space-y-4 lg:space-y-0 lg:space-x-4 flex-col lg:flex-row lg:w-2/3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative flex-shrink-0 w-full lg:w-full rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-80 object-cover lg:h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end text-white">
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <div className="flex items-center mt-2">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500 mr-1" />
                ))}
              </div>
              <p className="text-sm mt-2 italic">"{testimonial.testimonial}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* Texto a la derecha en pantallas grandes */}
      <div className="text-center lg:text-left lg:w-1/3 mb-12 lg:mb-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gloovePrimary-dark mb-6">
          Nuestros Clientes <br />
          Confían en Nosotros.
        </h2>
        <p className="text-lg text-glooveSecondary-dark mb-6">
          Descubre lo que nuestros clientes opinan sobre nuestros servicios de
          gestión turística.
        </p>
        <motion.button
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)",
          }}
          className="mt-8 bg-gradient-to-r from-gloovePrimary via-gloovePrimary-dark to-glooveAccent text-white font-bold py-4 px-10 rounded-full transition duration-300 hover:scale-105 animate-pulse"
          onClick={handleScrollToContact}
        >
          DESCUBRE MÁS
        </motion.button>
      </div>
    </section>
  );
};

export default LearningSection;
