import { StarIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import Avatar from "@/shared/Avatar";

interface CommentListingDataType {
  name: string;
  avatar?: string;
  date: string;
  comment: string;
  starPoint: number;
}

export interface CommentListingProps {
  className?: string;
  data?: CommentListingDataType;
  hasListingTitle?: boolean;
}

const DEMO_DATA: CommentListingDataType = {
  name: "Cody Fisher",
  date: "May 20, 2021",
  comment:
    "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
  starPoint: 5,
};

const ChatWithJurisAI: FC<CommentListingProps> = ({
  className = "",
  data = DEMO_DATA,
  hasListingTitle,
}) => {
  return (
    <div
      className={`nc-CommentListing flex space-x-4 ${className}`}
      data-nc-id="CommentListing"
    >
      {/* This image of either Querier or Response from JurisAI */}
      <div className="pt-0.5">
        <Avatar
          sizeClass="h-10 w-10 text-lg"
          radius="rounded-full"
          userName={data.name}
          imgUrl={data.avatar}
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between space-x-3">
          <div className="flex flex-col">
            {/* No need of name so commenting */}
            {/* <div className="text-sm font-semibold">
              <span>{data.name}</span>
              {hasListingTitle && (
                <>
                  <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                    {` review in `}
                  </span>
                  <a href="/">The Lounge & Bar</a>
                </>
              )}
            </div> */}
            {/* Commenting date as date is not required in app as per design */}
            {/* <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              {data.date}
            </span> */}
          </div>
          <div className="flex text-yellow-500">
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
          </div>
        </div>
        <span className="block mt-3 text-neutral-6000 dark:text-neutral-300">
          {data.comment}
        </span>
      </div>
    </div>
  );
};

export default ChatWithJurisAI;
