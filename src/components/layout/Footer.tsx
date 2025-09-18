import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image"
import  Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#f7f4f1]">
      <div className="max-w-7xl mx-auto px-6 py-16  grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        
        {/* 1st Column: Contact */}
        <div>
          <h3 className="text-base font-bold tracking-wider text-gray-800 uppercase mb-4">
            Contact Us
          </h3>
          <div className="w-10 h-[1.5px] bg-gray-800 mx-auto mb-6"></div>

          {/* Email */}
          <a
            href="mailto:support@chamki.com"
            className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            support@chamki.com
          </a>

          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="text-sm font-semibold text-gray-600 mt-2 block hover:text-gray-900 transition-colors"
          >
            +91 98765 43210
          </a>

          {/* Quote */}
          <p className="mt-6 text-sm font-semibold text-gray-500 max-w-xs mx-auto">
            “Fashion that tells your story, bringing elegance and comfort together for every occasion.”
          </p>
        </div>


        {/* 2nd Column: Logo + Socials */}
        <div className="flex flex-col items-center">
          {/* <h2 className="text-3xl font-bold tracking-wide mb-7">Chamki</h2> */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Chamki Logo"
              width={120}
              height={40}
              style={{marginBottom: "30px", borderRadius: "1rem"}}
              priority
            />
          </Link>
          <div className="flex space-x-5 mb-8">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 transform transition-transform duration-700 ease-out hover:-translate-y-1"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 transform transition-transform duration-700 ease-out hover:-translate-y-1"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 transform transition-transform duration-700 ease-out hover:-translate-y-1"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 transform transition-transform duration-700 ease-out hover:-translate-y-1"
            >
              <FaPinterestP size={18} />
            </a>
          </div>

          <p className="text-xs font-semibold text-gray-500">Share Your style, your story with us</p>
        </div>

        {/* 3rd Column: Footer Menu */}
        <div className="flex flex-col items-center">
          <h3 className="text-base font-bold tracking-wider text-gray-800 uppercase mb-4">
            Quick Links
          </h3>
          <div className="w-10 h-[1.5px] bg-gray-800 mx-auto mb-6"></div>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900 font-semibold">Shop</a></li>
            <li><a href="#" className="hover:text-gray-900 font-semibold">About</a></li>
            <li><a href="#" className="hover:text-gray-900 font-semibold">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-200 ">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center space-y-3 text-center">
          <p className="text-sm text-gray-500 flex gap-1">
            © {new Date().getFullYear()} Chamki. All Rights Reserved. •
            <a href="#" className="hover:text-gray-900 ">Privacy Policy</a>•
            <a href="#" className="hover:text-gray-900 ">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
