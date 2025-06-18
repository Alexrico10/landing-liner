const Navbar = () => {
  return (
    <nav className="w-full px-6 py-14 flex justify-between items-center bg-transparent text-white  border-b border-gray-700">
      <div className="text-3xl text-color-gold font-bold">Liner Tattoo</div>

      <ul className="flex gap-6">
        <li>
          <a
            href="#inicio"
            className="hover:text-white text-color-gold text-base transition font-bold"
          >
            INICIO
          </a>
        </li>
        <li>
          <a
            href="#galeria"
            className="hover:text-white text-color-gold text-base transition font-bold"
          >
            GALERIA
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            className="hover:text-white text-color-gold text-base transition font-bold"
          >
            CONTACTO
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
