import React, { FC } from "react";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Link from "next/link";
import Logo from "@/shared/Logo";

interface LoginAIProps {
  className?: string;
}

const LoginAI: FC<LoginAIProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionHero2ArchivePage relative ${className} pt-10`} data-nc-id="SectionHero2ArchivePage">
      <div className="relative py-14 rounded-xl" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <div className="max-w-md mx-auto p-6">
          <form className="space-y-4" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">Email</span>
              <Input type="email" placeholder="example@example.com" className="mt-1" />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Password</span>
              <Input type="password" className="mt-1" />
            </label>
            <ButtonPrimary className="w-full" type="submit">Log In</ButtonPrimary>
          </form>
          <div className="text-center mt-4">
            <span className="text-neutral-800 dark:text-neutral-200">Don't have an account yet?</span>
            <Link href="/register-ai" className="ml-1 text-sm underline font-medium">Register for free</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAI;

