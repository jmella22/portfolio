import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jose Mella | Developer Full Stack</title>
        <link rel="icon" href="/favicon.ico" />
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        {/* Inicio de meta tags de licencia - Cambiar el contenido de los mismos viola el contenido de los terminos de licencia */}
        <meta content="jmella22" name="author" />
        <meta content="Jose Mella" name="copyright" />
        {/* Fin de meta tags de licencia */}
      </Head>
      <Navbar />
      <Main />
      <About />
    </div>
  );
}
