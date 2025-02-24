import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface IImageContainer {
  path: string;
  alt: string;
  position: string;
  size?: number;
}

const ImageContainer = ({
  path,
  alt,
  size,
  position,
}: IImageContainer) => {
  return (
    <div className={cn("absolute", position)}>
      <Image
        src={path}
        alt={alt}
        width={size ?? 100}
        height={size ?? 100}
        objectFit="cover" // Ensures the image covers the area without stretching
      />
    </div>
  );
};

export default ImageContainer;
