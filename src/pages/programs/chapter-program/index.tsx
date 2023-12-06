import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Project =
  | {
      slideshow: true;
      name: string;
      description: string;
      images: {
        src: string;
      }[];
    }
  | {
      slideshow: false;
      name: string;
      description: string;
      video: string;
      type: "video/webm" | "video/mp4";
    };

const projects: Project[] = [
  {
    slideshow: false,
    name: "Priyanka's Website",
    description:
      "This website is created by Priyanka Sharma. The project involves creating a website to efficiently collect and categorize issues students and faculty face, such as mess, water, and electricity problems, while directly notifying executives. This bridges the gap between service providers and the campus community, serving as a centralized platform for issue reporting and historical incident data.",
    video: "/projects/Priyankas_Website.webm",
    type: "video/webm",
  },
  {
    slideshow: false,
    name: "Hetshree's App",
    description:
      "This is an app created by Hetshree Rathod. This app aims to analyze accurately and assess the emotional well-being of a person or a student. He plans to work further on this project to make it usable for anyone in any field. We are excited to see how he will progress!",
    video: "/projects/Hetshree_Rathod.mp4",
    type: "video/mp4",
  },
  {
    slideshow: true,
    name: "Sauyma's App",
    description:
      "Saumya Ranjan was able to create a functioning social media app! She met her goal of improving existing social media UI and software and created her own named SocialBook. Here you can display any and all information about yourself and meet others with similar interests creating a safe community to talk about your interests.",
    images: [
      { src: "/projects/saumya/profile1.png" },
      { src: "/projects/saumya/profile2.png" },
      { src: "/projects/saumya/Registration.png" },
      { src: "/projects/saumya/Socialbook.png" },
      { src: "/projects/saumya/user_login.png" },
    ],
  },
];

const ProjectCard: React.FC<{
  project: Project | Record<string, never>;
  onEndAction: () => void;
}> = ({ project, onEndAction }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      {project.slideshow ? (
        <div className="flex flex-row items-center justify-center space-x-3">
          <Slideshow
            images={project.images}
            name={project.name}
            endAction={onEndAction}
          />
        </div>
      ) : (
        <section className="h-1/2 w-1/2">
          <video
            width="80%"
            height="80%"
            controls
            key={project.video}
            autoPlay
            onEnded={onEndAction}
          >
            <source src={project.video} type={project.type} />
            Your browser does not support the video tag.
          </video>
        </section>
      )}
      <p className="w-full p-2">{project.description}</p>
    </div>
  );
};

const ChapterProgram: NextPage = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const toggleNextProject = useCallback(
    () =>
      setCurrentProject(
        (currentProject - 1 + projects.length) % projects.length
      ),
    [currentProject]
  );

  const togglePreviousProject = useCallback(
    () =>
      setCurrentProject(
        (currentProject - 1 + projects.length) % projects.length
      ),
    [currentProject]
  );

  useEffect(() => {
    const togglePages = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        toggleNextProject();
      } else if (event.key === "ArrowLeft") {
        togglePreviousProject();
      }
    };

    window.addEventListener("keydown", togglePages);

    return () => window.removeEventListener("keydown", togglePages);
  }, [toggleNextProject, togglePreviousProject]);

  return (
    <main className="h-full min-h-screen bg-[#0b0c1a] text-center text-white">
      <Head>
        <title>NovaCrypt | Chapter Program</title>
        <meta name="description" content="Chapter Program page for NovaCrypt" />
      </Head>
      <section className="flex h-screen flex-col items-center justify-center space-y-3 p-2 text-white">
        <div className="flex h-full w-1/2 flex-row items-center justify-center ">
          <ProjectCard
            key={projects[currentProject]?.name ?? ""}
            project={projects[currentProject] ?? {}}
            onEndAction={toggleNextProject}
          />
        </div>
      </section>
    </main>
  );
};

const Slideshow: React.FC<{
  images: { src: string }[];
  name: string;
  endAction: () => void;
}> = ({ images, name, endAction }) => {
  //Create a slideshow for the images provided and have the user be able to click through them, and they switch every second

  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying] = useState(true);

  const nextAction = setTimeout(endAction, 20000);

  const timer = setTimeout(() => {
    setCurrentImage((currentImage + 1) % images.length);
  }, 2000);

  useEffect(() => {
    if (!isPlaying) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [isPlaying, timer]);

  useEffect(() => {
    return () => clearTimeout(nextAction);
  }, [nextAction]);
  return (
    <div className="flex flex-row items-center justify-center space-x-3">
      <Image
        className="w-full"
        src={images[currentImage]?.src ?? ""}
        alt={name}
        key={images[currentImage]?.src ?? ""}
        width={700}
        height={700}
      />
    </div>
  );
};

export default ChapterProgram;
