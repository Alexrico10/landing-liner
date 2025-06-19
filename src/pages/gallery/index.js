import { useEffect } from "react";
import { useRouter } from "next/router";

export default function GalleryIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/gallery/all");
  }, [router]);

  return null;
}