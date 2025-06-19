import Link from "next/link";

const Navbar = () => {

  return (
    <nav id="inicio" className="w-full px-6 py-14 flex justify-between items-center text-white  border-b border-gray-700">

      <div className="text-3xl text-color-gold font-bold">LinerTattoo</div>

      <ul className="flex gap-6">
        <li>
          <Link  href="/" className="hover:text-white text-color-gold text-base transition font-bold">
            INICIO
          </Link >
        </li>
        <li>
          <Link  href="/gallery" className="hover:text-white text-color-gold text-base transition font-bold">
            GALERIA
          </Link >
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