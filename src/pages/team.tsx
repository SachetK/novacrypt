import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import team from "public/staff.json";

const TeamPage: NextPage = () => {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0b0c1a]">
      <Head>
        <title>NovaCrypt | Team</title>
        <meta name="description" content="Team page for NovaCrypt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container flex flex-col items-center justify-center gap-12 px-4 py-16 font-jost">
        <h1 className="word-spacing-half text-center text-4xl font-bold text-white">
          Meet our Team!
        </h1>
        <article className="flex w-1/2 flex-col gap-16 text-white">
          {team.staff.map((person, idx) => (
            <Person
              key={idx}
              image={person.image}
              name={person.name}
              description={person.description}
            />
          ))}
        </article>
      </section>
    </main>
  );
};

const Person: React.FC<{
  image: string;
  name: string;
  description: string;
}> = ({ image: _image, name, description }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <Image
        src={"/logo.png"}
        alt={name}
        height={100}
        width={100}
        className="h-32 w-32 rounded-full"
      />
      <div className="flex flex-col justify-center">
        <h3 className="word-spacing-half text-2xl font-bold">{name}</h3>
        <p className="word-spacing-half text-lg">{description}</p>
      </div>
    </div>
  );
};

export default TeamPage;
