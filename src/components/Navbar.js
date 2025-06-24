import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Opcional: íconos de Lucide

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-6 flex justify-between items-center text-white border-b border-gray-700">
      <div className="text-3xl text-color-gold font-bold">LinerTattoo</div>

      {/* Botón hamburguesa solo en móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-color-gold"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú */}
      <ul
        className={`
          flex-col md:flex-row gap-4 md:gap-6
          flex md:flex
          ${isOpen ? "flex" : "hidden"}
          md:items-center
          absolute md:static top-20 left-0 w-full md:w-auto bg-dark-bg md:bg-transparent px-6 md:px-0 py-4 md:py-0 z-50
        `}
      >
        <li>
          <Link
            href="/"
            className="hover:text-white text-color-gold text-base transition font-bold"
            onClick={() => setIsOpen(false)}
          >
            INICIO
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className="hover:text-white text-color-gold text-base transition font-bold"
            onClick={() => setIsOpen(false)}
          >
            GALERIA
          </Link>
        </li>
        <li>
          <Link
            href="/#contacto"
            className="hover:text-white text-color-gold text-base transition font-bold"
            onClick={() => setIsOpen(false)}
          >
            CONTACTO
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;