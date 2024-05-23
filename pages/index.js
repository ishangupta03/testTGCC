import Aos from "aos";
import Head from "next/head";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
import VisibilitySensor from "react-visibility-sensor";
import Card from "../components/homepage/Card";
import SocialFollow from "../components/homepage/SocialFollow";

export default function Home() {
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    Aos.init({ duration: 2000 });
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>
          Team Green Campus Chapters | Team Green Organization India
        </title>
        <meta name="TGCC'24" content="Team Green Campus Chapters enrollment is back!" />
        <link
          rel="icon"
          href="./TG_Logo_White.png"
        />

        <meta property="og:url" content="https://tgcc.teamgreen.org.in" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Team Green Campus Chapters" />
        <meta property="og:description" content="TGCC'24 is here! | Team Green Orgainization - Caring for mother Earth" />
        <meta property="og:image" content="./TG_Logo_White.png" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tgcc.teamgreen.org.in" />
        <meta property="twitter:url" content="https://tgcc.teamgreen.org.in" />
        <meta name="twitter:title" content="Team Green Campus Chapters" />
        <meta name="twitter:description" content="TGCC'24 is here!" />
        <meta name="twitter:image" content="./TG_Logo_White.png" />


      </Head>
      
      <div className="hidden lg:block 3xl:hidden">
        <div className="absolute bottom-[60rem] right-0">
          <img
            src="./assets/light-bg.png"
            alt="bg"
          />
        </div>
      
      </div>
      <SocialFollow />
      
      <div className="container transition-colors mx-auto md:mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50">
        <div className="first-section mb-10 flex flex-col md:flex-row">
          <div className="basis-1/2 relative">
            <div className="text-black text-6xl font-[Montserrat Alternates] font-semibold 2.25rem 3rem mb-10">
              <span className="text-primary_green-0 font-bold">TGCC </span>
              <span className="text-[#2B4257]"> 2024</span>
              <div className="mt-2 text-[#2B4257]">is here!</div>
            </div>

            <div className="font-serif font-medium text-2xl 1.5rem 2rem text-gray-800 ">
             Join us and ignite change for a sustainable future!
              <br />
              <span className="text-primary_green-0">#Eco-conscious &nbsp;</span>
              program by Team Green Organization.
              <br />
              <b className="text-[#2B4257]"> 23rd May - 15th June 2024 </b>
            </div>

            <br></br>
            <div className="flex items-center mt-2 mb-10 md:mb-52 lg:mb-56">
              <a className="" href="https://forms.gle/p7pSN3YHPRDAgfom9">
                <button
                  id="CTA-button"
                  data-aos="fade-down"
                  className=" bg-gradient-to-b from-primary_green-0 to-blue-600 text-md text-white font-semibold px-4 py-4 rounded-2xl md:text-2xl md:py-2 hover:bg-gradient-to-t hover:from-primary_green-0 hover:to-blue-600"
                >
                  Register Here
                </button>
              </a>
              <a data-aos="fade-down" href="#about-tgcc">
                <div className="font-serif font-medium text-md text-primary_green-0 ml-9 md:text-2xl">
                  Learn More
                </div>
              </a>
            </div>
          </div>

          <div data-aos="fade-down" className="hero__image hidden lg:block">
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ height: 600, width: 600 }}
            >
              <div className="img__container">
                  <img
                    src={"./hero-image.png"}
                    alt="hero-image"
                  /> :
              </div>
            </Tilt>
          </div>
        </div>


        <div className="flex justify-between items-center flex-wrap mb-24">
          <div
            className="border-4 rounded drop-shadow-xl border-black"
            data-aos="flip-left"
            data-aos-duration="700"
          >
            <img
              src="./group-photo.jpg"
              height="453"
              width="420"
              alt="TGCC Noida Group Photo"
            />
          </div>
          <div className="basis-full md:basis-6/12 md:order-first lg:basis-1/2 lg:order-first relative">
              <img
                className=" mt-4 mb-8 md:mb-9 md:mt-0"
                src="./tgo-logo.png"
                alt="logo"
              />
            <div className="text-black  font-semibold text-4xl 2.25rem 3rem mb-5 font-[Montserrat Alternates]">
            <span className="text-[#2B4257]"> About</span> <span className="text-primary_green-0">Team Green </span>
              <span className="text-[#2B4257]">Organization</span>
            </div>
              <p className=" text-xl text-primary_grey ">
            Team Green is an environmental NGO, that radiates dedication to environmental preservation and sustainable living 
            with its core philosophy of “for the society, by the society”. Team Green has passionately championed awareness, 
            promoted eco-friendly practices, and catalyzed initiatives that honor our planet.
            In 2021, the seeds of compassion sprouted into the &quot;Helping in Need by Team Green&quot; sub-unit, exemplifying that 
            environmental responsibility extends beyond nature itself to include aiding those in need.
            Born in 2023, the Team Green Campus Chapter (TGCC) carries the organization&apos;s legacy forward, 
            uniting young minds to champion sustainability and environmental stewardship.
            </p>
          </div>
        </div>

        <div
          className="flex flex-row justify-between items-center bg-[#F1F7FD] flex-wrap rounded-xl mb-24"
          id="about-tgcc"
        >
          <div className="px-4 pt-3 lg:text-right rounded-xl md:w-1/2 lg:my-4 lg:px-10 lg:py-10 lg:w-1/2">
              <img
                id="Learn_more"
                className="mb-10 sm:mt-0 mt-5"
                src="./tgcc-logo.png"
                alt="Learn More light"
              />
            <div className="text-primary_green-0 text-left font-semibold font-[Montserrat Alternates] text-4xl 2.25rem 3rem mb-5 lg:w-[570px]">
              <h1 className="text-4xl 2.25rem 3rem text-[#2B4257]">
                About
                <br />
                Team Green{" "}
              </h1>
              Campus Chapters
            </div>
            <p className="text-left text-xl text-primary_grey">
            With its roots embedded in Team Green&apos;s legacy, TGCC unites young minds to carry forth the torch of sustainability and environmental stewardship.
            TGCC comprises a dedicated group of students who have taken up the mantle of safeguarding our environment and promoting sustainable practices. 

            Their mission is simple yet profound: to build a strong community of students committed to the welfare of our surroundings. 
            
            </p>
          </div>

          <div className="pr-4 font-semibold pt-3 rounded-lg lg:my-4 lg:px-2 lg:py-10 ml-4 md:mr-4">
            <div className="bg-stone-50 shadow-lg rounded-lg my-1 px-1 pr-2 w-64 sm:w-fit">
              <h1 className="mt-8 pt-6 pl-8 text-3xl xl:text-4xl text-primary_green-0 3rem 3rem ">
                TGCC 2023-24
              </h1>
              <div className="pl-8 text-2xl text-primary_green-0 1.5rem 2rem ">
                {" "}
                by the numbers
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-2 mb-4">
                <div className="statscol">
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_green-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end={200} /> : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-primary_green-0 1.5rem 2rem ">
                      {" "}
                      Volunteers
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_green-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={1000} /> : null}+</div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-primary_green-0 1.5rem 2rem ">
                      {" "}
                      Students Engaged
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_green-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end={5} /> : '5'}
                          </div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className=" mb-6 text-2xl text-primary_green-0 1.5rem 2rem ">
                      Institutes
                    </p>
                  </div>
                </div>

                <div className="statscol">
                  <div className="mt-4 pt-4 pl-8 pr-4">
                    <h1 className="text-3xl xl:text-4xl text-primary_green-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end={550} /> : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-primary_green-0 1.5rem 2rem ">
                      {" "}
                      Trees Planted
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_green-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={40} /> : null}+</div> 
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-primary_green-0 1.5rem 2rem ">
                      {" "}
                      Events
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_green-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={4} /> : null}+</div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className=" mb-6 text-2xl text-primary_green-0 1.5rem 2rem ">
                      States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        {/* Partners*/}
        <div className="flex flex-row justify-center px-3 mb-20" id="Sponsors">
          <div className="sponsors__wrapper flex flex-col">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="400"
              className="bg-white other__sponsors px-9 py-9 shadow-xl rounded flex flex-col justify-center items-center"
            >
              <h3 className="text-primary_green-0 font-[Montserrat Alternates] font-semibold text-4xl  mb-5 place-content-center">
                Our Chapters
              </h3>

              <div className="flex flex-col sm:flex-row flex-wrap gap-x-20 gap-y-10 md:gap-y-8 justify-between items-center mt-5 mb-5">
                <a href="https://teamgreen.org.in/campus-chapter-iiit-kota">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-24"
                    src="./assets/logos/iiit-kota.png"
                    alt="IIIT Kota"
                  />
                </a>
             
                <a href="https://teamgreen.org.in/">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-24"
                    src="./assets/logos/iiit_nagpur.png"
                    alt="IIIT Nagpur"
                  />
                </a>

                <a href="https://teamgreen.org.in/">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-24"
                    src="./assets/logos/jiit-noida.png"
                    alt="JIIT Noida"
                  />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-x-20 gap-y-10 md:gap-y-8 justify-between items-center mt-5 mb-5">
                <a href="s">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-20"
                    src="./assets/logos/rg-academy.png"
                    alt="RG Academy Ajmer"
                  />
                </a>

                <a href="s">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-20"
                    src="./assets/logos/siddham-academy.png"
                    alt="Siddham Academy Ajmer"
                  />
                </a>
             </div>
              

              <h3 className="text-primary_green-0 font-[Montserrat Alternates] font-semibold text-4xl  mb-5 place-content-center mt-5 text-center">
                GeoTagging Partner
              </h3>
              <div className="flex flex-col sm:flex-row flex-wrap gap-x-28 justify-between items-center mt-5">
                <a href="s">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-16"
                    src="./assets/logos/tia.png"
                    alt="Tia Plant Care"
                  />
                </a>
              </div>

              <h3 className="mt-10 text-primary_green-0 font-[Montserrat Alternates] font-semibold text-4xl  mb-12 place-content-center text-center">
                Past Collaborations
              </h3>
              <div className="flex flex-col sm:flex-row flex-wrap gap-x-28 justify-between items-center mb-5 gap-y-10 md:gap-y-8 ">
                <a href="">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-20"
                    src="./assets/logos/team_shunya.png"
                    alt="Team Shunya"
                  />
                </a>
                <a href="">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-24"
                    src="./assets/logos/nss-logo.png"
                    alt="NSS IIT Bombay"
                  />
                </a>
                <a href="">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-24"
                    src="./assets/logos/ldl-logo.png"
                    alt="Light de Literacy"
                  />
                </a>
              </div>

            </div>
          </div>
        </div>

       

        <div className="be-part-of">
          <p className="font-[Montserrat Alternates] font-semibold text-center text-[#2B4257] text-4xl 2.25rem 3rem ">
            <span className=" text-primary_green-0 text-4xl 2.25rem 3rem">
              Be a part of{" "}
            </span>
            Team Green Campus Community
          </p>
          <div
            data-aos="flip-left"
            data-aos-duration="1500"
            className="container my-12 mx-auto"
          >
            <div
              className="flex flex-wrap justify-between md:justify-around -mx-1 lg:-mx-4 md:justify-items-stretch"
              id="card-1"
            >
              {/* Card-1 */}
              <Card
                disabled
                title="Start your Journey"
                content="Joining Team Green Campus Chapters isn't just about environmental activism – it's about unlocking your leadership potential. Get ready to lead the charge for change, organize impactful events, and inspire others to join the movement. Elevate your skills, boost your confidence, and become a leader worth following."

              />
              {/* Card-2 */}
              <Card
                disabled
                title="Network Growth"
                content="Team Green Campus Chapters connects you with a nation-wode network of environmentally-conscious students, professionals, and organizations. Through collaboration on projects and participation in events, you'll have the opportunity to build meaningful relationships, exchange ideas, and learn from others who share your passion for environmental sustainability."
              />
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            className="container my-12 mx-auto "
          >
            <div className="flex flex-wrap justify-between md:justify-around -mx-1 lg:-mx-4">
              {/* Card-3 */}
              <Card
                disabled
                title="Hands-On Experience"
                content="Team Green Campus Chapters offer a platform for you to actively engage in environmental conservation efforts on your campus and in your community. Whether it's organizing tree planting drives, expert talks, or advocating for sustainable practices, you'll gain practical experience and make a tangible impact on the environment. Join us and be a changemaker! #GoGreen #CaringForMotherEarth"
              />

              {/* Card-4 */}
              <Card
                title="Recognition &amp; Rewards"
                content="Upon completing your term with Team Green Campus Chapters, you'll receive a personalized certificate acknowledging your contributions to sustainability. Additionaly, a tree will be planted in your name as a symbol of your dedication to environmental conservation. But that's not all! Top performers will also receive goodies based on their performance, rewarding your efforts in making a tangible impact on the planet."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="schedule__container flex flex-col items-center mb-48 ">
        <div className="schedule__overview mt-16 relative">
          <p className="font-[Montserrat Alternates] font-semibold text-4xl ml-4 mr-4 mb-4   text-center">
            <span className="text-primary_green-0">Schedule</span> <span className="text-[#2B4257]">of TGCC
            2024!</span>
          </p>
       <img src="./assets/flow.png"/>
          
        </div>
      </div>
    </div>
  );
}
