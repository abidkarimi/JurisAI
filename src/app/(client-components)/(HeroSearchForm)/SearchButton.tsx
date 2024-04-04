"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { FC } from "react";

export interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <span
      onClick={() => onClick && onClick()}
      className="h-14 md:h-16 w-full md:w-16 rounded-full bg-primary-6000 hover:bg-primary-700 flex items-center justify-center text-neutral-50 focus:outline-none"
    >
      {/* <XMarkIcon className="w-4 h-4" /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </span>
  );
};

export default SearchButton;
