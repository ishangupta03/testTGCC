import Aos from "aos";
import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
import VisibilitySensor from "react-visibility-sensor";
import ThemeChanger from "../components/Toggler";
import Card from "../components/homepage/Card";
import Slider from "../components/homepage/Slider";
import SocialFollow from "../components/homepage/SocialFollow";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

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

        <meta property="og:url" content="https://teamgreen.org.in" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Team Green Campus Chapters" />
        <meta property="og:description" content="Caring for mother Earth" />
        <meta property="og:image" content="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="gssoc.girlscript.tech" />
        <meta property="twitter:url" content="https://gssoc.girlscript.tech/" />
        <meta name="twitter:title" content="GirlScript Summer of Code'23" />
        <meta name="twitter:description" content="GSSoC'23 is here!" />
        <meta name="twitter:image" content="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png" />


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
      {/* <div className="absolute object-right text-xs text-right right-1 px-2 animate-pulse py-2 rounded-full opacity-80 bg-black top-20 lg:hidden">
        <ThemeChanger />
      </div> */}
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50">
        <div className="first-section mb-10 flex flex-col md:flex-row">
          <div className="basis-1/2 relative">
            <div className="text-black text-6xl font-sans font-semibold 2.25rem 3rem mb-10">
              <span className="text-primary_green-0">TGCC </span>
              2024
              <div className="mt-2">is here!</div>
            </div>

            <div className="font-serif font-medium text-2xl 1.5rem 2rem text-gray-800 ">
             Join us and ignite change for a sustainable future!
              <br />
              <span className="text-primary_green-0">#GoGreen &nbsp;</span>
              program by Team Green Organization.
              <br />
              <b> 1st May - 10th June 2024 </b>
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
            <div className="text-black  font-semibold text-4xl 2.25rem 3rem mb-5 font-sans">
              About <span className="text-primary_green-0">Team Green </span>
              Organization
            </div>
            <p className=" font-serif text-1xl text-black-100">
            Team Green is an environmental NGO, that radiates dedication to environmental preservation and sustainable living 
            with its core philosophy of “for the society, by the society”. Team Green has passionately championed awareness, 
            promoted eco-friendly practices, and catalyzed initiatives that honor our planet.
            In 2021, the seeds of compassion sprouted into the &quot;Helping in Need by Team Green&quot; sub-unit, exemplifying that 
            environmental responsibility extends beyond nature itself to include aiding those in need.
            Born in May 2023, the Team Green Campus Chapter (TGCC) carries the organization&apos;s legacy forward, 
            uniting young minds to champion sustainability and environmental stewardship.
            TGCC is a testament to Team Green&apos;s enduring commitment.
            </p>
          </div>
        </div>

        <div
          className="flex flex-row justify-between items-center bg-[#E5EFF8] flex-wrap rounded-xl mb-24"
          id="about-tgcc"
        >
          <div className="px-4 pt-3 lg:text-right rounded-xl md:w-1/2 lg:my-4 lg:px-10 lg:py-10 lg:w-1/2">
              <img
                id="Learn_more"
                className="mb-10 sm:mt-0 mt-5"
                src="./tgcc-logo.png"
                alt="Learn More light"
              />
            <div className="text-primary_green-0 text-left font-semibold font-sans text-4xl 2.25rem 3rem mb-10 lg:w-[570px]">
              <h1 className=" text-black text-4xl 2.25rem 3rem">
                About
                <br />
                Team Green{" "}
              </h1>
              Campus Chapters
            </div>
            <p className=" font-serif text-left text-xl">
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
                          <div>{isVisible ? <CountUp end={7} /> : null} +</div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-primary_green-0 1.5rem 2rem ">
                      {" "}
                      Institutes
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
                            {isVisible ? <CountUp end={11000} /> : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className=" mb-6 text-2xl text-primary_green-0 1.5rem 2rem ">
                      Co2 Emissions Absorbed
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
                            {isVisible ? <CountUp end={500} /> : null}+
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
                          <div>{isVisible ? <CountUp end={4} /> : null}+</div> 
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-primary_green-0 1.5rem 2rem ">
                      {" "}
                      States
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_green-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={50} /> : null}+</div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className=" mb-6 text-2xl text-primary_green-0 1.5rem 2rem ">
                      Events
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="organisation">
          <div className="hidden lg:block 3xl:hidden">
          </div>

          {/* <p className="font-sans font-semibold  text-center text-gray-800 text-4xl 2.25rem 3rem mb-8">
          Some of the previous <br />
          <span className="text-primary_green-0 text-4xl 2.25rem 3rem">
            participating organisations
          </span>
        </p> */}
          <div className="org__box flex flex-row items-center justify-center flex-wrap">
            {/* <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/girlscript/gssoc-assets/blob/main/Participating_projects/logo1.png?raw=true"
              alt="logo"
            />
             <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/girlscript/gssoc-assets/blob/main/Participating_projects/logo2.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12"
              src="https://github.com/girlscript/gssoc-assets/blob/main/Participating_projects/logo3.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12"
              src="https://github.com/girlscript/gssoc-assets/blob/main/Participating_projects/logo4.png?raw=true"
              alt="logo"
            /> */}
          </div>
        </div>

        {/* sponsors */}
        <div className="flex flex-row justify-center px-3 mb-20" id="Sponsors">
          <div className="sponsors__wrapper flex flex-col">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="400"
              className="bg-white other__sponsors px-9 py-9 shadow-xl rounded flex flex-col justify-center items-center"
            >
              <h3 className="text-primary_green-0 font-sans font-semibold text-4xl  mb-5 place-content-center">
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
              

              <h3 className="text-primary_green-0 font-sans font-semibold text-4xl  mb-5 place-content-center mt-5 text-center">
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

              <h3 className="mt-10 text-primary_green-0 font-sans font-bold text-4xl  mb-12 place-content-center text-center">
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

        {/* Slider */}
        <div className="mb-20">
          <Slider />
        </div>

        <div className="be-part-of">
          <p className="font-sans font-semibold text-center  text-gray-800 text-4xl 2.25rem 3rem ">
            <span className="text-primary_green-0 text-4xl 2.25rem 3rem">
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
                content="Participating in GSSoC’23 is an opportunity to upgrade your Github profile. Enrich yourselves to learn, explore, improve, enhance, build connections and become a team player to nourish your skills and personality. Don’t miss a chance to get well-versed with Open-Source and essential tools like Git and Github under the supervision of excellent mentors."
                /* btntext="Apply as a Contributor"
                link="https://forms.gle/aXSG5y1Qxz2cYK9S6" */

              />
              {/* Card-2 */}
              <Card
                disabled
                title="Lead the Team"
                content="Mentors are the experts and take the lead of the open-source project team. They guide the fellow participants at each stage in a road map of the project. They are the backbone of team and are available throughout the summer to review the pull requests and suggest betterment. Apply to be a mentor at Girlscript summer of code and be the foundation of your team."
                /* btntext="Apply as a mentor"
                link="https://forms.gle/M6JqocE8x1RJTJHk8" */
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
                title="Inviting Projects &amp; NGOs"
                content="If you are an organization with a project idea in mind, a website or an app then this is the golden opportunity to become a part of an awesome community. The budding developers under the guidance of expert mentors will work on your projects and strive to achieve the best version. Apply and let’s collaborate together because Together Everyone Achieves More."
                /* btntext="Apply as an Organization/Project Admin"
                link="https://forms.gle/4F2PCMut9Ebi2GPY8" */
              />

              {/* Card-4 */}
              <Card
                title="Add a Shade to TGCC"
                content="Sponsors with their precious resources make it possible for GirlScript to conduct the entire event smoothly, to encourage talent by enabling us to give perks to our top participants. Hence as a token of gratitude, we provide great publicity on our social platforms and exposure on media about our sponsors. Sponsor us to add a bright shade to our program."
                /* btntext="Sponsor Us"
                link="https://forms.gle/Eqi4MYb5A3Qw5g5A8" */
              />
            </div>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="schedule__container flex flex-col items-center mb-48 ">
        <div className="schedule__overview mt-24 relative">
          <p className="font-sans font-semibold text-3xl ml-4 mr-4 mb-4   text-center">
            <span className="text-primary_green-0">Schedule</span> of TGCC
            2024!
          </p>
       <img src=""/>
          
        </div>
      </div>
    </div>
  );
}
