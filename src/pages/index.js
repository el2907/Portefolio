import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.svg";
import background from "../../public/background.svg";
const Home = () => {
  return (
    <div>
      <Head>
        <title>Portefolio - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href={logo}></link>
      </Head>

      <main>
        <div>
          <Image src={background} alt="background" className="w-full" />
          <p>hehehe</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
