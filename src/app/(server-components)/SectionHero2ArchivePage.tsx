import React, { FC } from "react";
import HeroRealEstateSearchForm from "../(client-components)/(HeroSearchForm)/(real-estate-search-form)/HeroRealEstateSearchForm";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Link from "next/link";
import PageLogin from "../login/page";
import Logo from "@/shared/Logo";

export interface SectionHero2ArchivePageProps {
  className?: string;
}

const SectionHero2ArchivePage: FC<SectionHero2ArchivePageProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-SectionHero2ArchivePage relative ${className} pt-10`}
      data-nc-id="SectionHero2ArchivePage"
      
    >
      
      <div className="relative py-14 rounded-xl  " style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <div className="relative inline-flex">
          <div className="w-screen right-10 md:right-32 inset-y-0 absolute bg-primary-500">
            
          </div>
        </div>
        <div className="flex items-center justify-center" >
        <Logo />
        </div>
        <div className="hidden lg:block mt-10 w-full" >
          
          {/* <HeroRealEstateSearchForm /> */}
          <div className="max-w-md mx-auto space-y-6" >
          <form className="grid grid-cols-1 gap-6 pt-6 pb-20" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input type="password" className="mt-1" />
            </label>
            <ButtonPrimary className="" type="submit">Log In</ButtonPrimary>
          </form>
          <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Don't have any account yet?
                <Link href="/login" className="text-sm underline font-medium">
                  Register for free
                </Link>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero2ArchivePage;
