import Head from "next/head";
function info() {
  return (
    <div>
      <Head>
        <title>
        Eligibility? | Team Green Campus Chapters | Team Green Organization
        </title>
        <meta name="description" content="Eligibilty Criteria & Responsibilities - TGCC" />
        <link
          rel="icon"
          href="./TG_Logo_White.png"
        />
      </Head>
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50">
        <div className="items-center justify-center">
          <div className="text-center text-2xl">
            <p className="text-[#2B4257] text-4xl center font-[Montserrat Alternates] font-bold mb-10">
              Eligibility Criteria & Responsibilities
            </p>
          </div>
        </div>
        <div className="first-section mb-10 flex flex-col md:flex-row justify-between flex-auto items-center flex-wrap mb-24">
          <div className="basis-full mt-4 md:basis-6/12 md:order-last lg:basis-1/2 lg:order-last relative">
            <div className="text-black font-medium text-lg 2.25rem 3rem mb-5 font-sans">
              <ul className="list-disc">
                <li>
                <strong className="text-blue-500 text-2xl">Project Admins</strong> own the projects where the contributors are
                  free to contribute in the form of documentation, bug fixes or
                  adding new features.
                </li>
                <li>
                  PAs have to routinely connect with mentors to discuss about
                  the progress, proceedings &amp; future vision of the project.
                </li>
                <li>
                  PAs are responsible for final reviews, merging PRs, assigning
                  labels, guiding the mentors in the review process &amp;
                  resolving doubts in server.
                </li>
              </ul>
            </div>

            <div className="text-black font-medium text-lg 2.25rem 3rem mb-5 font-sans">
              <ul className="list-disc">
                <li>
                <strong className="text-green-500 text-2xl">Mentors</strong> review the Pull Requests, check for plagiarism, and
                  suggest changes based on the project&apos;s Contribution
                  guidelines.
                </li>
                <li>
                  They solve queries, debug issues faced by contributors &amp;
                  are responsible for guiding contributors actively throughout
                  the program.{" "}
                </li>
              </ul>
            </div>

            <div className="text-black font-medium text-lg 2.25rem 3rem mb-5 font-sans">
              <ul className="list-disc">
                <li>
                <strong className="text-yellow-500 text-2xl">Contributors</strong> should feel free to ask their doubts within the
                   
                </li>
                <li>
                  Contributors actively and consistently contribute to the
                  projects after they&apos;re assigned to a particular issue by
                  a PA/mentor.
                </li>
                <li>
                  The contributors are free to choose &amp; contribute to
                  multiple projects but they need to submit PRs to the assigned
                  issues within the fixed time bar set by the particular
                  project; failing to do so shall result in reassigning of the
                  issue to someone else.{" "}
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      
        </div>
  );
}

export default info;
