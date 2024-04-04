import { SocialType } from "@/shared/SocialsShare";
import React, { FC } from "react";

export interface SocialsList1Props {
  className?: string;
}

const socials: SocialType[] = [
  { name: "Clear conversations", icon: "las la-trash", href: "#" },
  { name: "Dark mood", icon: "las la-sun-moon", href: "#" },
  { name: "Premium plan", icon: "las la-sync", href: "#" },
  { name: "Updates & FAQ", icon: "las la-question-circle", href: "#" },
  { name: "Logout", icon: "las la-sign-out-alt", href: "#" },
];

const LeftPanelFooter: FC<SocialsList1Props> = ({ className = "space-y-2.5" }) => {
  const renderItem = (item: SocialType, index: number) => {
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
  };

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {socials.map(renderItem)}
    </div>
  );
};

export default LeftPanelFooter;
