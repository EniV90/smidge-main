import { useState } from "react";
import smiley from '../assets/images/smiley.png'
import smidge from '../assets/images/smidge.png'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setIsMenuOpen(false);
    setActiveLink(link);
  };


  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between px-[20px] lg:px-[50px] lg:flex-wrap lg:justify-start lg:pb-4">
      <div className="flex w-full flex-wrap items-center justify-between">
        <div className="ml-2 w-[40%] md:w-[12%] pl-[20px] md:pl-[0px]">
          <a className="flex flex-row justify-center items-center text-xl text-white dark:text-neutral-200" href="/">
            <img
              src={smiley}
              alt="smiley"
              className="w-[60%] h-[60%]"
            />
             <img
              src={smidge}
              alt="smidge"
              className="h-10 mt-5"
            />
          </a>
        </div>
        <button
          className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden mr-[-150px]"
          type="button"
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div className="hidden lg:flex lg:items-center lg:space-x-12 mt-4">
          <div className={`my-4 lg:my-0 ${activeLink === "/" ? "active" : ""}`}>
            <a
              href="/"
              className={`font-flyingBird text-white text-3xl font-semibold hover:text-[#FFEE52] [&.active]:text-[#FFEE52] ${
                activeLink === "/" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("/");
                setIsMenuOpen(false);
              }}
            >
              home
            </a>
          </div>
          <div className={`my-4 lg:my-0 ${activeLink === "/" ? "active" : ""}`}>
            <a
              href="#about"
              className={`font-flyingBird text-white text-3xl font-semibold hover:text-[#FFEE52] [&.active]:text-[#FFEE52] ${
                activeLink === "/about" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("#about");
                setIsMenuOpen(false);
              }}
            >
              about Us
            </a>
          </div>
          <div className={`my-4 lg:my-0 ${activeLink === "/" ? "active" : ""}`}>
            <a
              href="#tokenomics"
              className={`font-flyingBird text-white text-3xl font-semibold hover:text-[#FFEE52] [&.active]:text-[#FFEE52] ${
                activeLink === "#tokenomics" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("#tokenomics");
                setIsMenuOpen(false);
              }}
            >
              tokenomics
            </a>
          </div>
          <div className={`my-4 lg:my-0 ${activeLink === "/" ? "active" : ""}`}>
            <a
              href="#howtobuy"
              className={`font-flyingBird text-white text-3xl font-semibold hover:text-[#FFEE52] [&.active]:text-[#FFEE52] ${
                activeLink === "#howtobuy" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("#howtobuy");
                setIsMenuOpen(false);
              }}
            >
              how to buy
            </a>
          </div>
        </div>
        <div>
        <button className="font-VaguelyRetro text-white text-4xl border-2 border-[#fff] rounded-[50px] bg-transparent px-4 py-2 mt-4 md:block hidden">
            BUY NOW</button>
      </div>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "fixed top-4  left-0 w-full bg-[#3B9239] border-[#ffffff] border-[1px]flex justify-center"
            : "hidden"
        } lg:hidden mt-16 z-50`}
        id="navbarSupportedContent3"
      >
        <div className="lg:flex lg:justify-end lg:items-center h-full w-full ">
          <div className="lg:flex lg:space-x-4 text-center">
            <div className="py-4 border-[#ffffff] border-b-[1px] ">
              <a
                className="active font-flyingBird text-white text-3xl hover:text-[#FFEE52] active:text-[#FFEE52] font-semibold"
                aria-current="page"
                href="/"
                onClick={() => {
                  handleMenuToggle();
                }}
              >
                home
              </a>
            </div>
            <div className="py-4 border-[#ffffff] border-b-[1px] ">
              <a
                className="font-flyingBird text-white text-3xl hover:text-[#FFEE52] active:text-[#FFEE52] lg:px-2 font-semibold"
                href="#about"
                onClick={() => {
                  handleMenuToggle();
                }}
              >
                about us
              </a>
            </div>
            <div className="py-4 border-[#ffffff] border-b-[1px] ">
              <a
                className="font-flyingBird text-white text-3xl hover:text-[#FFEE52] active:text-[#FFEE52] lg:px-2 font-semibold"
                href="#tokenomics"
                onClick={() => {
                  handleMenuToggle();
                }}
              >
                tokenomics
              </a>
            </div>
            <div className="py-4 border-[#ffffff] border-b-[1px] ">
              <a
                className="font-flyingBird text-white text-3xl hover:text-[#FFEE52] active:text-[#FFEE52] lg:px-2 font-semibold"
                href="#howtobuy"
                onClick={() => {
                  handleMenuToggle();
                }}
              >
                how to buy
              </a>
            </div>
            <div className="py-4 border-[#ffffff] border-b-[1px] block md:hidden">
              <a
                className="font-flyingBird text-white text-3xl hover:text-[#FFEE52] active:text-[#FFEE52] lg:px-2 font-semibold"
                href="#"
                onClick={() => {
                  handleMenuToggle();
                }}
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
