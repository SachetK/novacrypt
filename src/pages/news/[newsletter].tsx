import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { z } from "zod";

export const getStaticProps: GetStaticProps = ({ params }) => {
    const newsletter = z.enum(["october-2023"]).safeParse(params?.newsletter); 

    if (!newsletter.success) {
        return {
            redirect: {
                destination: "/news",
                permanent: false,
            },
        };
    }

    return {
        props: {
            newsletter: newsletter.data,
        },
    };
}

export const getStaticPaths = () => {
    return {
        paths: [
            { params: { newsletter: "june-2022" } },
            { params: { newsletter: "july-2022" } },
            { params: { newsletter: "september-2022" } },
            { params: { newsletter: "october-2023" } },
        ],
        fallback: "blocking",
    };
}

const News: NextPage<{ newsletter: string }> = ({ newsletter }) => {
    return (
        <main className="h-screen bg-[#0b0c1a]">
            <Head>
                <title>News | NovaCrypt</title>
                <meta name="description" content={`${newsletter} Newsletter for NovaCrypt`} />
            </Head>
            <section className="flex h-full flex-col items-center justify-center">
                <embed src={`/newsletter/${newsletter}.pdf`} type="application/pdf" width="100%" height="100%" />
            </section>
        </main>
    );
};

export default News;