import React, { FC } from "react";
import Avatar from "@/shared/Avatar";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import chatUurIsAiLogo from "@/images/avatars/chat-juris-ai-logo.png";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Button, { ButtonProps } from "@/shared/Button";
import Spinner from '@/shared/spinner'

interface CommentListingDataType {
  name?: string;
  avatar?: string;
  date?: string;
  comment?: string;
  starPoint?: number;
  query: string;
  response:string;
  id?: string;
  loading?: boolean;

}

export interface CommentListingProps {
  className?: string;
  data?: CommentListingDataType;
  hasListingTitle?: boolean;
  value?: string;
  query?: string;
  response?: string;
  loading?: boolean;

}

const DEMO_DATA: CommentListingDataType = {
  query: "Query from User",
  response:"Response from Model"


};

const ChatWithJurisAI: FC<CommentListingProps> = ({
  className = "",
  data = DEMO_DATA,
  hasListingTitle,
  value,
  query, 
  response,
  loading

}) => {

  // console.log("cahta", value)
  return (
    <>
          {/* {the component to display response from model} */}

          <div
        className={`nc-CommentListing bg-[#f5f5f9] dark:bg-[#4e505c] flex space-x-4 ${className}`}
        data-nc-id="CommentListing"
        style={
          {
            paddingLeft: '10px',
            paddingRight: '10px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }
        }
      >
        {/* This image of either Querier or Response from JurisAI */}
        <div className="pt-0.5">
          <Avatar
            sizeClass="h-10 w-10 text-lg"
            radius="rounded-full"
            userName={data.name}
            imgUrl={chatUurIsAiLogo}
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between space-x-3">
            <div className="flex flex-col">
            {response == 'loading'? <Spinner loading  = {loading?true:false}/> :response}
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
            <div className="flex"
              style={
                {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',

                }
              }
            >
              <BiLike className="w-4 h-4" style={{ cursor: 'pointer' }} />
              <BiDislike className="w-4 h-4" style={{ cursor: 'pointer' }} />
            </div>
          </div>
          <span className="block mt-3 text-neutral-6000 dark:text-neutral-300"
            style={{
              width: '910px',
              height: 'auto',
            }}
          >

           
          </span>
        </div>
      </div>

      <div
        className={`nc-CommentListing flex space-x-4 ${className}`}
        data-nc-id="CommentListing"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "space-between",
        }}
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
              {query}
            </div>
            <div className="flex"
              style={
                {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }
              }
            >
              <BiLike className="w-4 h-4" style={{ cursor: 'pointer' }} />
              <BiDislike className="w-4 h-4" style={{ cursor: 'pointer' }} />
            </div>
          </div>
          <span className="block mt-3 text-neutral-6000 dark:text-neutral-300"
            style={{
              width: '910px',
              height: 'auto',
            }}
          >
          
          </span>
        </div>
      </div>



    </>
  );
};

export default ChatWithJurisAI;
