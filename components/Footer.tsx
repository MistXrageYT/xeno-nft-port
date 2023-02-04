import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl xl:max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col-reverse text-center justify-between  pt-5 pb-4 lg:flex-row bg-top">
            <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <li>
                <Link
                  href="/"
                  className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#about-me"
                  className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#social"
                  className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
                >
                  Social
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <div className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight">
                Made By{" "}
                <Link
                  href="https://youtube.com/@MistXRage/"
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  MistX Rage
                </Link>
                .
              </div>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
