import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

interface Project {
  name: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "Alyssa Molock",
    description: "Neurological Insights into GAD",
  },
  {
    name: "Anika Krishnan",
    description: "Blood Transfusions: Limitations & Solutions",
  },
  {
    name: "Audrey Ng",
    description:
      "A Comparative Study of Machine Learning Approaches for Enhancing Copyright Protection Strategies",
  },
  {
    name: "Mackenzie Lopes",
    description:
      "Exploring Innovative Approches for Advancing the 3 R's in Research: Moving Beyond Animal Testing through Biological, Biochemical, Ethical, and Multi-Cellular Strategies — Can We Eliminate the Need for Animal Testing?",
  },
  {
    name: "Nairiti Rai",
    description: "The Process of Decomposition",
  },
  {
    name: "Vanessa Lemus",
    description: "The Impact of Humans on Chickens",
  },
];

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
      <section className="mb-4 grid grid-cols-3 gap-2 text-white">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </main>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({
  project: { name, description },
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-jost text-2xl">{name}</h2>
        <a className="text-md text-center font-jost">{description}</a>
      </div>

      <Image
        src={`/summer-2023/poster/${
          name.split(" ")[0]?.toLocaleLowerCase() ?? ""
        }_poster.png`}
        className="rounded-xl"
        height={320}
        width={320}
        alt={name}
      />
      <a
        className="text-md text-center font-jost font-bold underline hover:opacity-10 transition-opacity"
        href={`/summer-2023/paper/${
          name.split(" ")[0]?.toLocaleLowerCase() ?? ""
        }_paper.pdf`}
        download
      >
        Link to Paper
      </a>
    </div>
  );
};

export default SummerProgram;
