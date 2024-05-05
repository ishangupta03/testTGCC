import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="right"
      className="fixed object-right text-xs text-right right-0 pr-4 pl-4 hidden sm:block z-50"
    >
      {/* <h3 className="text-white">Social Follow</h3> */}
      <a
        href="https://www.facebook.com/TeamGreenOrganization"
        target="_blank"
        className="transition-colors bg-transparent block text-center text-gray-700 py-2 px-2 text-base hover:text-blue-600 ease-linear hover:ease-in rounded-t-md"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="w-10 h-10" icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/teamgreenorganization"
        target="_blank"
        className="transition-colors  bg-transparent block text-center text-gray-700 py-2 px-2 text-base  hover:text-pink-600 ease-linear hover:ease-in"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="w-10 h-10" icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/company/team-green-organization/"
        target="_blank"
        className="transition-colors  bg-transparent block text-center text-gray-700 py-2 px-2 text-base  hover:text-blue-700 ease-linear hover:ease-in"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="w-10 h-10" icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://twitter.com/TeamGreenOrg"
        target="_blank"
        className="transition-colors  bg-transparent block text-center text-gray-700 py-2 px-2 text-base  hover:text-blue-400 ease-linear hover:ease-in"
        rel="noreferrer"
      >
        <img className="w-10 h-10" src="./x-twitter.svg" />
      </a>
      <a
        href="https://www.youtube.com/@teamgreenorganization"
        target="_blank"
        className="transition-colors  bg-transparent block text-center text-gray-700 py-2 px-2 text-base  hover:text-red-600 ease-linear hover:ease-in rounded-b-md"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="w-10 h-10" icon={faYoutube} size="2x" />
      </a>
    </div>
  );
}
