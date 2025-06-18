import GalleryHome from "@/components/GalleryHome";

export default function Gallery() {
  return (
    <>
      <nav className="w-full px-6 py-14 flex items-center justify-center text-white border-b border-gray-700">
        <ul className="flex gap-6">
          <li>
            <a
              href="/gallery"
              className="text-white font-bold border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              TODOS
            </a>
          </li>
          <li>
            <a
              href="/gallery"
              className="text-white font-bold border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              REALISMO
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-white font-bold border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              MICROREALISMO
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-white font-bold border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              FINELINE
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-white font-bold border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              LETTERING
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-white font-bold border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              OTROS
            </a>
          </li>
        </ul>
      </nav>
      <GalleryHome />
    </>
  );
}
