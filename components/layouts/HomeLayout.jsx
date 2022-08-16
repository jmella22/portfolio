//React
import React from "react";

//Next
import Head from "next/head";

//Other library

//Material UI

//Personal
import { Footer, Navbar, Sidemenu } from "../ui";

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const HomeLayout = ({
  children,
  title = "Jose Mella | Developer Web",
  pageDescription = "Porfolio Profesional de Jose Mella Desarrollador Web Full-Stack",
  imageFullUrl,
  menu,
  footer,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageDescription} />
        {imageFullUrl && (
          <meta
            property="og:image"
            content={`${origin}/Images/projects/portfolio-ShortHome-dark-en.png`}
          />
        )}
      </Head>
      <nav>
        <Navbar menu={menu} />
      </nav>
      <Sidemenu menu={menu} />
      <main
        style={{
          margin: "auto",
          maxWidth: "1440px",
          padding: "0px 30px",
        }}
      >
        {children}
      </main>
      <footer>
        <Footer footer={footer} />
      </footer>
    </>
  );
};
