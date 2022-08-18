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
  layout,
  utils,
  description,
}) => {
  const { menu, footer } = layout;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Jose Mella" />
        <meta name="description" content={description} />

        <meta
          name="keywords"
          content={`desarrollo web, web, developer, frontend, backend, fullStack, portfolio`}
        />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image:secure_url"
          itemProp="image"
          content={`${origin}/Images/seo/porfolio-ShortHome-dark-en.png`}
        />
      </Head>
      <nav>
        <Navbar menu={menu} />
      </nav>
      <Sidemenu menu={menu} utils={utils} />
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
