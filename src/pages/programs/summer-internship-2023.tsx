import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Programs: NextPage = () => {
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
        Summer Internship
      </h1>
      <section className="m-2 flex h-full w-2/5 flex-col items-center justify-center space-y-3 text-white">
        <section className="flex flex-row items-center gap-4">
          <Image
            src="/support/nasa.png"
            alt="Summer Internship 2023"
            width={200}
            height={100}
          />
          <p>
            At the beginning of the cycle, each chapter will receive a
            presentation in which they are given background information about
            the topic and more details about the field. They will also be given
            possible ideas about the direction the topic could head in.
          </p>
        </section>
        <section className="flex flex-row items-center justify-center gap-4">
          <p>
            The following week students will have an opportunity to listen to an
            expert give their insight about the topic. Students will be able to
            participate and ask a variety of questions to the guest speaker
            about the current research in the field as well as their own
            possible insight into the topic.
          </p>
          <Image
            src="/support/nasa.png"
            alt="Summer Internship 2023"
            width={200}
            height={100}
          />
        </section>
        <section className="flex flex-row items-center justify-center gap-4">
          <Image
            src="/support/nasa.png"
            alt="Summer Internship 2023"
            width={200}
            height={100}
          />

          <p>
            Week three will focus on an activity based around the topic, which
            the NovaCrypt team will provide to advisors. The next two weeks of
            club meetings are dedicated towards project workdays. Although the
            teams will be able to begin working before these two club meetings,
            the last two weeks of the month will be reserved towards the team
            finalizing their solutions for submission to NovaCrypt.
          </p>
        </section>
        <section className="flex flex-row items-center justify-center gap-4">
          <p>
            Each month, the winning teams as well as the standouts will receive
            recognition in our newsletter. Specially recognized members may have
            opportunities at internships and other research opportunities in the
            future. Winning teams will receive scholarship money from our
            sponsors.
          </p>
          <Image
            src="/support/nasa.png"
            alt="Summer Internship 2023"
            width={200}
            height={100}
          />
        </section>
      </section>
    </main>
  );
};

export default Programs;
