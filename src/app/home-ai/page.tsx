"use client";

// import { Tab } from "@headlessui/react";
// import CarCard from "@/components/CarCard";
// import CommentListing from "@/components/CommentListing";
// import ExperiencesCard from "@/components/ExperiencesCard";
// import StartRating from "@/components/StartRating";
// import StayCard from "@/components/StayCard2";
import { GoSync } from "react-icons/go";
import { IoSyncSharp } from "react-icons/io5";
// import {
//   DEMO_CAR_LISTINGS,
//   DEMO_EXPERIENCES_LISTINGS,
//   DEMO_STAY_LISTINGS,
// } from "@/data/listings";
import React, { FC, Fragment, useState, useEffect, useRef  } from "react";
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
import { Dialog, Transition } from "@headlessui/react";
import PageSubcription from "./home-ai-components/home-ai-subscription";
import { IoMdSend } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import { url } from "inspector";
import "@/styles/__theme_custom.scss";
import exp from "constants";
import { marked } from 'marked'
import ResponseCache from "next/dist/server/response-cache";


export interface AuthorPageProps {
  className?: string;
}
export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
  text: string;
  text1: string;
}
const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "Examples",
    subHeading: "Can you tell me the three-stage test in Denton",
    text: "What are the consequences of Part 36",
    text1: "How do I enforce a Judgment out of Jurisdiction",
  },
  {
    id: "2",
    heading: "Capabilities",
    subHeading: "Remembers what user said earlier in the conversation",
    text: "Allows user to provide follow-up correction",
    text1: "99.8% Accuracy",
  },
  {
    id: "3",
    heading: "Limitations",
    subHeading: "May rarely generate incorrect information ",
    text: "May occasionally produce harmful instructions or biased",
    text1: "Limited knowledge of events after February 2024",
  },
];

interface DecodedToken {
  id?: string;
  email?: string;
  fullName?: string;
}

interface queryResponse {
  id?: string;
  query?: string;
  response?: string;
}

