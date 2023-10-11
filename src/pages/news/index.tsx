import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type Newsletter = {
  month: `${string} ${string}`;
  file: string;
};

const newsletters: Set<Newsletter> = new Set([
  {
    month: "April 2022",
    file: "news/april-2022",
  },
  {
    month: "May 2022",
    file: "news/may-2022",
  },
  {
    month: "June 2022",
    file: "news/june-2022",
  },
  {
    month: "July 2022",
    file: "news/july-2022",
  },
  {
    month: "July 2022",
    file: "news/july-2022",
  },
  {
    month: "September 2022",
    file: "news/september-2022",
  },
  {
    month: "October 2023",
    file: "news/october-2023",
  }
]);

const News: NextPage = () => {
  return (
    <main className="h-screen bg-[#0b0c1a]">
      <Head>
        <title>News | NovaCrypt</title>
        <meta name="description" content="Newsletter for NovaCrypt" />
      </Head>
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="font-jost text-xl text-white">Newsletters</h1>
        <h2 className="font-jost text-lg text-white">
          Stay up to date with all the latest news!
        </h2>
        <section className="m-2 grid h-4/5 grid-flow-row grid-cols-3 gap-4">
          {[...newsletters].map((newsletter) => (
            <Link
              href={newsletter.file}
              key={newsletter.month}
              className="rounded-xl bg-purple-500 text-center transition-all hover:scale-105 hover:bg-purple-800"
            >
              <article
                key={newsletter.month}
                className="flex h-full flex-col items-center justify-center"
              >
                <p className="word-spacing-half p-2 font-jost text-lg text-white">
                  {newsletter.month}
                </p>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
};

export default News;
