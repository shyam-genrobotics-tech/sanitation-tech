"use client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import cover from "@/assets/products/gcrow/gcrow_cover_image.webp";

function Gcrow_cover() {
  return (
    <section className="gcrow_cover">
      <LazyLoadImage
        src={cover.src}
        alt="Gcrow Cover"
        width={0}
        height={0}
      />
    </section>
  );
}

export default Gcrow_cover;
