// import React, { FC } from "react";
// import HeroRealEstateSearchForm from "../(client-components)/(HeroSearchForm)/(real-estate-search-form)/HeroRealEstateSearchForm";
// import Input from "@/shared/Input";
// import ButtonPrimary from "@/shared/ButtonPrimary";
// import Link from "next/link";
// import PageLogin from "../login/page";
// import Logo from "@/shared/Logo";

// export interface SectionHero2ArchivePageProps {
//   className?: string;
// }

// const RegisterAI: FC<SectionHero2ArchivePageProps> = ({
//   className = "",
// }) => {
//   return (
//     <div
//       className={`nc-SectionHero2ArchivePage relative ${className} pt-10`}
//       data-nc-id="SectionHero2ArchivePage"

//     >

//       <div className="relative rounded-xl  " style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
//         <div className="relative inline-flex">
//           <div className="w-screen right-10 md:right-32 inset-y-0 absolute bg-primary-500">

//           </div>
//         </div>
//         <div className="flex items-center justify-center" >
//         <Logo />
//         </div>
//         <div className="hidden lg:block w-full" >

//           {/* <HeroRealEstateSearchForm /> */}
//           <div className="max-w-md mx-auto space-y-6" >
//           <form className="grid grid-cols-1 gap-3 pt-1 pb-2" action="#" method="post">
//             <label className="block">
//               <span className="text-neutral-800 dark:text-neutral-200">
//                 Full name
//               </span>
//               <Input
//                 type="name"
//                 placeholder="Deo Daw"
//                 //
//               />
//             </label>
//             <label className="block">
//               <span className="text-neutral-800 dark:text-neutral-200">
//                 Email
//               </span>
//               <Input
//                 type="email"
//                 placeholder="example@example.com"

//               />
//             </label>
//             <label className="block">
//               <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
//                 Password
//               </span>
//               <Input type="password"  placeholder="Password"/>
//             </label>
//             <label className="block">
//               <span className="text-neutral-800 dark:text-neutral-200">
//                 Law firm
//               </span>
//               <Input
//                 type="text"
//                 placeholder=""

//               />
//             </label>
//             <label className="block">
//               <span className="text-neutral-800 dark:text-neutral-200">
//                 Area of practice
//               </span>
//               <Input
//                 type="text"
//                 placeholder=""

//               />
//             </label>
//             <ButtonPrimary className="" type="submit">Sign up</ButtonPrimary>
//           </form>
//           <label className="block">
//               <span className="flex justify-between items-center pb-10 text-neutral-800 dark:text-neutral-200">
//                 Already have account?
//                 <Link href="/login" className="text-sm underline font-medium">
//                   Log In
//                 </Link>
//               </span>
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterAI;
"use client";
import React, { FC, useState } from "react";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Link from "next/link";
import Logo from "@/shared/Logo";
import axios from "axios";
import router from "next/router";
import { stringify } from "querystring";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface RegisterAIProps {
  className?: string;
}

const RegisterAI: FC<RegisterAIProps> = ({ className = "" }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    lawFirm: "",
    areaOfPractice: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { email, password } = formData;

      if (!isValidEmail(email)) {
        setError("Invalid email address");
        setLoading(false);
        return;
      }

      if (!password || password.length < 8) {
        setError("Password must be at least 8 characters long");
        setLoading(false);
        return;
      }
      const response = await axios.post("/api/users/signup", formData);
      console.log("Signup success", response.data);

      router.push("/login-ai");
      // Redirect to login page after successful signup
      toast.success("Signup successful");
    } catch (error: any) {
      console.error("Signup failed", error.message, stringify(error));
      // router.push("/login")
      // toast.error("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className={`nc-SectionHero2ArchivePage relative ${className} pt-1 sm:pt-10`}
      data-nc-id="SectionHero2ArchivePage"
    >
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <div className="max-w-md mx-auto p-3 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-2">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Full name
              </span>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Deo Daw"
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email
              </span>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Law firm
              </span>
              <Input
                type="text"
                name="lawFirm"
                value={formData.lawFirm}
                onChange={handleChange}
                placeholder=""
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Area of practice
              </span>
              <Input
                type="text"
                name="areaOfPractice"
                value={formData.areaOfPractice}
                onChange={handleChange}
                placeholder=""
              />
            </label>
            <ButtonPrimary className="w-full" type="submit">
              {loading ? "Processing" : "Sign up"}
            </ButtonPrimary>
          </form>
          {error && (
            <p className="font-bold text-neutral-800 dark:text-neutral-200">
              {error}
            </p>
          )}
          <div className="text-center mt-4">
            <span className="text-neutral-800 dark:text-neutral-200">
              Already have an account?
            </span>
            <Link
              href="/login-ai"
              className="ml-1 text-sm underline font-medium"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAI;

// import React, { FC, useState } from "react";
// import axios from "axios"; // Import Axios
// import Input from "@/shared/Input";
// import ButtonPrimary from "@/shared/ButtonPrimary";
// import Link from "next/link";
// import Logo from "@/shared/Logo";
// import { useClient } from 'next/client';

// export interface SectionHero2ArchivePageProps {
//   className?: string;
// }

// const RegisterAI: FC<SectionHero2ArchivePageProps> = ({
//   className = "",
// }) => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     lawFirm: "",
//     areaOfPractice: ""
//   });

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("/api/register", formData); // Adjust the API endpoint accordingly
//       console.log(response.data); // Handle the response as needed
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   return (
//     <div
//       className={`nc-SectionHero2ArchivePage relative ${className} pt-10`}
//       data-nc-id="SectionHero2ArchivePage"
//     >
//       <div className="relative rounded-xl  " style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
//         <div className="relative inline-flex">
//           <div className="w-screen right-10 md:right-32 inset-y-0 absolute bg-primary-500"></div>
//         </div>
//         <div className="flex items-center justify-center" >
//           <Logo />
//         </div>
//         <div className="hidden lg:block w-full" >
//           <div className="max-w-md mx-auto space-y-6" >
//             <form className="grid grid-cols-1 gap-3 pt-1 pb-2" onSubmit={handleSubmit}>
//               <label className="block">
//                 <span className="text-neutral-800 dark:text-neutral-200">Full name</span>
//                 <Input
//                   type="name"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   placeholder="Deo Daw"
//                 />
//               </label>
//               <label className="block">
//                 <span className="text-neutral-800 dark:text-neutral-200">Email</span>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="example@example.com"
//                 />
//               </label>
//               <label className="block">
//                 <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Password</span>
//                 <Input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Password"
//                 />
//               </label>
//               <label className="block">
//                 <span className="text-neutral-800 dark:text-neutral-200">Law firm</span>
//                 <Input
//                   type="text"
//                   name="lawFirm"
//                   value={formData.lawFirm}
//                   onChange={handleChange}
//                   placeholder=""
//                 />
//               </label>
//               <label className="block">
//                 <span className="text-neutral-800 dark:text-neutral-200">Area of practice</span>
//                 <Input
//                   type="text"
//                   name="areaOfPractice"
//                   value={formData.areaOfPractice}
//                   onChange={handleChange}
//                   placeholder=""
//                 />
//               </label>
//               <ButtonPrimary className="" type="submit">Sign up</ButtonPrimary>
//             </form>
//             <label className="block">
//               <span className="flex justify-between items-center pb-10 text-neutral-800 dark:text-neutral-200">
//                 Already have an account?
//                 <Link href="/login" className="text-sm underline font-medium">
//                   Log In
//                 </Link>
//               </span>
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterAI;
