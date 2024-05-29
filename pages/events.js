import Head from "next/head";
import { InstagramEmbed } from 'react-social-media-embed';
function info() {
  return (
    <div>
      <Head>
        <title>
        Events | Team Green Campus Chapters | Team Green Organization
        </title>
        <meta name="description" content="Past Events - TGCC" />
        <link
          rel="icon"
          href="./TG_Logo_White.png"
        />
      </Head>
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50">
        <div className="items-center justify-center">
          <div className="text-center text-2xl">
            <p className="text-[#2B4257] text-4xl center font_heading font-bold mb-10">
              Past Events
            </p>
          </div>
        </div>
        <div className="first-section mb-10 flex flex-col md:flex-row justify-between flex-auto items-center flex-wrap mb-24">
          <div className="basis-full mt-4 md:basis-6/12 md:order-last lg:basis-1/2 lg:order-last relative">
            

            <div className="flex justify-center" >
              <div className="mr-2 ml-2"> <InstagramEmbed url="https://www.instagram.com/p/C3-wyKHMIAe/" width={328}/></div>
              <div className="mr-2 ml-2"> <InstagramEmbed url="https://www.instagram.com/p/C3-wyKHMIAe/" width={328}/></div>
              <div className="mr-2 ml-2"> <InstagramEmbed url="https://www.instagram.com/p/C3-wyKHMIAe/" width={328}/></div>
            </div>
          </div>
        </div>
      </div>
      
        </div>
  );
}

export default info;
