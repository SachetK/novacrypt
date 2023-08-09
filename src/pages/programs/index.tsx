import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Programs: NextPage = () => {
  return (
    <main className="flex h-full min-h-screen flex-col items-center bg-[#0b0c1a]">
      <Head>
        <title>NovaCrypt | Programs</title>
        <meta name="description" content="Programs page for NovaCrypt" />
      </Head>
      <section className="m-2 flex h-screen w-2/5 flex-col items-center justify-center space-y-3 text-white">
        
          <h2 className="w-full p-2 text-center font-jost text-3xl hover:underline">
            Summer Internship 2023
          </h2>
        
        
          
        <section className="flex flex-row items-center gap-4">
          <Image
            src="/support/nasa.png"
            alt="Best Projects"
            width={200}
            height={100}
          />
          Insert carousel here later
        </section>
        <Link
            href="/programs/summer-internship-2023"
            className="rounded-xl bg-purple-700/30 px-4 py-3 text-center font-bold text-white transition-colors duration-200 hover:bg-white/40"
          >
            Learn More
          </Link>
      
      </section>
    </main>
  );
};

export default Programs;
