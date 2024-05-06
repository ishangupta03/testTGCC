import Datas from "../pages/api/codeofconductdData";
import { useState, React } from "react";
import Head from "next/head";
const Content = () => {
  return (
    <>
      <Head>
        <title>
          Code of Conduct | Team Green Campus Chapters | Team Green
        </title>
        <meta
          name="description"
          content="Code of Conduct - Team Green Campus Chapters"
        />
      </Head>
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50">
        <div className="items-center justify-center">
          <div className="font-sans text-center text-2xl font-extrabold text-black-100">
            <p className="text-primary_green-0 font-sans text-3xl md:text-5xl text center font-extrabold flex wrap justify-center flex-col md:flex-row mb-10 ">
              <h1 className="text-primary_green-0 text-center">Code of Conduct </h1>
            </p>
          </div>
        </div>
        {Datas.filter((data) => {
          return data;
        }).map((data, j) => {
          return (
            <div className="container" key={j}>
              <div className="flex flex-col md:grid grid-cols-13 text-gray-50">
                <div className="flex md:contents">
                  <div className="list relative mb-10">
                    <span className="absolute z-[1] bg-primary_green-0 px-7 py-2 rounded-full font-serif text-xl">
                      {j + 1}
                    </span>
                    <h3 className="relative mt-5 ml-5 bg-[#2B4257] text-white shadow-xl rounded-lg px-5 py-8 font-serif text-xl">
                      {data.head}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Content;
