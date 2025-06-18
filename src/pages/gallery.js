import GalleryComponent from "@/components/GalleryComponent";
import tattoo1 from "../../public/imgHomeTattoos/tattoo1.jpg";
import tattoo2 from "../../public/imgHomeTattoos/tattoo2.jpg";
import tattoo3 from "../../public/imgHomeTattoos/tattoo3.jpg";
import tattoo4 from "../../public/imgHomeTattoos/tattoo4.jpg";
import tattoo5 from "../../public/imgHomeTattoos/tattoo5.jpg";
import tattoo6 from "../../public/imgHomeTattoos/tattoo6.jpg";
import tattoo7 from "../../public/imgHomeTattoos/tattoo7.jpg";
import tattoo8 from "../../public/imgHomeTattoos/tattoo8.jpg";
import tattoo9 from "../../public/imgHomeTattoos/tattoo9.jpg";

export default function Gallery() {
  const images = [
    tattoo1,
    tattoo2,
    tattoo3,
    tattoo4,
    tattoo5,
    tattoo6,
    tattoo7,
    tattoo8,
    tattoo9,
  ];

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
      <GalleryComponent images={images} />
    </>
  );
}
