import type { NextPage } from "next";
import Head from "next/head";

const News: NextPage = () => {
  return (
    <main className="h-full min-h-screen bg-[#0b0c1a]">
      <Head>
        <title>News | NovaCrypt</title>
        <meta name="description" content="Newsletter for NovaCrypt" />
      </Head>
      <section className="flex h-screen w-full flex-col items-center justify-center">
        <h1 className="text-xl text-white">Newsletter</h1>
        <h2 className="text-lg text-white">Coming Soon!</h2>
      </section>
    </main>
  );
};

export default News;
