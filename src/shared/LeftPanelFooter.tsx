import React, { FC, useState, useEffect,Fragment } from "react";
import { SocialType } from "@/shared/SocialsShare";
import { Dialog, Transition } from '@headlessui/react'

export interface SocialsList1Props {
  className?: string;
}

const socials: SocialType[] = [
  { name: "Clear conversations", icon: "las la-trash", href: "#" },
  { name: "Dark mode", icon: "las la-sun-moon", href: "#" },
  // { name: "Premium plan", icon: "las la-sync", href: "#" },
  { name: "Updates & FAQ", icon: "las la-question-circle", href: "#" },
  { name: "Logout", icon: "las la-sign-out-alt", href: "#" },
];

const LeftPanelFooter: FC<SocialsList1Props> = ({ className = "space-y-2.5" }) => {
  // State variable to track the current theme mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
 


  // State variable to track whether the premium component is visible or not
  const [isPremiumVisible, setIsPremiumVisible] = useState(false);

  // Function to toggle the value of isPremiumVisible
  const togglePremium = () => {
    setIsPremiumVisible((prev) =>!prev);
  };
  
  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Apply changes to the DOM or localStorage to switch theme mode
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-white hover:text-neutral-300 dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group "
        key={index}
      >
        <i className={item.icon}></i>
        <span className="hidden lg:block text-sm">{item.name}</span>
      </a>
    );
  };

  return (
    <>
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1 ">
      
      {socials.map((item, index) => {
        // Render different icon and text for "Dark mode" button based on current theme mode
        if (item.name === "Dark mode") {
          return (
            <button
              key={index}
              onClick={toggleDarkMode}
              className="flex items-center text-2xl text-white hover:text-neutral-300 dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group "
            >
              <i className={isDarkMode ? "las la-sun" : "las la-moon"}></i>
              <span className="hidden lg:block text-sm">{item.name}</span>
            </button>
          );
        } else {
          return renderItem(item, index);
        }
      })}

        
    </div>
   

  
    </>
    
  );
};

export default LeftPanelFooter;
