import React from 'react';
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="container mx-auto mt-8 mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50">
      <h1 className="text-center text-4xl font-bold text-[#2B4257] mb-4">Contact Us</h1>
      <p className="text-center text-xl text-primary_green-0 mb-10">
        Any questions or remarks? Just write us a message!
      </p>
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/3 bg-[#2B4257] p-8">
          <div className="flex items-center justify-center">
            <img src="tgo-dark.png" alt="Logo" className="w-380 h-16"/>
          </div>
          <h2 className="text-2xl font-bold text-white mt-4">Send us Your Query</h2>
          <p className="text-white mb-4">Feel free to get in touch</p>
          <ul className="text-white space-y-4">
            <li className="flex items-center">
              <span className="mr-2">📧</span> tgcampuschapters@gmail.com
            </li>
            <li className="flex items-center">
              <span className="mr-2">📍</span> India
            </li>
          </ul>
          <div className="flex space-x-4 mt-8 md:mt-12">
      <a
        href="https://www.facebook.com/TeamGreenOrganization"
        target="_blank"
        className="transition-colors bg-transparent block text-center text-primary_green-0 py-2 px-2 text-base hover:text-blue-600 ease-linear hover:ease-in rounded-t-md"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="w-7 h-7 md:w-8 md:h-8" icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/teamgreenorganization"
        target="_blank"
        className="transition-colors  bg-transparent block text-center text-primary_green-0 py-2 px-2 text-base  hover:text-pink-600 ease-linear hover:ease-in"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="w-7 h-7 md:w-8 md:h-8" icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/company/team-green-organization/"
        target="_blank"
        className="transition-colors  bg-transparent block text-center text-primary_green-0 py-2 px-2 text-base  hover:text-blue-700 ease-linear hover:ease-in"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="w-7 h-7 md:w-8 md:h-8" icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://twitter.com/TeamGreenOrg"
        target="_blank"
        className="transition-colors block text-center py-2 px-2 text-base ease-linear"
        rel="noreferrer"
      >
         <svg
            className="md:w-8 md:h-8 w-7 h-7 text-primary_green-0 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>

          </svg>
      </a>

          </div>
        </div>

      <div className="md:w-2/3 p-8">
        <form action="https://formspree.io/f/xvoenazn" method="POST" className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">First Name</label>
              <input type="text" name="First Name" placeholder="Enter your first name" className="w-full p-2 border border-gray-300 rounded-md" required/>
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-gray-700">Last Name</label>
              <input type="text" name="Last Name" placeholder="Enter your last name" className="w-full p-2 border border-gray-300 rounded-md" required/>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">Email</label>
              <input type="email" name="Email" placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded-md" required/>
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-gray-700">Phone Number</label>
              <input type="tel" name="Phone" placeholder="Enter your phone number" className="w-full p-2 border border-gray-300 rounded-md"/>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea name="Message" placeholder="Enter your message..." className="w-full p-2 border border-gray-300 rounded-md h-32" required></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">Send Message</button>
        </form>
      </div>

      </div>
    </div>
  );
}

export default ContactForm;
