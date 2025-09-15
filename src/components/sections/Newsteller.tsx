import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { InteractiveHoverButton } from "../ui/InterractiveHoverButton";
// Tailwind CSS is assumed to be available.

// Define the types for the component's props to fix the TypeScript error.
interface InteractiveHoverButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const App = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    if (isMessageVisible) {
      const timer = setTimeout(() => {
        setIsMessageVisible(false);
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isMessageVisible]);

  const handleSubscribe = () => {
    if (email) {
      setMessage('Thank you for subscribing!');
    } else {
      setMessage('Please enter a valid email address.');
    }
    setIsMessageVisible(true);
    setEmail('');
  };

  return (
    <div className="flex items-center justify-center min-h-[50vh] bg-[#ffffff] ">
      <div className="w-xl text-center">
          <h1 className="text-3xl md:text-4xl font-normal tracking-wider text-neutral-800 mb-6 uppercase">
            Get an instant Discount!
          </h1>
          <div className="space-y-4 text-sm md:text-base text-neutral-700 font-light mb-8">
            <p>Enjoy a straight 10% off on large orders — no coupons needed.</p>
            <p>Planning a bulk or custom order? We’ve got special pricing just for you.</p>
            <p>Contact us directly to get the best offer on your purchase.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="flex-grow w-full sm:w-auto px-4 py-[0.6rem] border border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-500 placeholder-neutral-500 text-neutral-800 font-light bg-transparent transition-colors duration-300 rounded-full"
            />
            <InteractiveHoverButton onClick={handleSubscribe}>
              Contact Us
            </InteractiveHoverButton>
          </div>
        </div>

      {/* Custom message box */}
      {isMessageVisible && (
        <div className="fixed top-4 right-4 bg-gray-800 text-white py-2 px-4 rounded-md shadow-lg transition-opacity duration-300">
          {message}
        </div>
      )}
    </div>
  );
};

export default App;