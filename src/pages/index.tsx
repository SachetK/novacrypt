import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import animatedLogo from "public/mainlogo.gif";
import React from "react";
import dev from "public/novadev.png";
import stem from "public/novastem.png";
import build from "public/novabuild.png";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NovaCrypt | Home</title>
        <meta name="description" content="Home page for NovaCrypt" />
      </Head>
      <main className="flex h-full min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0b0c1a]">
        <Landing />
        <Support />
        <About />
        <a
          href="https://gofundme.com"
          className="mb-4 rounded-full bg-violet-800 px-6 py-4 text-center font-jost text-3xl font-semibold text-white transition duration-500 ease-in-out hover:scale-110 hover:bg-violet-600"
        >
          Donate
        </a>
      </main>
    </>
  );
};

const Landing: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 font-jost">
      <h1 className="text-5xl font-bold text-white sm:text-[5rem]">
        NOVA<span className="text-title-blue">CRYPT</span>
      </h1>
      <div className="relative z-auto">
        <Image src={animatedLogo} alt="Learn More" className="relative" />
        <h2 className="text-center text-xl font-normal text-white sm:text-2xl">
          A student-led organization dedicated to educating the next generation
          of innovators
        </h2>
      </div>
    </div>
  );
};

const Support: React.FC = () => {
  const supports = [
    "Cambridge",
    "Columbia",
    "Harvard",
    "IBM",
    "IITs",
    "ISEF",
    "MIT",
    "NASA",
    "Stanford",
    "UN",
  ];

  return (
    <div className="grid grid-cols-2 gap-12 px-4 py-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {supports.map((support) => (
        <Image
          src={`/support/${support.toLowerCase()}.png`}
          width={150}
          height={150}
          alt={support}
          key={support}
          className="relative z-auto"
        />
      ))}
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="m-8 flex flex-col space-y-8 lg:w-1/2">
      <div className="grid grid-cols-2 place-content-center place-items-center gap-y-4">
        <Image
          src={build}
          alt="About"
          className="relative z-auto row-span-3 place-self-center object-contain object-center md:w-2/3"
        />
        <h1 className="text-center text-3xl font-semibold text-white sm:text-5xl">
          Who are we?
        </h1>
        <p className="text-white">
          Novacrypt is a registered 501(c)3 organization that strives to make
          STEM education accessible for all students. In the past years, we have
          conducted various research programs that have reached almost 10,000
          students. Our various projects have been featured on CNBC and many
          students under our umbrella have gone on to compete in STEM
          competitions, winning tens of thousands of dollars in prizes. We have
          currently shifted our focus away from research and we have brought on
          a new team to introduce STEM learning and opportunities to students.
        </p>
        <div className="m-2 flex justify-center">
          <Link
            href="/team"
            className="rounded-xl bg-purple-700/30 px-4 py-3 text-center font-bold text-white transition-colors duration-200 hover:bg-white/40"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 place-content-center place-items-center gap-y-4">
        <Image
          src={stem}
          alt="About"
          className="relative z-auto row-span-3 place-self-center object-contain object-center md:w-2/3"
        />
        <h1 className="text-center text-3xl font-semibold text-white sm:text-5xl">
          Our Mission
        </h1>
        <p className="text-white">
          We aim to foster STEM learning and competition between our community.
          NovaCrypt will be piloting a competition series across various STEM
          disciplines. Every month, the student will receive a broad question in
          a STEM topic that can be approached from multiple disciplines. These
          fields will rotate often but they may include astrophysics, biology,
          computer science, physics, public health, etc. These problems will
          often revolve around real world scenarios for students to address.
        </p>
        <div className="m-2 flex justify-center">
          <Link
            href="/programs"
            className="rounded-xl bg-purple-700/30 px-4 py-3 text-center font-bold text-white transition-colors duration-200 hover:bg-white/40"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 place-content-center place-items-center gap-y-4">
        <Image
          src={dev}
          alt="About"
          className="relative z-auto row-span-3 place-self-center object-contain object-center md:w-2/3"
        />
        <h1 className="text-center text-3xl font-semibold text-white sm:text-5xl">
          Our Program
        </h1>
        <p className="text-white">
          Every six weeks, every chapter will receive a problem/question which
          they will be tasked with trying to solve. Based on the number of
          students in the chapter, the chapter should form teams of around 3-5
          members. The teams will compete challenges around topics including
          subjects like astrophysics, biology, medicine, and other related STEM
          topics.
        </p>
        <div className="m-2">
          <Link
            href="/"
            className="rounded-xl bg-purple-700/30 px-4 py-3 text-center font-bold text-white transition-colors duration-200 hover:bg-white/40"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
