import Image from "next/image";
import { useRouter } from "next/router";

const GalleryComponent = ({ images = [], linkUrl }) => {
  const router = useRouter();

  const handleClickImg = () => {
    if (linkUrl) {
      router.push(linkUrl);
    }
  };

  return (
    <div className="py-12 px-4">
      <div className="grid md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
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

export default GalleryComponent;
