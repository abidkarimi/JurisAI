"use client";
import React, { FC, useState, useEffect } from "react";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Link from "next/link";
import Logo from "@/shared/Logo";
import axios from "axios";
import { toast } from "react-hot-toast";
import router from "next/router";
import { useRouter } from "next/navigation";
import PageSubscription from "@/app/home-ai/home-ai-components/home-ai-subscription";

interface LoginAIProps {
  className?: string;
}

const LoginAI: FC<LoginAIProps> = ({ className = "" }) => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  const [loginError, setLoginError] = useState("");

  const onLogin = async () => {
    try {
      

      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login successful");
      router.push("/home-ai");
    } catch (error: any) {
      console.log("Login failed", error.message);
      console.log("invalid creadentials");
      toast.error(error.message);
      setLoginError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);


  return (
    <div
      className={`nc-SectionHero2ArchivePage relative ${className} pt-10`}
      data-nc-id="SectionHero2ArchivePage"
    >
      <div
        className="relative py-14 rounded-xl"
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <div className="max-w-md mx-auto p-6">
          <form className="space-y-4">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input
                type="password"
                className="mt-1"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </label>
            <ButtonPrimary
              className="w-full"
              onClick={onLogin}
              disabled={loading}
            >
              Log In
            </ButtonPrimary>
          </form>
          <div className="text-center mt-4">
            <span className="text-neutral-800 dark:text-neutral-200">
              Don&apos;t have an account yet?
            </span>
            <Link
              href="/register-ai"
              className="ml-1 text-sm underline font-medium"
            >
              Register for free
            </Link>
            {loginError && <p className="font-bold text-neutral-800 dark:text-neutral-200">{loginError}</p>}
          </div>
        </div>
      </div>
      {/* {showSubscriptionPopup && handleSubscriptionPopup()} */}
    </div>
  );
};

export default LoginAI;
