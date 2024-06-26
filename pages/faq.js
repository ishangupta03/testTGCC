import Head from "next/head";
import React, { useState } from "react";
import DiabloAccordion from "../components/diabloAccordion";
import { accordionData } from "./api/FAQdata";

function Faq() {
  const [data] = useState(accordionData);
  return (
    <>
      <Head>
        <title>
          FAQs | Team Green Campus Chapters | Team Green Organization
        </title>
        <meta name="description" content="FAQs of Team Green Campus Chapters" />
        <link
          rel="icon"
          href="./TG_Logo_White.png"
        />
      </Head>
      <section className="flex flex-col items-center md:mb-10">
      
          <h1 className="text-primary_green-0 font-[Montserrat Alternates] text-4xl ml-5 mr-5 md:text-5xl text-center font-bold mb-5">
            Frequently Asked Questions (FAQs)
          </h1>
        
        <div className="md:gap-1 w-11/12 flex wrap justify-center flex-col md:flex-row mb-10">
          <div className="md:w-6/12">
            {data.slice(0, Math.ceil(data.length / 2)).map((curElem) => {
              const { id } = curElem;
              return <DiabloAccordion key={id} {...curElem} />;
            })}
          </div>
          <div className="md:w-6/12">
            {data
              .slice(Math.ceil(data.length / 2), data.length)
              .map((curElem) => {
                const { id } = curElem;
                return <DiabloAccordion key={id} {...curElem} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
