//React
import React from "react";

//Next

//Other library

//Material UI

//Personal
import { HomeLayout } from "../components/layouts/HomeLayout";
import Main from "../components/Main";
import About from "../components/About";
import { Hero } from "../components/sections";

const prueba = ({ title, menu, hero }) => {
  return (
    <HomeLayout title={title} menu={menu}>
      <Hero hero={hero} />
      {/* <Main /> */}
      {/* <About /> */}
    </HomeLayout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async ({ locale }) => {
  const response = await import(`../languages/${locale}.json`); // your fetch function here

  return {
    props: {
      title: response.home.titlePage,
      menu: response.menu,
      hero: response.hero,
    },
  };
};

export default prueba;
