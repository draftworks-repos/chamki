// "use client";

// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import { Transition } from "@headlessui/react";

// export default function Banner() {
//   const pathname = usePathname();

//   // ✅ Always call hooks at the top level
//   const [isOpen, setIsOpen] = useState(true);

//   const hiddenPaths = ["/contact", "/about", "/product", "/shop", "/collection"];
//   const shouldHide = hiddenPaths.some(path => pathname.startsWith(path));

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY === 0) {
//         setIsOpen(true);
//       } else {
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Just skip rendering the banner content, not the entire component
//   if (shouldHide) {
//     return <></>; // or return null;
//   }

//   return (
//     <Transition
//       show={isOpen}
//       enter="transition-[max-height] duration-500 ease-out"
//       enterFrom="max-h-0"
//       enterTo="max-h-40"
//       leave="transition-[max-height] duration-500 ease-in"
//       leaveFrom="max-h-40"
//       leaveTo="max-h-0"
//     >
//       <div className="overflow-hidden bg-white text-[0.7rem]">
//         <div className="w-full mx-auto px-2 py-[0.2rem] flex items-start justify-between text-[#262626] sm:items-center md:px-8">
//           <div className="flex-1 justify-center flex items-start gap-x-2 sm:items-center">
//             <div className="flex-none px-4 pb-[1px] rounded-full text-[#e7e7e7] bg-[#262626] flex items-center justify-center font-medium text-[0.6rem]">
//               News
//             </div>
//             <p className="font-medium p-2">
//               We just launched a new version of our library!{" "}
//               <a
//                 href="#"
//                 className="font-semibold underline-offset-2 hover:underline duration-150 hover:text-[#1c1c1c] inline-flex items-center ml-2"
//               >
//                 Learn more
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   className="w-5 h-5"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//             </p>
//           </div>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="p-1.5 rounded-md duration-150 hover:bg-neutral-500 ring-offset-1"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="w-4 h-4"
//             >
//               <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </Transition>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";

interface BannerProps {
  message: string;
  link: string;
}

export default function Banner({ message, link }: BannerProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const hiddenPaths = ["/contact", "/about", "/product", "/shop", "/collection"];
  const shouldHide = hiddenPaths.some(path => pathname.startsWith(path));

  useEffect(() => {
    const handleScroll = () => setIsOpen(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (shouldHide) return null;

  return (
    <Transition
      show={isOpen}
      enter="transition-[max-height] duration-500 ease-out"
      enterFrom="max-h-0"
      enterTo="max-h-40"
      leave="transition-[max-height] duration-500 ease-in"
      leaveFrom="max-h-40"
      leaveTo="max-h-0"
    >
      <div className="overflow-hidden bg-[#262626] text-[0.7rem]">
        <div className="w-full mx-auto px-2 py-[0.2rem] flex items-start justify-between text-[#e7e7e7] sm:items-center md:px-8">
          <div className="flex-1 justify-center flex items-start gap-x-2 sm:items-center">
            <div className="flex-none px-4 pb-[1px] rounded-full text-[#262626] bg-[#e7e7e7] flex items-center justify-center font-medium text-[0.6rem]">
              News
            </div>
            <p className="font-medium p-2">
              {message || "We just launched a new version of our library!"}{" "}
              <a
                href={link || "#"}
                className="font-semibold underline-offset-2 hover:underline duration-150 hover:text-[#e7e7e7] inline-flex items-center ml-2"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-md duration-150 hover:bg-neutral-500 ring-offset-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  );
}
