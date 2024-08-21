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

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      const { token } = response.data; // Extract token from response
      localStorage.setItem("token", token); // Save token to localStorage
      console.log("Login success", response.data);
      toast.success("Login successful");
      router.push("/home-ai");
    } catch (error: any) {
      // console.log("Login failed", error.message);
      console.log("invalid credentials");
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
      className={`nc-SectionHero2ArchivePage relative ${className} pt-8`}
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
            <label className="block pb-6">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <div className="relative ">
                <Input
                  type={showPassword ? "text" : "password"}
                  className="mt-1 pr-10"
                  value={user.password}
                  placeholder="Passsword"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      width="15"
                      height="15"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      width="15"
                      height="15"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </label>
            <ButtonPrimary
              className="w-full"
              onClick={onLogin}
              disabled={loading}
              loading = {loading?true:false}
            >
              Log In
            </ButtonPrimary>
          </form>
          <div className="text-center mt-20 pt-10">
            <span className="text-neutral-800 dark:text-neutral-200">
              Don&apos;t have an account yet?
            </span>
            <Link
              href="/register-ai"
              className="ml-1 text-sm underline font-medium"
            >
              Register for free
            </Link>
            {loginError && (
              <p className="font-bold text-neutral-800 dark:text-neutral-200">
                {loginError}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* {showSubscriptionPopup && handleSubscriptionPopup()} */}
    </div>
  );
};

export default LoginAI;
