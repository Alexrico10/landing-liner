import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-6 flex flex-col md:flex-row justify-between items-center text-white border-b border-gray-700">
      <div className="text-3xl text-color-gold font-bold mb-4 md:mb-0">
        LinerTattoo
      </div>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
        <li>
          <Link href="/" className="hover:text-white text-color-gold text-base transition font-bold">
            INICIO
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="hover:text-white text-color-gold text-base transition font-bold">
            GALERIA
          </Link>
        </li>
        <li>
          <Link href="/#contacto" className="hover:text-white text-color-gold text-base transition font-bold">
            CONTACTO
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;