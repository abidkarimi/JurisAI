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

const RegisterAI: FC<SectionHero2ArchivePageProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-SectionHero2ArchivePage relative ${className} pt-10`}
      data-nc-id="SectionHero2ArchivePage"
      
    >
      
      <div className="relative rounded-xl  " style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <div className="relative inline-flex">
          <div className="w-screen right-10 md:right-32 inset-y-0 absolute bg-primary-500">
            
          </div>
        </div>
        <div className="flex items-center justify-center" >
        <Logo />
        </div>
        <div className="hidden lg:block w-full" >
          
          {/* <HeroRealEstateSearchForm /> */}
          <div className="max-w-md mx-auto space-y-6" >
          <form className="grid grid-cols-1 gap-3 pt-1 pb-2" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Full name
              </span>
              <Input
                type="name"
                placeholder="Deo Daw"
                // 
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input type="password"  placeholder="Password"/>
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Law firm
              </span>
              <Input
                type="text"
                placeholder=""
                
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Area of practice
              </span>
              <Input
                type="text"
                placeholder=""
                
              />
            </label>
            <ButtonPrimary className="" type="submit">Sign up</ButtonPrimary>
          </form>
          <label className="block">
              <span className="flex justify-between items-center pb-10 text-neutral-800 dark:text-neutral-200">
                Already have account?
                <Link href="/login" className="text-sm underline font-medium">
                  Log In
                </Link>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAI;
