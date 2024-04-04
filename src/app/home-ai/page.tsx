"use client";

import { Tab } from "@headlessui/react";
import CarCard from "@/components/CarCard";
import CommentListing from "@/components/CommentListing";
import ExperiencesCard from "@/components/ExperiencesCard";
import StartRating from "@/components/StartRating";
import StayCard from "@/components/StayCard2";
import {
  DEMO_CAR_LISTINGS,
  DEMO_EXPERIENCES_LISTINGS,
  DEMO_STAY_LISTINGS,
} from "@/data/listings";
import React, { FC, Fragment, useState } from "react";
import Avatar from "@/shared/Avatar";
import ButtonSecondary from "@/shared/ButtonSecondary";
import SocialsList from "@/shared/SocialsList";
import Heading from "@/shared/Heading";
import Logo from "@/shared/Logo";
import ButtonCircle from "@/shared/ButtonCircle";
import Input from "@/shared/Input";
import { ArrowRightIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import LeftPanelFooter from "@/shared/LeftPanelFooter";
import ChatWithJurisAI from "@/components/ChatWithJurisAI";


export interface AuthorPageProps {
  className?: string;
}
export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
  text: string,
  text1: string
}
const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "Examples",
    subHeading:
      "Can you tell me the three-stage test in Denton",
    text:"What are the consequences of Part 36",
    text1: "“How do I enforce a Judgment out of Jurisdiction”"
  },
  {
    id: "2",
    heading: "Capabilities",
    subHeading: "Remembers what user said earlier in the conversation",
    text: "Allows user to provide follow-up correction",
    text1: "99.8% Accuracy"
  },
  {
    id: "3",
    heading: "Limitations",
    subHeading:
      "May rarely generate incorrect information ",
    text: "May occasionally produce harmful instructions or biased",
    text1: "Limited knowledge of events after February 2024"
  },
];
const AuthorPage: FC<AuthorPageProps> = ({ className = "" }) => {
  let [categories] = useState(["Stays", "Experiences", "Car for rent"]);

  const renderSidebar = () => {
    return (
      <div className=" w-full flex flex-col space-y-6 sm:space-y-3 px-0 sm:pl-0 xl:pl-0  ">
        {/* <Avatar
          hasChecked
          hasCheckedClass="w-6 h-6 -top-0.5 right-2"
          sizeClass="w-28 h-28"
        /> */}

        {/* ---- */}
        {/* <div className="space-y-3 text-center flex flex-col items-center">
          <h2 className="text-3xl font-semibold">Kevin Francis</h2>
          <StartRating className="!text-base" />
        </div> */}

        {/* ---- */}
        {/* <p className="text-neutral-500 dark:text-neutral-400">
          Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides
          accommodation, an outdoor.
        </p> */}

        {/* ---- */}
        {/* <SocialsList
          className="!space-x-3"
          itemClass="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xl"
        /> */}

        <div className="space-y-0">
        <div className="flex items-center ">
            <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400 pt-6 pl-8" style={{ color: '#ffffff' , fontSize: '1.5rem'}}>
              <h1>Mir Elahi</h1>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400 pl-8" style={{ color: '#ffffff' }}>
              Milahi@gmail.com
            </span>
          </div>
          </div>

        {/* ---- */}
        <div className=" border-b border-neutral-200 dark:border-neutral-700 " style={{ borderColor: '#4d4d4f' }}></div>
        <div className="p-20"></div>
        <div className="p-10"></div>
        <div className="p-10"></div>
        <div className="p-10"></div>

        <div className="border-b border-neutral-200 dark:border-neutral-700 w-50" style={{ borderColor: '#4d4d4f' }}></div>
        <div className="border-b border-neutral-200 dark:border-neutral-700 w-50" style={{ borderColor: '#4d4d4f' }}></div>
        <div className="border-b border-neutral-200 dark:border-neutral-700 w-50" style={{ borderColor: '#4d4d4f' }}></div>

        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="col-span-2 flex items-center md:col-span-3">
              <LeftPanelFooter className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
            </div>
          </div>
        {/* ---- */}
        {/* <div className="space-y-2 ">
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400" style={{ color: '#ffffff' }}>
              Ha Noi, Viet Nam
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400" style={{ color: '#ffffff' }}>
              Speaking English
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400" style={{ color: '#ffffff' }}>
              Joined in March 2016
            </span>
          </div>
          <div className="flex items-center space-x-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400" style={{ color: '#ffffff' }}>
              Joined in March 2016
            </span>
          </div>
          <div className="flex items-center space-x-4 pb-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400" style={{ color: '#ffffff' }}>
              Joined in March 2016
            </span>
          </div>
        </div> */}
      </div>
    );
  };
  const renderQueryField = () => {
    
      return(
        <div className="space-y-5">
        <div className="relative">
          <Input
            fontClass=""
            sizeClass="h-16 px-4 py-3"
            rounded="rounded-3xl"
            placeholder="Message JurisAI"
          />
          <ButtonCircle
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            size=" w-12 h-12 "
          >
            <ArrowRightIcon className="w-5 h-5" />
          </ButtonCircle>
        </div>
      </div>
      )

  }
  const renderInitialScreen = () => {
    return (
      <div className={`nc-SectionStatistic relative ${className}`}>
        <div className="p-10"></div>
        <div className="flex items-center justify-center" >
        <Logo className="w-20" />
        </div>
      <Heading
        desc=""
        isCenter = 'true'
      >
        Welcome to JurisAI
      </Heading>
      <div className="container grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div>
            
            <h6 className="text-lg leading-none text-neutral-900 md:text-xl dark:text-neutral-200 text-center mb-10">
              {item.heading}
            </h6>
              <div
                key={item.id}
                className="pl-6 p-2 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800  mb-10"
              >
                <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400">
                  {item.subHeading}
                </span>
              </div>

              <div
                key={item.id}
                className="pl-6 p-2 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800  mb-10"
              >
                <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400">
                  {item.text}
                </span>
              </div>

              <div
                key={item.id}
                className="pl-6 p-2 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
              >
                <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400">
                  {item.text1}
                </span>
              </div>
          </div>
        ))}
      </div>
    </div>
    )

  }
  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap rounded-none">
        <div>
          <h2 className="text-2xl font-semibold">{`Kevin Francis's listings`}</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {`Kevin Francis's listings is very rich, 5 star reviews help him to be
            more branded.`}
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        <div>
          <Tab.Group>
            <Tab.List className="flex space-x-1 overflow-x-auto">
              {categories.map((item) => (
                <Tab key={item} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`flex-shrink-0 block !leading-none font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full focus:outline-none ${
                        selected
                          ? "bg-secondary-900 text-secondary-50 "
                          : "text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      } `}
                    >
                      {item}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="">
                <div className="mt-8 grid grid-cols-1 gap-6 md:gap-7 sm:grid-cols-2">
                  {DEMO_STAY_LISTINGS.filter((_, i) => i < 4).map((stay) => (
                    <StayCard key={stay.id} data={stay} />
                  ))}
                </div>
                <div className="flex mt-11 justify-center items-center">
                  <ButtonSecondary>Show me more</ButtonSecondary>
                </div>
              </Tab.Panel>
              <Tab.Panel className="">
                <div className="mt-8 grid grid-cols-1 gap-6 md:gap-7 sm:grid-cols-2">
                  {DEMO_EXPERIENCES_LISTINGS.filter((_, i) => i < 4).map(
                    (stay) => (
                      <ExperiencesCard key={stay.id} data={stay} />
                    )
                  )}
                </div>
                <div className="flex mt-11 justify-center items-center">
                  <ButtonSecondary>Show me more</ButtonSecondary>
                </div>
              </Tab.Panel>
              <Tab.Panel className="">
                <div className="mt-8 grid grid-cols-1 gap-6 md:gap-7 sm:grid-cols-2">
                  {DEMO_CAR_LISTINGS.filter((_, i) => i < 4).map((stay) => (
                    <CarCard key={stay.id} data={stay} />
                  ))}
                </div>
                <div className="flex mt-11 justify-center items-center">
                  <ButtonSecondary>Show me more</ButtonSecondary>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Reviews (23 reviews)</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* comment */}
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          <CommentListing hasListingTitle className="pb-8" />
          <CommentListing hasListingTitle className="py-8" />
          <CommentListing hasListingTitle className="py-8" />
          <CommentListing hasListingTitle className="py-8" />
          <div className="pt-8">
            <ButtonSecondary>View more 20 reviews</ButtonSecondary>
          </div>
        </div>
      </div>
    );
  };

  const renderChatWithJurisAI = ( ) => {
    return(
      <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
        <ChatWithJurisAI className="py-8" />
      </div>
    )
  }

  return (
    <div className={`nc-AuthorPage `}>
      <main className="mt-0 mb-0 lg:mb-0 flex flex-col lg:flex-row">
        <div className="block flex-grow mb-0 lg:mb-0" style={{ backgroundColor: '#202123' }}>
          <div className="lg:sticky lg:top-0">{renderSidebar()}</div>
        </div>
        <div className="w-full lg:w-3/5 xl:w-4/5 space-y-8 lg:space-y-10 lg:pl-0 flex-shrink-0">
          {/* {renderSection1()} */}
          {/* {renderSection2()} */}
          {renderInitialScreen()}
          <div className="container pt-20 pb-0">
            {renderChatWithJurisAI()}
            {renderChatWithJurisAI()}

          {renderQueryField()}

          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthorPage;
