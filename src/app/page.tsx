import React from "react";
import LoginAI from "@/app/(server-components)/LoginAI";
import imagePngBG from "@/images/giammarco-boscaro-zeH-ljawHtg-unsplash 1.png";
import Image from "next/image";

function PageHome() {
  return (
    <div className="nc-ListingRealEstateMapPage relative min-h-screen">
    <div className="absolute inset-y-0 w-full flex-grow">
      <Image fill className="object-cover" src={imagePngBG} alt="hero" />

      <div className="container pb-24 lg:pb-28 flex items-center justify-center">
        {/* Responsive adjustments */}
        <div className="absolute inset-y-0 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[33rem]">
          <LoginAI className="pt-10 lg:pt-16 lg:pb-16" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default PageHome;
