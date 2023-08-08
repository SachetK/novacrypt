import type { NextPage } from "next";
import Head from "next/head";
import { z } from "zod";
import { LoadingSpinner } from "~/components/loading";
import { api } from "~/utils/api";

const Join: NextPage = () => {
  const { mutateAsync: addToList, isLoading, isError, isSuccess, isIdle } = api.sheet.append.useMutation();

  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <Head>
        <title>Join | NovaCrypt</title>
        <meta name="description" content="Join NovaCrypt" />
      </Head>
      <section className="flex flex-row items-stretch justify-center font-jost">
        <article className="grid grid-flow-col grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold text-white sm:text-[5rem]">
              Join
            </h1>
            <h2 className="text-center text-xl font-normal text-white sm:text-2xl">
              Interested in joining NovaCrypt?
              <br />
              Fill out the form to the right and we&apos;ll get back to you as soon as
              possible!
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 word-spacing-half">
            {isLoading && <LoadingSpinner size={64}/>}
            {isError && <p className="text-white text-center text-3xl">Error! Please reload and try again</p>}
            {isSuccess && <p className="text-white text-center text-3xl">Success!</p>}
            {isIdle && <form
              className="grid grid-cols-1 place-items-center gap-4"
              onSubmit={(e) => {
                e.preventDefault();

                const formValues = Object.fromEntries(
                  new FormData(e.currentTarget).entries()
                );

                const values = z
                  .object({
                    name: z.string(),
                    email: z.string().email(),
                    school: z.string(),
                    grade: z.string(),
                    reason: z.string(),
                  })
                  .safeParse(formValues);

                if (!values.success) {
                  console.error(values.error);
                  return;
                }

                void addToList(values.data);
              }}
            >
              <label className="flex flex-col items-center text-white">
                Name
                <input
                  className="rounded-xl px-4 py-2 text-lg text-black word-spacing-half transition-colors duration-200 ease-in-out hover:bg-white/20 hover:text-white"
                  type="text"
                  name="name"
                />
              </label>

              <label className="flex flex-col items-center text-white">
                Email
                <input
                  className="rounded-xl px-4 py-2 text-lg text-black word-spacing-half transition-colors duration-200 ease-in-out hover:bg-white/20 hover:text-white"
                  type="text"
                  name="email"
                />
              </label>

              <label className="flex flex-col items-center text-white">
                School
                <input
                  className="rounded-xl px-4 py-2 text-lg text-black word-spacing-half transition-colors duration-200 ease-in-out hover:bg-white/20 hover:text-white"
                  type="text"
                  name="school"
                />
              </label>

              <label className="flex flex-col items-center text-white">
                Grade
                <input
                  className="rounded-xl px-4 py-2 text-lg text-black word-spacing-half transition-colors duration-200 ease-in-out hover:bg-white/20 hover:text-white"
                  type="text"
                  name="grade"
                />
              </label>

              <label className="flex flex-col items-center text-white">
                Why do you want to join NovaCrypt?
                <textarea
                  className="rounded-xl px-4 py-2 text-lg text-black word-spacing-half transition-colors duration-200 ease-in-out hover:bg-white/20 hover:text-white"
                  name="reason"
                />
              </label>
              <button
                className="rounded-xl px-4 py-2 text-lg text-white transition-colors duration-200 ease-in-out hover:bg-white/20"
                type="submit"
              >
                Submit
              </button>
            </form>}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Join;
