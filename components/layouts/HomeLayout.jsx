//React
import React from "react";

//Next
import Head from "next/head";
import { Navbar, Sidemenu } from "../ui";

//Other library

//Material UI

//Personal

export const HomeLayout = ({
  children,
  title = "ASDF",
  pageDescription = "ASDF",
  imageFullUrl,
  menu,
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
        style={{ margin: "80px auto", maxWidth: "1440px", padding: "0px 30px" }}
      >
        {children}
      </main>
      <footer>{/* TODO: custon Footer */}</footer>
    </>
  );
};
