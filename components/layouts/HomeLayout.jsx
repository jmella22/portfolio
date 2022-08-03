//React
import React from "react";

//Next
import Head from "next/head";

//Other library

//Material UI

//Personal
import { Footer, Navbar, Sidemenu } from "../ui";

export const HomeLayout = ({
  children,
  title = "Jose Mella | Developer Web",
  pageDescription = "Jose Mella | Developer Web",
  imageFullUrl,
  menu,
  footer,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:iamge" content={imageFullUrl} />}
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
