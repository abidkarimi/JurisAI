import React, { FC, useState, useEffect } from "react";
import { SocialType } from "@/shared/SocialsShare";
import ButtonPrimary from "@/shared/ButtonPrimary";
import "@/styles/__theme_custom.scss";

export interface SocialsList1Props {
  className?: string;
  onLogout: () => void; // Callback function for logout
  loading?: boolean;
}

const socials: SocialType[] = [
  { name: "Clear conversations", icon: "las la-trash", href: "#" },
  { name: "Dark mode", icon: "las la-sun-moon", href: "#" },
  // { name: "Premium plan", icon: "las la-sync", href: "#" },
  { name: "Updates & FAQ", icon: "las la-question-circle", href: "#" },
  { name: "Logout", icon: "las la-sign-out-alt", href: "#" },
];

const LeftPanelFooter: FC<SocialsList1Props> = ({
  className = "space-y-2.5",
  onLogout,
  loading = false
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
     <div className={`nc-SocialsList1 ${className} hide-on-small`} data-nc-id="SocialsList1">
  <div className={`nc-SocialsList1 ${className} left-panel-footer`} data-nc-id="SocialsList1">
    {socials.map((item, index) => {
      if (item.name === "Logout") {
        return (
          <ButtonPrimary
            loading={loading}
            key={index}
            onClick={onLogout}
            className="flex items-center text-2xl text-white hover:text-neutral-300 dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
          >
            <i className={item.icon}></i>
            <span className="hidden lg:block text-sm">{item.name}</span>
          </ButtonPrimary>
        );
      } else if (item.name === "Dark mode") {
        return (
          <button
            key={index}
            onClick={() => setIsDarkMode((prevMode) => !prevMode)}
            className="flex items-center text-2xl text-white hover:text-neutral-300 dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
          >
            <i className={isDarkMode ? "las la-sun" : "las la-moon"}></i>
            <span className="hidden lg:block text-sm">{item.name}</span>
          </button>
        );
      } else {
        return (
          <a
            href={item.href}
            className="flex items-center text-2xl text-white hover:text-neutral-300 dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
            key={index}
          >
            <i className={item.icon}></i>
            <span className="hidden lg:block text-sm">{item.name}</span>
          </a>
        );
      }
    })}
  </div>
</div>

    </>
  );
};

export default LeftPanelFooter;
