import { CheckIcon } from "@heroicons/react/24/solid";
import React, { FC, useEffect, useState } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import axios from "axios";
import jwt from "jsonwebtoken";

export interface PageSubcriptionProps { }

export interface PricingItem {
  name: string;
  pricing?: string;
  desc: string;
  per?: string;
  features?: string[];
}

const pricings: PricingItem[] = [
  {

    name: "Free",
    pricing: "£0 ",
    per: "/mo",
    desc: ` “Welcome to JurisAI! Please note that we currently offer one three-day free trial per law firm. After the trial period ends, access to JurisAI will require a paid subscription. Thank you for choosing JurisAI”`,

  },
  {

    name: "£200",
    // pricing: "€200",
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
  // {
  //   isPopular: false,
  //   name: "Plus",
  //   pricing: "$25",
  //   per: "/mo",
  //   features: [
  //     "Everything in Basic",
  //     "Unlimited Builds",
  //     "Advanced Analytics",
  //     "Company Evaluations",
  //   ],
  //   desc: ` Literally you probably haven't heard of them jean shorts.`,
  // },
];

interface DecodedToken {
  id: string;
  // Add other properties as needed
}

export interface PageSubcriptionProps {
  pricings: PricingItem[];
}

const PageSubscription: FC<PageSubcriptionProps> = ({ pricings }) => {
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const tokk = localStorage.getItem("token");
    const decoded = tokk ? (jwt.decode(tokk) as DecodedToken) : null;
    setDecodedToken(decoded);
  }, []);

  // Use decodedToken state in your component as needed
  const userId = decodedToken?.id;

  console.log("userId:", userId);
  const [loading, setLoading] = useState(false);

  const subscribe = async (newSubscriptionType: string) => {
    try {
      setLoading(true);
      const response = await axios.post("api/subscription/manage", {
        userId,
        newSubscriptionType,
      });
      console.log("subscription updated", response.data);
      // toast.success(response.data.message);
    } catch (error) {
      console.error("Subscription failed:", error);
      // toast.error("Subscription failed. Please try again later.");
    } finally {
      setLoading(false);
    }
    console.log("newsubscriptionType", newSubscriptionType);
  };

  const renderPricingItem = (pricing: PricingItem, index: number) => {
    return (
      <div
        key={index}
        className={`h-full bg-white dark:bg-[#343540] relative px-6 py-8 rounded-3xl border-2 flex flex-col overflow-hidden ${pricing.isPopular
          ? "border-primary-500"
          : "border-neutral-100 dark:border-neutral-700"
          }`}
      >

        <div className="mb-8 flex" style={{ justifyContent: 'center' }} >

          {pricing.name === 'Free' ?
            <h2 className="text-5xl leading-none flex items-center text-neutral-900 dark:text-neutral-300">
              {pricing.name}
            </h2> :
            <h2 className="text-5xl leading-none flex items-center text-neutral-900 dark:text-neutral-300">
              <span>{pricing.pricing}</span>
              <span className="text-lg ml-1 font-normal text-neutral-500 dark:text-neutral-300 dark:hover:text-white">
                {pricing.per}
              </span>
            </h2>
          }

        </div>
        <nav className="space-y-4 mb-8">
          {pricing.features && pricing.features.map((item, index) => (
            <li
              className="flex items-center dark:text-neutral-300 dark:hover:text-white"
              key={index}
            >

              <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000"
                style={{
                  width: ' 1.5rem',
                  height: '1.5rem',
                  border: 'solid 2px black',
                  borderRadius: '12px',
                  backgroundColor: '#000'

                }}
              >
                <CheckIcon className="w-5 h-5 text-[#fff]" aria-hidden="true" />
              </span>
              <span className=" dark:text-neutral-300"
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'rgba(0, 0, 0, 1)',
                  lineHeight: '12.4px'
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </nav>

        <div className="flex flex-col "
          style={{
            height: '85%',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <p className="text-xs  dark:text-[#FFFFFF] mt-3"
            style={{
              fontWeight: '300',
              fontSize: '14px',
              color: 'rgba(0, 0, 0, 1)',
              textAlign: 'center',
              lineHeight: '16.07px'
            }}
          >
            {pricing.desc}
          </p>
          {pricing.name === "Free" ? (
            <button
              className="dark:text-[#4f5160]"
              onClick={() => subscribe("free")} disabled={loading}
              style={{
                backgroundColor: 'rgba(50, 50, 50, 1)',
                height: '42px',
                width: '141.75px',
                borderRadius: '14px',
                color: ' white',
                marginTop: '7px'
              }}
            >
              <span className="font-medium dark:text-neutral-300 dark:hover:text-white">
                Trial
              </span>
            </button>
          ) : (
            <button className="dark:text-[#4f5160]"
              onClick={() => subscribe("monthly")}
              disabled={loading}
              style={{
                backgroundColor: 'rgba(50, 50, 50, 1)',
                height: '42px',
                width: '141.75px',
                borderRadius: '14px',
                color: ' white',
                marginTop: '7px'
              }}
            >
              <span className="font-medium dark:text-neutral-300 dark:hover:text-white">
                Premium
              </span>
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-PageSubscription container pb-24 lg:pb-32 bg-transparent`}
    >
      <section className="text-neutral-600  text-sm md:text-base overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-5 xl:gap-8">
          {pricings.map(renderPricingItem)}
        </div>
      </section>
    </div>
  );
};

export default PageSubscription;
// const PageSubcription: FC<PageSubcriptionProps> = () => {
//   const renderPricingItem = (pricing: PricingItem, index: number) => {
//     return (
//       <div
//         key={index}
//         className={`h-full  bg-white dark:bg-[#0c1222] relative px-6 py-8 rounded-3xl border-2 flex flex-col overflow-hidden ${
//           pricing.isPopular
//             ? "border-primary-500"
//             : "border-neutral-100 dark:border-neutral-700"
//         }`}
//       >
//         {pricing.isPopular && (
//           <span className="bg-primary-500 text-white px-3 py-1 tracking-widest text-xs absolute right-3 top-3 rounded-full z-10">
//             POPULAR
//           </span>
//         )}
//         <div className="mb-8">
//           <h3 className="block text-sm uppercase tracking-widest text-neutral-6000 dark:text-neutral-300 mb-2 font-medium">
//             {pricing.name}
//           </h3>
//           <h2 className="text-5xl leading-none flex items-center text-neutral-900 dark:text-neutral-300">
//             <span>{pricing.pricing}</span>
//             <span className="text-lg ml-1 font-normal text-neutral-500 dark:text-neutral-300 dark:hover:text-white">
//               {pricing.per}
//             </span>
//           </h2>
//         </div>
//         <nav className="space-y-4 mb-8">
//           {pricing.features.map((item, index) => (
//             <li className="flex items-center dark:text-neutral-300 dark:hover:text-white" key={index}>
//               <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
//                 <CheckIcon className="w-5 h-5" aria-hidden="true" />
//               </span>
//               <span className="text-neutral-700 dark:text-neutral-300">
//                 {item}
//               </span>
//             </li>
//           ))}
//         </nav>
//         <div className="flex flex-col mt-auto">
//         <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
//             {pricing.desc}
//           </p>
//           {pricing.isPopular ? (
//             <ButtonPrimary>3 Days Trail</ButtonPrimary>
//           ) : (
//             <ButtonSecondary>
//               <span className="font-medium dark:text-neutral-300 dark:hover:text-white">Buy Now</span>
//             </ButtonSecondary>
//           )}

//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className={`nc-PageSubcription container pb-24 lg:pb-32 bg-transparent `}>

//       <section className="text-neutral-600 text-sm md:text-base overflow-hidden">
//         <div className="grid lg:grid-cols-2 gap-5 xl:gap-8 ">
//           {pricings.map(renderPricingItem)}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PageSubcription;
