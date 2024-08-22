import React, { FC } from "react";
import RegisterAI from "../../(server-components)/RegisterAI";

export interface ListingRealEstatePageProps {}

const ListingRealEstatePage: FC<ListingRealEstatePageProps> = ({}) => {
  // useEffect(() => {
  //   const $body = document.querySelector("body");
  //   if ($body) {
  //     $body.className = "theme-cyan-blueGrey";
  //   }
  //   return () => {
  //     if ($body) {
  //       $body.className = "";
  //     }
  //   };
  // }, []);

  return (
      <RegisterAI />
  );
};

export default ListingRealEstatePage;
