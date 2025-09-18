import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#f7f4f1]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        
        {/* 1st Column: Logo + Socials + Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="Chamki Logo"
              width={150}
              height={40}
              className="mb-6 rounded-xl"
              priority
            />
          </Link>

          <div className="flex space-x-6 mb-6">
            {[{ Icon: FaInstagram, href: "#" },
              { Icon: FaXTwitter, href: "#" },
              { Icon: FaFacebookF, href: "#" },
              { Icon: FaPinterestP, href: "#" }].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-500 font-light max-w-[220px]">
            “Fashion that tells your story — bringing elegance and comfort together for every occasion.”
          </p>
        </div>
        

        {/* 2nd Column: Get in Touch */}
        <div className="flex justify-center items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-800 uppercase mb-4">
              Our Policies
            </h3>
            <div className="w-10 h-[1.5px] bg-gray-800 mb-6"></div>
            <ul className="space-y-3 text-[0.8rem] text-gray-500 font-medium">
              <li>
                <Link href="/privacy" className="hover:underline transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:underline transition-colors">Shipping Policy</Link>
              </li>
              <li>
                <Link href="/returns" className="hover:underline transition-colors">Return & Refund Policy</Link>
              </li>
              <li>
                <Link href="/cookie" className="hover:underline transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 3rd Column: Support Links */}
        <div className="flex justify-center items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700 uppercase mb-4">
              Support
            </h3>
            <div className="w-10 h-[1.5px] bg-gray-800 mb-6"></div>
            <ul className="space-y-3 text-[0.8rem] text-gray-500 font-medium">
              <li>
                <Link href="/about" className="hover:underline transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline transition-colors">FAQs</Link>
              </li>
              <li>
                <Link href="/return-exchange" className="hover:underline transition-colors">Return / Exchange My Order</Link>
              </li>
              <li>
                <Link href="/return-policy" className="hover:underline transition-colors">Return and Exchange Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 4th Column: Policies */}
        <div className="flex justify-center items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700 uppercase mb-4">
              Get in Touch
            </h3>
            <div className="w-10 h-[1.5px] bg-gray-800 mb-6"></div>
            <ul className="space-y-4 text-[0.8rem] text-gray-500 font-medium max-w-sm">
              <li>
                <span className="font-semibold text-gray-600">Email:</span><br />
                <a href="mailto:support@chamki.com" className="hover:underline transition-colors">
                  support@chamki.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-gray-600">Phone:</span><br />
                <a href="tel:+918293456789" className="hover:underline transition-colors">+91 82934 56789</a> /{" "}
                <a href="tel:+919876543210" className="hover:underline transition-colors">+91 98765 43210</a>
              </li>
              <li>
                <span className="font-semibold text-gray-500">Support Hours:</span><br />
                Mon – Sat: 11:00 AM – 7:00 PM
              </li>
            </ul>
          </div>
        </div>
        
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-center text-sm text-gray-500 space-y-3 md:space-y-0">
          <p>© {new Date().getFullYear()} Chamki. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:underline transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:underline transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
