import Head from "next/head";

import { Hero, AboutMe, TimeLine, Projects } from "../src/componets";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Dantas | Meu Site</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Desenvolvedor Front-end, Front-end developer portfolio"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Front-end, Next, React, Portfolio"
        />
        <meta name="author" content="Gabriel Dantas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <Hero />
        <AboutMe />
        <TimeLine />
        <Projects />
      </main>
    </>
  );
}
