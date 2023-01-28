import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Smart Ambulace System</title>
        <meta name="description" content="Smart ambulace system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center font-semibold text-lg ">Hello World!</h1>
      </main>
    </div>
  );
};

export default Home;
