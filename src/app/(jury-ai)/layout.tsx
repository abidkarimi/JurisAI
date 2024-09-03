
import React, { ReactNode } from "react";
import Image from "next/image";
import imagePngBG from "@/images/giammarco-boscaro-zeH-ljawHtg-unsplash 1.png";
import imagePngCoversFields from "@/images/Loin.png";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="nc-ListingRealEstateMapPage relative min-h-screen">
      <div className="absolute inset-y-0 w-full xl:w-full flex-grow">
        <Image
          fill
          className="object-cover"
          src={imagePngBG}
          alt="hero"
          priority
        />
        <div className="container pb-24 lg:pb-28 flex items-center justify-center">
          <div className="absolute inset-y-0 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[33rem]">
            {/* <Image fill className="object-cover" src={imagePngCoversFields} alt="hero" /> */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
