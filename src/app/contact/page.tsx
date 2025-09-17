"use client"
import React from "react"
import { InteractiveHoverButton } from "@/components/ui/InterractiveHoverButton"
import styles from "@/components/Hero.module.css"

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col items-center">

      {/* Hero Section */}
      <div className="relative overflow-hidden w-full bg-gradient-to-r from-pink-100 to-red-100">
        <img
          src="/image-4.jpeg"
          alt="Contact background"
          className="w-full h-[75vh] object-cover object-top brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8 md:p-12">
          <div className="text-center max-w-3xl mb-20">
            <span className="text-white text-sm font-semibold uppercase tracking-widest block mb-2">Contact Us</span>
            <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight">
              Questions, feedback, or ideas? We’re listening.
            </h1>
            <p className="mt-6 text-white text-lg md:text-xl opacity-90">
              Feel free to drop a message and we will get back to you within 24 hours.
            </p>
            <a 
              href="mailto:hi@chamki.com"
              className={styles.button}
              style={{ marginTop: "20px" }} 
             >
              <span className={styles.text} style={{fontSize: "1.1rem"}}>
                Email Us
                <img
                  src="/arrow-up-right.svg"
                  alt="Arrow up right"
                  className={styles.arrow}
                />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-5xl mx-auto my-20 px-6 text-center">
        <span className="text-pink-primary text-sm font-semibold uppercase tracking-widest block mb-4">Get in Touch</span>
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          Let’s Connect and Start the Conversation
        </h2>
        <p className="mt-6 text-gray-700 text-lg">
          Whether it’s for careers, product queries, or collaborations — we’re always happy to hear from you.
        </p>
        <div className="mt-10 space-y-6 text-lg text-gray-800">
          <p><strong>careers@chamki.com</strong> for career enquiries.</p>
          <p><strong>hi@chamki.com</strong> or WhatsApp on <strong>+91 98765 43210</strong> for product or order related queries.</p>
          <p><strong>community@chamki.com</strong> for collaboration requests.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-pink-light p-10 md:p-12 text-center">
        <p className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight max-w-4xl mx-auto">
          "Every great conversation starts with a simple hello."
        </p>
        <p className="mt-6 text-xl text-gray-700">— Chamki Team</p>
        <InteractiveHoverButton className="mt-8" asChild>
          <a href="mailto:hi@chamki.com">Say Hello</a>
        </InteractiveHoverButton>
      </div>
    </div>
  )
}

export default ContactPage;
