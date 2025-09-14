import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

export default function Banner() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) return; // don't listen if already closed

    const handleScroll = () => {
      setIsOpen(false); // collapse once
    };

    window.addEventListener("scroll", handleScroll, { once: true }); 
    // "once: true" makes it auto-remove after first trigger

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

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
      <div className="overflow-hidden bg-neutral-900 text-[0.7rem]">
        <div className="w-full mx-auto px-2 py-[0.2rem] flex items-start justify-between text-white sm:items-center md:px-8">
          <div className="flex-1 justify-center flex items-start gap-x-4 sm:items-center">
            <div className="flex-none px-2 rounded-full text-[#262626] bg-neutral-100 flex items-center justify-center font-medium">
              News
            </div>
            <p className="font-medium p-2">
              We just launched a new version of our library!{" "}
              <a
                href="#"
                className="font-semibold underline-offset-2 hover:underline duration-150 hover:text-neutral-100 inline-flex items-center ml-2"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
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
          {/* Close button */}
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
