import Image from "next/image";
import tattooImage from "../../public/img-hero.jpg"

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 py-16">
      {/* Imagen a la izquierda */}
      <div className="flex-1">
        <Image
          src={tattooImage}
          alt="Tatuaje"
          className="rounded-lg w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Texto a la derecha */}
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-4 text-color-gold">
          LinerTattoo
        </h1>
        <p className="text-lg text-white mb-6">
          Uno de los mejores estudios de Madrid avalado por opiniones externas y por nuestros clientes.
          Mejor estudio de Madrid calidad precio. Contamos con 18 artistas residentes e invitados de todos los estilos. 
          Cada uno especializado en su estilo para llevar tu tatuaje a otro nivel.
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