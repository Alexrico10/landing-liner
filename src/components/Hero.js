import Image from "next/image";
import tattooImage from "../../public/img-hero.jpg";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8 py-12 md:py-20">
      {/* Imagen */}
      <div className="w-full md:w-1/2 relative">
        <Image
          src={tattooImage}
          alt="Tatuaje"
          className="w-full h-auto object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121115] via-transparent to-[#121115]"></div>
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-color-gold">
          LinerTattoo
        </h1>
        <p className="text-base md:text-lg text-white mb-6">
          Mi nombre es Álvaro, soy tatuador especializado en realismo y Black & Grey. Llevo años dedicando mi pasión a crear tatuajes únicos y a ayudarte a plasmar tus ideas en la piel con el máximo detalle y cuidado. Trabajo desde Madrid y estaré encantado de asesorarte sin compromiso.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-white text-black px-6 py-3 rounded font-bold hover:bg-yellow-600 transition"
        >
          PEDIR CITA
        </a>
      </div>
    </div>
  );
};

export default Hero;