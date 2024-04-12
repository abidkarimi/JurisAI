import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router"; // Import useRouter from next/router
import { SocialType } from "@/shared/SocialsShare";

export interface SocialsList1Props {
  className?: string;
  onLogout: () => void; // Callback function for logout
}

const socials: SocialType[] = [
  { name: "Clear conversations", icon: "las la-trash", href: "#" },
  { name: "Dark mode", icon: "las la-sun-moon", href: "#" },
  { name: "Premium plan", icon: "las la-sync", href: "#" },
  { name: "Updates & FAQ", icon: "las la-question-circle", href: "#" },
  { name: "Logout", icon: "las la-sign-out-alt", href: "#" },
];

const LeftPanelFooter: FC<SocialsList1Props> = ({
  className = "space-y-2.5",
  onLogout,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {socials.map((item, index) => {
        if (item.name === "Logout") {
          return (
            <button
              key={index}
              onClick={onLogout} // Call the onLogout prop when Logout button is clicked
              className="flex items-center text-2xl text-white hover:text-neutral-300 dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
            >
              <i className={item.icon}></i>
              <span className="hidden lg:block text-sm">{item.name}</span>
            </button>
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
  );
};

export default LeftPanelFooter;

// import React, { FC, useState, useEffect } from "react";
// import { SocialType } from "@/shared/SocialsShare";
// import toast from "react-hot-toast";
// import axios from "axios";

// export interface SocialsList1Props {
//   className?: string;
// }
// export interface SocialsList1Props {
//   className?: string;
//   onLogout: () => void; // Callback function for logout
// }
// const socials: SocialType[] = [
//   { name: "Clear conversations", icon: "las la-trash", href: "#" },
//   { name: "Dark mode", icon: "las la-sun-moon", href: "#" },
//   { name: "Premium plan", icon: "las la-sync", href: "#" },
//   { name: "Updates & FAQ", icon: "las la-question-circle", href: "#" },
//   { name: "Logout", icon: "las la-sign-out-alt", href: "#" },
// ];

// const LeftPanelFooter: FC<SocialsList1Props> = ({ className = "space-y-2.5" }) => {
//   // State variable to track the current theme mode
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

//   // Function to toggle between dark and light mode
//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   useEffect(() => {
//     // Apply changes to the DOM or localStorage to switch theme mode
//     document.documentElement.classList.toggle("dark", isDarkMode);
//   }, [isDarkMode]);

//   const renderItem = (item: SocialType, index: number) => {
//     return (
//       <a
//         href={item.href}
//         className="flex items-center text-2xl text-white hover:text-neutral-300 dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
//         key={index}
//       >
//         <i className={item.icon}></i>
//         <span className="hidden lg:block text-sm">{item.name}</span>
//       </a>
//     );
//   };

//   const LeftPanelFooter: FC<SocialsList1Props> = ({ className = "space-y-2.5", onLogout }) => {

//     const renderItem = (item: SocialType, index: number) => {
//       function handleLogout() {
//         const router = useRouter()
//     const [data, setData] = useState("nothing")
//     const logout = async () => {
//         try {
//             await axios.get('/api/users/logout')
//             toast.success('Logout successful')
//             router.push('/login-ai')
//         } catch (error:any) {
//             console.log(error.message);
//             toast.error(error.message)
//         }
//     }

//     const getUserDetails = async () => {
//         const res = await axios.get('/api/users/me')
//         console.log(res.data);
//         setData(res.data.data._id)
//     }
//       throw new Error("Function not implemented.");
//     }
//       return (
//         <a
//           href={item.href}
//           className="flex items-center text-2xl text-white hover:text-neutral-300 dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
//           key={index}
//         >
//           <i className={item.icon}></i>
//           <span className="hidden lg:block text-sm">{item.name}</span>
//         </a>
//       );
//     };

//     return (
//       <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
//         {socials.map((item, index) => {
//           if (item.name === "Logout") {
//             return (
//               <button
//                 key={index}
//                 onLogout={handleLogout}
//                 // onClick={handleLogout}
//                 className="flex items-center text-2xl text-white hover:text-neutral-300 dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
//               >
//                 <i className={item.icon}></i>
//                 <span className="hidden lg:block text-sm">{item.name}</span>
//               </button>
//             );
//           } else {
//             return renderItem(item, index);
//           }
//         })}
//       </div>
//     );
//   };

//   return (
//     <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
//       {socials.map((item, index) => {
//         // Render different icon and text for "Dark mode" button based on current theme mode
//         if (item.name === "Dark mode") {
//           return (
//             <button
//               key={index}
//               onClick={toggleDarkMode}
//               className="flex items-center text-2xl text-white hover:text-neutral-300 dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
//             >
//               <i className={isDarkMode ? "las la-sun" : "las la-moon"}></i>
//               <span className="hidden lg:block text-sm">{item.name}</span>
//             </button>
//           );
//         } else {
//           return renderItem(item, index);
//         }
//       })}
//     </div>

//   );
// };

// export default LeftPanelFooter;
