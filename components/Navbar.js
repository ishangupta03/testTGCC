import Link from "next/link";
import React, { useEffect, useState } from "react";
import MoreMenu from "./MoreMenu";
import Image from "next/image";

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const [mounted, setMounted] = useState(false);
 

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <nav className="flex items-center transition-colors flex-wrap bg-white drop-shadow-xl p-1 justify-center mb-10 sticky top-0 z-10">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-green font-bold uppercase tracking-wide  md:ml-8">
             
                <Image
                  // style={{ width: "200px" }}
                  width={200}
                  height={34.28}
                  id="Learn_more"
                  src="./tgcc.png"
                  alt="TGCC logo"
                />
             
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-primary_green-0 rounded lg:hidden text-grey-800 ml-auto hover:text-grey-800 outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto text-center md:mr-8`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center content-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl font-medium md:mr-3.5 hover:text-primary_green-0 hover:text-lg transition-all link link-underline link-underline-black">
                ABOUT
              </a>
            </Link>
            
            <Link href="/team">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl font-medium md:mr-3.5 hover:text-primary_green-0 hover:text-lg transition-all link link-underline link-underline-black">
                TEAM
              </a>
            </Link>
           <Link href="https://teamgreen.org.in/blog">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl font-medium md:mr-3.5 hover:text-primary_green-0 hover:text-lg transition-all link link-underline link-underline-black">
                EVENTS
              </a>
            </Link>
            <a
              href="#Contact"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 mr-30 text-center rounded text-grey-800 text-1xl font-medium md:mr-3.5 hover:text-primary_green-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
              CONTACT
            </a>
            <Link href="/faq">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl font-medium md:mr-3.5 hover:text-primary_green-0 hover:text-lg transition-all link link-underline link-underline-black">
                FAQ
              </a>
            </Link>
            <div className="lg:inline-flex lg:w-auto w-full px-2 text-center rounded link link-underline link-underline-black md:mr-3.5">
              <MoreMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
