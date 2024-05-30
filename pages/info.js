import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

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
      <p className="text-[#2B4257] text-4xl center font-[Montserrat Alternates] font-bold mb-14">
        Eligibility Criteria & Responsibilities
      </p>
    </div>
  </div>

  <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
    <div>
      <h2 className="text-2xl text-[#2B4257] font-bold mb-4">Criteria</h2>
      <ul className="space-y-4">
        <li className="flex items-start">
          <div className="w-6 h-6 mr-2">
            <Image src="/assets/check-icon.png" alt="Check" width={24} height={24} layout="fixed" />
          </div>
          <span>Have a minimum of one year left until graduation</span>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 mr-2">
            <Image src="/assets/check-icon.png" alt="Check" width={24} height={24} layout="fixed" />
          </div>
          <span>Enrolled full-time in an undergraduate or graduate program at a college or university</span>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 mr-2">
            <Image src="/assets/check-icon.png" alt="Check" width={24} height={24} layout="fixed" />
          </div>
          <span>Commit to program for one year</span>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 mr-2">
            <Image src="/assets/check-icon.png" alt="Check" width={24} height={24} layout="fixed" />
          </div>
          <span>Passionate about creating a meaningful impact on the environment</span>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 mr-2">
          <Image src="/assets/check-icon.png" alt="Check" width={24} height={24} layout="fixed" />
          </div>
          <span>Have experience with event planning or leading a team</span>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 mr-2">
            <Image src="/assets/check-icon.png" alt="Check" width={24} height={24} layout="fixed" />
          </div>
          <span>Have connection to the local community</span>
        </li>
      </ul>
    </div>

    <div>
      <h2 className="text-2xl text-[#2B4257] font-bold mb-4">Lead Responsibilities</h2>
      <ul className="space-y-4">
        <li className="flex items-start">
          <div className="w-6 h-6 mr-2">
            <Image src="/assets/bullet-icon.png" alt="Check" width={24} height={24} layout="fixed" />
          </div>
          <span>Host an event ideally once a month, or a total of 6 events for the year</span>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 mr-2">
            <Image src="/assets/bullet-icon.png" alt="Check" width={24} height={24} layout="fixed" />
          </div>
          <span>Report activities on event platform regularly</span>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 mr-2">
            <Image src="/assets/bullet-icon.png" alt="Check" width={24} height={24} layout="fixed" />
          </div>
          <span>Assemble a core team to support organize events and workshops</span>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 mr-2">
            <Image src="/assets/bullet-icon.png" alt="Check" width={24} height={24} layout="fixed" />
          </div>
          <span>Participate in program campaigns and events</span>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 mr-2">
            <Image src="/assets/bullet-icon.png" alt="Check" width={24} height={24} layout="fixed" />
          </div>
          <span>Meet with Regional Lead and Community Manager for guidance</span>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 mr-2">
            <Image src="/assets/bullet-icon.png" alt="Check" width={24} height={24} layout="fixed" />
          </div>
          <span>Adhere to Community Organizer Code of Conduct</span>
        </li>
      </ul>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4 text-[#2B4257]">How to become a Lead</h2>
      <ol className="list-decimal list-inside space-y-4">
        <li>Check if there&apos;s a current <span className="text-primary_green-0">Team Green Campus Chapter</span> on your campus to determine if you&apos;ll start or grow a club. We encourage you to participate or help organize an event to gain practical experience.</li>
        <li>Read the <Link href="/codeofconduct"><a className="text-blue-600">Code of Conduct</a></Link>.</li>
        <li>Submit your TGCC Lead application <a href="https://forms.gle/p7pSN3YHPRDAgfom9" className="text-blue-600">here</a>.</li>
        <li>We&apos;ll review your submission and get back to you by email.</li>
      </ol>
    </div>
  </div>
</div>
</div>
  );
}

export default info;
