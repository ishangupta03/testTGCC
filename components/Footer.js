import Link from "next/link";
import Image from "next/image";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer id="Contact">
      <div className="footer-2 bg-gradient-to-b from-[#F1F7FD] to-[#E5EFF8] pt-6 md:pt-8">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-8">
            <div className="footer-info lg:w-1/3 md:px-4">
              <Link href="https://teamgreen.org.in">
                <Image
                  className="cursor-pointer"
                  src="./tgo-logo.png"
                  alt="logo"
                  height={75.6}
                  width={380}
                />
              </Link>
              
      <div className="flex flex-wrap py-5 ">
      <a
        href="https://www.facebook.com/TeamGreenOrganization"
        target="_blank"
        className="transition-colors bg-transparent block text-center text-gray-700 py-2 px-2 text-base hover:text-blue-600 ease-linear hover:ease-in rounded-t-md"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="w-7 h-7 md:w-8 md:h-8" icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/teamgreenorganization"
        target="_blank"
        className="transition-colors  bg-transparent block text-center text-gray-700 py-2 px-2 text-base  hover:text-pink-600 ease-linear hover:ease-in"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="w-7 h-7 md:w-8 md:h-8" icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/company/team-green-organization/"
        target="_blank"
        className="transition-colors  bg-transparent block text-center text-gray-700 py-2 px-2 text-base  hover:text-blue-700 ease-linear hover:ease-in"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="w-7 h-7 md:w-8 md:h-8" icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://twitter.com/TeamGreenOrg"
        target="_blank"
        className="transition-colors  bg-transparent block text-center text-gray-700 py-2 px-2 text-base  hover:text-blue-400 ease-linear hover:ease-in"
        rel="noreferrer"
      >
        <img className="w-7 h-7 md:w-8 md:h-8" src="./x-twitter.svg" />
      </a>
      <a
        href="https://www.youtube.com/@teamgreenorganization"
        target="_blank"
        className="transition-colors  bg-transparent block text-center text-gray-700 py-2 px-2 text-base  hover:text-red-600 ease-linear hover:ease-in rounded-b-md"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="w-7 h-7 md:w-8 md:h-8" icon={faYoutube} size="2x" />
      </a>
      </div>
            </div>

            <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-6 lg:mt-0">
              <div className="sm:flex">
                <div className="sm:flex-1">
                  <h6 className="text-lg font-bold text-[#2B4257] uppercase mt-4 md:mt-0 mb-4 hover:underline">
                    ABOUT TGCC
                  </h6>
                  <div>
                    <a
                      href="https://teamgreen.org.in"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      Contact Us
                    </a>
                    
                    <Link href="/codeofconduct">
                    <a
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      Code of Conduct
                    </a>
                    </Link>
                  </div>
                </div>
                <div className="sm:flex-1 mt-4 sm:mt-0">
                  <h6 className="text-lg font-bold text-[#2B4257] uppercase mt-4 md:mt-0 mb-4 hover:underline">
                    LATEST
                  </h6>
                  <div>
                    <a
                      href=""
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      TGCC
                    </a>
                    <a
                      href=""
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      Uplift Project
                    </a>
                    <a
                      href=""
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      Team Green
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 md:px-4 md:text-left mt-12 lg:mt-0">
              <h5 className="text-lg text-[#2B4257] font-medium mb-4">
                Team Green Campus Chapters is the fastest growing eco-conscious community in India. It is
                a non-profit project brought to you by Team Green Organization to
                help . Be a part, spread knowledge {"& "}
                happiness.
              </h5>
              <a href="https://www.girlscript.tech/home">
                <button className="bg-black text-white hover:bg-slate-800 rounded py-2 px-4 md:px-12 transition-colors duration-300">
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-solid border-gray-900 mt-4 py-4">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:-mx-4 md:items-center">
              <div className="md:flex-1 md:px-4 text-center font-[Montserrat Alternates]">
                <p className="text-[#2B4257]">
                  &copy;{" "}
                  <strong>
                    2024 Team Green Organization. All rights reserved.
                  </strong>
                </p>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
