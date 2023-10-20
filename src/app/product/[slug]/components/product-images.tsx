"use client";

import { Product } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  imageUrls: Product["imageUrls"];
  name: string;
};

export const ProductImage = ({ imageUrls, name }: ProductImageProps) => {
  const [currentDisplayedImage, setCurrentDisplayedImage] = useState(
    imageUrls[0],
  );

  const handleDisplayedImageChange = (imageUrl: string) => {
    setCurrentDisplayedImage(imageUrl);
  };
  return (
    <div className="flex flex-col">
      <div className="w-ful flex h-[380px] items-center justify-center bg-accent">
        <Image
          src={currentDisplayedImage}
          height={0}
          width={0}
          sizes="100vw"
          alt={name}
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
        />
      </div>

      <div className="rounded-t-lg">
        <div className="border-rounded mt-8 grid grid-cols-4 gap-4 px-5">
          {imageUrls.map((imageUrl) => (
            <div
              key={imageUrl}
              className={`first-letter flex h-12 items-center justify-center rounded-lg bg-accent
              ${
                currentDisplayedImage === imageUrl &&
                "border-2 border-solid border-primary"
              } 
             `}
              onClick={() => handleDisplayedImageChange(imageUrl)}
            >
              <Image
                src={imageUrl}
                alt={name}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-auto max-w-[80%]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
