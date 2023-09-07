import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Programs: NextPage = () => {
  return (
    <main className="flex h-full min-h-screen flex-col items-center bg-[#0b0c1a]">
      <Head>
        <title>NovaCrypt | Programs</title>
        <meta name="description" content="Programs page for NovaCrypt" />
      </Head>

      <section className="m-2 flex w-full flex-col items-center justify-center space-y-3 p-2 text-white sm:w-3/5 lg:w-2/5">
        <header className="m-2 w-full">
          <h1 className="text-center font-jost text-4xl font-bold text-white">
            Programs
          </h1>
          <h2 className="word-spacing-half text-center font-jost text-2xl text-white">
            Click to see the amazing projects!
          </h2>
        </header>
        <Program
          name="Summer Internship 2023"
          description="In the summer of 2023, Novacrypt and the National Institute of Technology, Sikkim, partnered together to further the goal of student enrichment in project development. Over six weeks students were guided to pursue and complete self-selected projects that interest them. We are very proud of our students!"
          // url="/programs/summer-internship-2023"
          url="/programs/chapter-program"
          projects

        />
        <Program
          name="Chapter Program"
          description="Coming into fall 2023, students could submit a project idea they wished to pursue and were matched up with a mentor accordingly. Each student will receive personalized guidance to complete their respective projects and goals. We are excited to see what students will be able to build by the end of the summer!"
          url="/programs"
          
        />
      </section>
    </main>
  );
};

const Program: React.FC<{ name: string; description: string; url: string, projects?: boolean }> = ({
  name,
  description,
  url,
  projects = false,
}) => {
  return (
    <Link
      className="flex flex-row items-center justify-center space-y-3 rounded-xl bg-purple-700/30 px-4 py-3 text-center text-white transition-colors duration-200 hover:bg-white/40"
      href={url}
    >
      <h2 className="w-full p-2 text-center font-jost text-3xl">{name}</h2>
      <div className="flex flex-col">
        <p className="text-md w-full p-2 text-center font-jost">
          {description}
        </p>
        {projects && (
          <p className="text-lg font-bold w-full p-2 text-center font-jost">
            Click to see the amazing projects!
          </p>
        )}
      </div>
    </Link>
  );
};

export default Programs;
