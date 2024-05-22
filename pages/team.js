import React, { useState, useEffect } from "react";
import { Box, Skeleton, SkeletonCircle, Spacer } from "@chakra-ui/react";
import Head from "next/head";

const Team = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async (year) => {
    let url = `/team_data/team${year}.json`;
    const response = await fetch(url);
    setUsers(await response.json());
  };

  useEffect(() => {
    var customQuery = window.location.href.split("#")[1]; // Direct link to /team#20XX
    // Note - Only change 2022 with current year
    customQuery ? getUsers(customQuery) : getUsers("2023");
  }, []);

  return (
    <>
      <Head>
        <title>
          Team | Team Green Campus Chapter | Team Green Organization
        </title>
        <meta name="description" content="Our Team - Team Green Campus Chapters" />
        <link
          rel="icon"
          href="./TG_Logo_White.png"
        />
      </Head>
      <div className="items-center justify-center">
        <p className="text-center text-2xl">
          <p className="font-[Montserrat Alternates] text-4xl md:text-5xl text center font-bold flex wrap justify-center flex-col md:flex-row mb-10">
            <h1 className="text-[#2B4257]">Meet the Team</h1>
          </p>
          <p className=" mr-5 ml-5 text-primary_green-0">
            Team Green is here to make your journey memorable!
          </p>
        </p>
      </div>
  
      <Spacer mt={20} />
      <div className="flex flex-row justify-center flex-wrap items-center gap-x-20 gap-y-10 w-100">
        {users.map((curElem, i) => {
          return (
            <>             
                 <div className="flex items-center justify-center w-80" key={i}>
                  <div className="p-4 bg-none border-solid border-2 rounded-xl w-full md:h-fit">
                    <div className="h-max rounded-lg relative mb-5 hover:-translate-y-4 duration-300 hover:cursor-pointer">
                      <img
                        src={curElem.Image}
                        alt="Team Member Photo"
                        className="object-cover object-center rounded-full"
                      />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="font-bold text-[#2B4257] md:text-xl">
                        {curElem["Name"]}
                      </div>
                      <p className="mb-3 text-lg text-primary_green-0 font-bold	md:text-base md:mb-4 text-center">
                        {curElem["Designation"]}
                      </p>

                      <div className="flex">
                        <div className="flex gap-4">
                          {curElem["GitHub"] == "" ? (
                            <></>
                          ) : (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={curElem["GitHub"]}
                            >
                              <svg
                                className="w-6 h-6 text-[#2B4257] fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                              </svg>
                            </a>
                          )}
                          {curElem.hasOwnProperty("Twitter") === false ||
                          curElem["Twitter"].trim() == "" ? (
                            <></>
                          ) : (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={curElem["Twitter"]}
                            >
                              <svg
                                className="w-6 h-6 text-[#2B4257] fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                    
                              </svg>
                            </a>
                          )}
                          {curElem["LinkedIn"] == "" ? (
                            <></>
                          ) : (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={curElem["LinkedIn"]}
                            >
                              <svg
                                className="w-6 h-6 text-[#2B4257] fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            </>
          );
        })}
      </div>
      <Spacer mt={20} />
    </>
  );
};

export default Team;
