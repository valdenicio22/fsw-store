import Image from "next/image";

type BannerProps = {
  src: string;
  height?: number;
  width?: number;
  alt?: string;
};

export const Banner = ({
  src,
  alt = "",
  height = 150,
  width = 350,
}: BannerProps) => {
  return (
    <div className="flex w-full items-center justify-center rounded-lg">
      <Image
        src={src}
        height={height}
        width={width}
        alt={alt}
        className="overflow-hidden bg-no-repeat object-cover"
      />
    </div>
  );
};
