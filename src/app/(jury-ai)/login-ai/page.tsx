import React, { FC } from "react";
import LoginAI from "../../(server-components)/LoginAI";
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
            <LoginAI />
  );
};

export default ListingRealEstatePage;
