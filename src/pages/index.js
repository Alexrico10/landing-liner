import Contact from "@/components/Contact";
import GalleryComponent from "@/components/GalleryComponent";
import Hero from "@/components/Hero";
import Separator from "@/components/Separator";
import tattoo1 from "../../public/imgHomeTattoos/tattoo1.jpg";
import tattoo2 from "../../public/imgHomeTattoos/tattoo2.jpg";
import tattoo3 from "../../public/imgHomeTattoos/tattoo3.jpg";
import tattoo4 from "../../public/imgHomeTattoos/tattoo4.jpg";
import tattoo5 from "../../public/imgHomeTattoos/tattoo5.jpg";
import tattoo6 from "../../public/imgHomeTattoos/tattoo6.jpg";
import tattoo7 from "../../public/imgHomeTattoos/tattoo7.jpg";
import tattoo8 from "../../public/imgHomeTattoos/tattoo8.jpg";
import tattoo9 from "../../public/imgHomeTattoos/tattoo9.jpg";

export default function Home() {
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
    tattoo3,
    tattoo2,
    tattoo4,
  ];

  return (
    <>
      <Hero />
      <Separator />
      <GalleryComponent
        images={images}
        linkUrl="https://www.instagram.com/liner.tattoo/?igsh=dGxlMmc1YW5qeWt6#"
      />
      <Contact />
    </>
  );
}
