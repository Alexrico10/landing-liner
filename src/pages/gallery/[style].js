import { useRouter } from "next/router";
import GalleryComponent from "@/components/GalleryComponent";
import Link from "next/link";
import { imagesByStyle } from "@/utils/imagesByStyle";
import Contact from "@/components/Contact";

export default function GalleryByStyle() {
  const router = useRouter();
  const { style } = router.query;

  const images = imagesByStyle[style] || imagesByStyle.all;

  return (
    <>
      <nav className="w-full px-6 py-14 flex items-center justify-center text-white border-b border-gray-700">
        <ul className="flex gap-6">
          <li>
            <Link
              href="/gallery"
              className={`font-bold ${
                style === "all"
                  ? "border-b-2 border-white"
                  : "border-b-2 border-transparent hover:border-white"
              }`}
            >
              TODOS
            </Link>
          </li>
          <li>
            <Link
              href="/gallery/realism"
              className={`font-bold ${
                style === "realism"
                  ? "border-b-2 border-white"
                  : "border-b-2 border-transparent hover:border-white"
              }`}
            >
              REALISMO
            </Link>
          </li>
          <li>
            <Link
              href="/gallery/lettering"
              className={`font-bold ${
                style === "lettering"
                  ? "border-b-2 border-white"
                  : "border-b-2 border-transparent hover:border-white"
              }`}
            >
              LETTERING
            </Link>
          </li>
        </ul>
      </nav>

      <GalleryComponent images={images} />
      <Contact />
    </>
  );
}
