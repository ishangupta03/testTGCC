import Link from "next/link";

const Footer = () => {
  return (
    <footer id="Contact">
      <div className="footer-2 bg-gradient-to-b from-[#E5EFF8] to-[#E5EFF8] pt-6 md:pt-8">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-8">
            <div className="footer-info lg:w-1/3 md:px-4">
              <Link href="https://teamgreen.org.in">
                <img
                  className="cursor-pointer"
                  src="./tgo-logo.png"
                  alt="logo"
                />
              </Link>
            </div>

            <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
              <div className="sm:flex">
                <div className="sm:flex-1">
                  <h6 className="text-lg font-bold text-black uppercase mt-4 md:mt-0 mb-4 hover:underline">
                    ABOUT TGCC
                  </h6>
                  <div>
                    <a
                      href="https://linktr.ee/GSSoC22"
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
                  <h6 className="text-lg font-bold text-black uppercase mt-4 md:mt-0 mb-4 hover:underline">
                    LEGAL
                  </h6>
                  <div>
                    <a
                      href="https://gwoc.girlscript.tech/"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      TGCC
                    </a>
                    <a
                      href="https://uplift.girlscript.tech/"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      Uplift Project
                    </a>
                    <a
                      href="https://summit.girlscript.tech/"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      Team Green
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 md:px-4 md:text-left mt-12 lg:mt-0">
              <h5 className="text-lg text-black font-medium mb-4">
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
              <div className="md:flex-1 md:px-4 text-center ">
                <p className="text-black">
                  &copy;{" "}
                  <strong>
                    2024 Team Green Organization. All rights reserved.
                  </strong>
                </p>
              </div>
              {/* <div className="md:flex-1 md:px-4 text-center md:text-right">
                <a
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Privacy Policy
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
