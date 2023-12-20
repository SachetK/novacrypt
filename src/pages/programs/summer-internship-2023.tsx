import type { NextPage } from "next";
import Head from "next/head";
interface Project {
  name?: string;
  description?: string;
}

const projects : Project[] = [{}, {}, {}, {}, {}];

const SummerProgram: NextPage = () => {
  return (
    <main className="flex h-full min-h-screen flex-col items-center bg-[#0b0c1a]">
      <Head>
        <title>NovaCrypt | Summer Internship 2023</title>
        <meta
          name="description"
          content="Summer Internship 2023 page for NovaCrypt"
        />
      </Head>
      <h1 className="word-spacing-half w-full p-8 text-center font-jost text-5xl text-white">
        Showcase
      </h1>
      <section className="grid grid-cols-4 gap-2 mb-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} />
        ))}
      </section>
    </main>
  );
};

const ProjectCard: React.FC<Project> = ({ name, description }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-80 w-80 rounded-xl bg-gray-200"></div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-jost text-2xl">{name}</h2>
        <p className="font-jost text-lg">{description}</p>
      </div>
    </div>
  );
};

export default SummerProgram;
