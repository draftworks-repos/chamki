"use client";
import React from "react";
import { InteractiveHoverButton } from "@/components/ui/InterractiveHoverButton";

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col items-center">

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#FDEFF6] via-[#F9E9ED] to-[#FDEFF6]">
        <img
          src="/image-4.jpeg"
          alt="Contact background"
          className="w-full h-[75vh] object-cover object-top brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8 md:p-12">
          <div className="text-center max-w-3xl mb-20">
            <span className="text-white text-sm font-semibold uppercase tracking-widest block mb-2">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight drop-shadow-lg">
              Questions, feedback, or ideas? We&apos;re listening.
            </h1>
            <p className="mt-6 text-white text-lg md:text-xl opacity-90">
              Feel free to drop a message and we will get back to you within 24 hours.
            </p>
            <a
              href="mailto:hi@chamki.com"
              className="inline-flex items-center mt-5 px-6 py-3 bg-[#CC007E] text-white font-semibold text-lg rounded-md hover:bg-[#e60073] transition-colors"
            >
              Email Us
              <img
                src="/arrow-up-right.svg"
                alt="Arrow up right"
                className="ml-2 w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-5xl mx-auto my-20 px-6 text-center">
        <span className="text-[#CC007E] text-sm font-semibold uppercase tracking-widest block mb-4">
          Get in Touch
        </span>

        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-snug mb-6">
          Let&apos;s Connect and Start the Conversation
        </h2>

        <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Whether it&apos;s for careers, product queries, or collaborations — we&apos;re always happy to hear from you.
        </p>

        <div className="mt-12 text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
          <p>
            For career opportunities, reach out to{" "}
            <a
              href="mailto:careers@chamki.com"
              className="font-semibold text-gray-900 hover:text-[#CC007E] transition-colors"
            >
              careers@chamki.com
            </a>
            . For any product questions, order assistance, or general inquiries, you can email us at{" "}
            <a
              href="mailto:hi@chamki.com"
              className="font-semibold text-gray-900 hover:text-[#CC007E] transition-colors"
            >
              hi@chamki.com
            </a>{" "}
            or message us on WhatsApp at{" "}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-900 hover:text-[#CC007E] transition-colors"
            >
              +91 98765 43210
            </a>
            . If you&apos;re interested in collaborations or partnership opportunities, contact us at{" "}
            <a
              href="mailto:community@chamki.com"
              className="font-semibold text-gray-900 hover:text-[#CC007E] transition-colors"
            >
              community@chamki.com
            </a>
            . We look forward to connecting with you and will respond promptly to every message!
          </p>
        </div>
      </div>



      {/* CTA Section */}
      <div className="w-full p-10 md:p-14 text-center border-t border-b border-gray-200">
        <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-900 max-w-4xl mx-auto leading-snug">
          &quot;Every great conversation starts with a simple hello.&quot;
        </p>
        <p className="mt-6 text-xl text-gray-700">— Chamki Team</p>
        <InteractiveHoverButton className="mt-8" >
            Say Hello
        </InteractiveHoverButton>
      </div>

    </div>
  );
};

export default ContactPage;
