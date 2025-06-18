import Image from "next/image";
import tattoo1 from "../../public/imgHomeTattoos/tattoo1.jpg";
import tattoo2 from "../../public/imgHomeTattoos/tattoo2.jpg";
import tattoo3 from "../../public/imgHomeTattoos/tattoo3.jpg";
import tattoo4 from "../../public/imgHomeTattoos/tattoo4.jpg";
import tattoo5 from "../../public/imgHomeTattoos/tattoo5.jpg";
import tattoo6 from "../../public/imgHomeTattoos/tattoo6.jpg";
import tattoo7 from "../../public/imgHomeTattoos/tattoo7.jpg";
import tattoo8 from "../../public/imgHomeTattoos/tattoo8.jpg";
import tattoo9 from "../../public/imgHomeTattoos/tattoo9.jpg";
import { useRouter } from "next/router";

const GalleryHome = () => {

  const router = useRouter();
  const urlInstagram = "https://www.instagram.com/liner.tattoo/?igsh=dGxlMmc1YW5qeWt6#"
  const images = [
    tattoo1,
    tattoo2,
    tattoo3,
    tattoo4,
    tattoo5,
    tattoo6,
    tattoo7,
    tattoo8,
    tattoo9
  ];

  const handleClickImg = ()=>{
    router.push(urlInstagram)
  }

  return (
    <div className="py-12 px-4">
      <div className="grid  md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`Tatuaje ${index + 1}`}
              fill
              className="object-cover cursor-pointer"
              onClick={handleClickImg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryHome;