const AuthorPage: FC<AuthorPageProps> = ({ className = "" }) => {
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);
  const scrollRef = useRef(null); // Step 1: Create a ref for the div
  const [responseFromJuris, setResponseFromJuris] = useState<queryResponse[]>([]);  // state to stored response from model
  const [query, setQuery] = useState(""); // State 

  useEffect(() => {
    const tokk = localStorage.getItem("token");
    console.log(tokk);
    const decoded = tokk ? (jwt.decode(tokk) as DecodedToken) : null;
    setDecodedToken(decoded);
    console.log(decoded);
  }, []);
  useEffect(() => {
    console.log("IS state changed??? ", responseFromJuris)
    console.log("Scroller ", scrollRef, scrollRef.current)
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [responseFromJuris]);
  // Use decodedToken state in your component as needed
  const userId = decodedToken?.id;
  const email = decodedToken?.email;
  const fullName = decodedToken?.fullName;

  let [categories] = useState(["Stays", "Experiences", "Car for rent"]);
  const [loading, setLoading] = React.useState(false);
  const [loadingLogout, setloadingLogout] = React.useState(false);

  const handleLogout = async () => {
    try {
      setloadingLogout(true);
      await axios.get("/api/users/logout");
      localStorage.removeItem("token"); // Remove token
      localStorage.clear();
      toast.success("Logout successful");
      window.location.href = "/login-ai";
    } catch (error: any) {
      console.error(error.message);
      toast.error("Failed to logout");
    }
   finally {
      setloadingLogout(false);
    }
  };

  const Rendersidebar = () => {
    let [isOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
    return (
      <div className={`nc-SocialsList1 ${className} hide-on-small`} data-nc-id="SocialsList1">
      <div className=" w-full flex flex-col space-y-6 sm:space-y-3 px-0 sm:pl-0 xl:pl-0 h-screen">
        <div className="space-y-0">
          <div className="flex items-center ">
            <span
              className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400 pt-6 pl-8"
              style={{ color: "#ffffff", fontSize: "1.5rem" }}
            >
              <h1>{fullName}</h1>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span
              className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400 pl-8"
              style={{ color: "#ffffff" }}
            >
              {email}
            </span>
          </div>
        </div>

        {/* ---- */}
        <div
          className=" border-b border-neutral-200 dark:border-neutral-700 "
          style={{ borderColor: "#4d4d4f" }}
        ></div>
        <div className="h-3/4"></div>
        <div
          className="border-b border-neutral-200 dark:border-neutral-700 w-50"
          style={{ borderColor: "#4d4d4f" }}
        ></div>

        <div className="grid px-10 grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="flex items-start flex-col gap-4 ">
            <button
              type="button"
              style={{
                fontSize: "15px",
                fontWeight: "400",
              }}
              onClick={openModal}
              className="flex  items-center   py-2 text-md font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
              <GoSync color={"white"} size={20} />

              <p className="px-3">Premmium Plan</p>
            </button>
            <LeftPanelFooter
              onLogout={handleLogout}
              className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start gap-4"
              loading = {loadingLogout?true:false}
            />
          </div>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={() => {
                setIsOpen(false);
              }}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden   bg-transparent p-6 text-left align-middle transition-all h-[82vh]">
                      <PageSubcription
                        pricings={[
                          {
                            isPopular: false,
                            name: "Free",
                            pricing: "€0 ",
                            per: "/mo",
                            desc: ` “Welcome to JurisAI! Please note that we currently offer one three-day free trial per law firm. After the trial period ends, access to JurisAI will require a paid subscription. Thank you for choosing JurisAI”`,
                            features: [
                              "Automated Reporting",
                              "Faster Processing",
                              "Customizations",
                            ],
                          },
                          {
                            isPopular: false,
                            name: "Basic",
                            pricing: "€200",
                            per: "/mo",
                            features: [
                              "Exclusive features and updates.",
                              "Priority customer support.",
                              "Regular newsletters and insights.",
                              "No Contact – Cancel Anytime.",
                            ],
                            desc: ` “We are looking to introduce further subscription plans in the near future. However, currently, this service has been specifically designed for the use of law firms specialising in the civil litigation area of law. 
                          
                      
                          
                          Subscribe today to unlock a world of possibilities and elevate your experience with
                          ”`,
                          },
                        ]}
                      />
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>

      </div>
      </div>
    );
  };
  const [message, setMessage] = useState("");
  const handleMessageChange = (e:any) => {
    console.log("changing ", e.target.value)
    setMessage(e.target.value);
  };
 
  const renderInitialScreen = () => {


    return (
      <div className={`nc-SectionStatistic relative ${className}`}>
        {/* <div className="p-10"></div> */}
        <div className="flex items-center justify-center">
          <Logo className="w-20" />
        </div>
        <Heading desc="" isCenter="true">
          Welcome to JurisAI
        </Heading>

        <div className="container grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
          {FOUNDER_DEMO.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div>
              <h6 className="text-lg leading-none text-neutral-900 md:text-xl dark:text-neutral-200 text-center mb-10">
                {item.heading}
              </h6>
              <div
                key={item.id}
                className="pl-6 p-2 bg-neutral-50 dark:bg-[#3E3F4A] rounded-2xl dark:border-neutral-800  mb-10 "
              >
                <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400">
                  {item.subHeading}
                </span>
              </div>

              <div
                key={item.id}
                className="pl-6 p-2 bg-neutral-50 dark:bg-[#3E3F4A]  rounded-2xl dark:border-neutral-800  mb-10"
              >
                <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400">
                  {item.text}
                </span>
              </div>

              <div
                key={item.id}
                className="pl-6 p-2 bg-neutral-50 dark:bg-[#3E3F4A]  rounded-2xl dark:border-neutral-800"
              >
                <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400">
                  {item.text1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };



  const onInputChange = (event:any) => {
    setQuery(event.target.value);

  };


  // console.log("query", query);

  const renderChatWithJurisAI = () => {
    return (
      <div className="divide-y divide-neutral-100 dark:divide-neutral-800"
      ref={scrollRef}
       style={{ overflow: "auto",  maxHeight: "550px" }}
      >
        {
          responseFromJuris
            .slice() // یہ اصل array کو متاثر کیے بغیر ایک copy بناتا ہے
            // .reverse() // array کو الٹا کر دیتا ہے
            .map(
              (val, ind) => {
                console.log(`Inside state mapping Index: ${ind}, Value:`, val.response, val.query, "Loadding ", loading); // Log the index and value on each iteration

               return (<ChatWithJurisAI key={ind} query={val.query} response={val.response} className="py-8" loading={loading ? true : false} />)

              }
            
            )}
      </div>
    );
  };

  const [enter, setEnter] = useState(false);

  const onSendButtonClick =  () => {
    setEnter(true); // Triggered when the button is clicked
  };
  const onInputEnter = async (event:any) => {
    if (event.key === "Enter") {
      console.log("What is inside reponse sstate at enter hit changed ",  responseFromJuris );
      let response:any = ''
      let processResponse:any = ''
        try {      
        setLoading(true);
        await setResponseFromJuris([...responseFromJuris, {query:query, response:'loading'}])
        console.log("What is inside reponse sstate at enter hit TRY",  responseFromJuris );
        const response = await axios.post("/api/users/logins");
        console.log("Response from RAG ", response)
          console.log("Serverleass ", response.data, response.data.flaskData, response.data.flaskData.choices[0].message.content)
      processResponse = await marked(response.data.flaskData.choices[0].message.content);
      } catch (error: any) {
        console.log("invalid credentials");
        toast.error(error.message);
      }
      finally {
        setLoading(false);
      }
      setEnter(true);
     await  setResponseFromJuris([...responseFromJuris, {query:query, response:processResponse}])
      console.log("AT the end enter hit function what is now value in response state?",  responseFromJuris );

    } else {
      // console.log("Else")
      setQuery(event.target.value);
    }
  };
  const handleFormSubmit = (e:any) => {
    console.log("handleFormSubmit 1", e.key)
    e.preventDefault();
    if (query.trim() !== '') {
      // prompt("promptong",query);
      // setShowDisplayChats(true);
      renderChatWithJurisAI()
      setQuery(''); // Clear the input field

    }
  };

  return (
    <div className="nc-AuthorPage">
      <main
        className="mt-0 mb-0 flex flex-col lg:flex-row"
        style={{ height: "100vh" }}
      >
        <div
          className="flex-grow mb-0 lg:mb-0"
          style={{ backgroundColor: "#202123" }}
        >
          <div className="lg:sticky lg:top-0">{Rendersidebar()}</div>
        </div>
  
        <div
          className="w-full lg:w-3/5 xl:w-4/5 space-y-8 lg:space-y-10 lg:pl-0 flex-shrink-0 dark:bg-[#343540]"
          style={{
            height: "100vh",
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "left",
          }}
        >
          {enter ? renderChatWithJurisAI() : renderInitialScreen()}
          <div className="container pt-4 pb-0 px-0 lg:px-4">
            <div className="space-y-5">
              <div
                className="relative w-full lg:w-3/4 mx-auto"
              >
                <form onSubmit={handleFormSubmit}>
                  <Input
                    type="text"
                    value={query}
                    onChange={onInputChange}
                    onKeyDown={onInputEnter}
                    placeholder="Message JurisAI ..."
                    className="h-14 px-4 py-3 rounded-2xl w-full"
                  />
                  <button
                    onClick={onSendButtonClick}
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    <IoMdSend
                      size={28}
                      style={{
                        color: "rgba(142, 142, 160, 1)",
                      }}
                    />
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthorPage;
