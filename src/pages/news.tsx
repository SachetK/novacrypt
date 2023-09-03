import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type Newsletter = {
  month: `${string} ${string}`;
  page: string;
}

const newsletters: Set<Newsletter> = new Set([
  {
    month: "September 2022",
    page: "news/september-2022"
  },
  {
    month: "August 2022",
    page: "news/august-2022"
  },
  {
    month: "July 2022",
    page: "news/july-2022"
  },
  {
    month: "June 2022",
    page: "news/june-2022"
  },
  {
    month: "May 2022",
    page: "news/may-2022"
  },
  {
    month: "April 2022",
    page: "news/april-2022"
  },
])

const News: NextPage = () => {
  return (
    <main className="h-screen bg-[#0b0c1a]">
      <Head>
        <title>News | NovaCrypt</title>
        <meta name="description" content="Newsletter for NovaCrypt" />
      </Head>
      <div className="flex flex-col items-center justify-center h-full">
      <h1 className="font-jost text-xl text-white">Newsletters</h1>
      <h2 className="font-jost text-lg text-white">Stay up to date with all the latest news!</h2>
      <section className="h-4/5 grid grid-flow-row grid-cols-3 gap-4 m-2">
        {
          [...newsletters].map((newsletter) => (
            <Link href={newsletter.page} key={newsletter.month} className="bg-purple-500 text-center rounded-xl transition-all hover:scale-105 hover:bg-purple-800">
              <article key={newsletter.month} className="flex flex-col h-full items-center justify-center">
                <p className="text-white font-jost word-spacing-half text-lg p-2">{newsletter.month}</p>
              </article>
            </Link>
          ))
        } 
      </section>
      </div>
    </main>
  );
};

export default News;
