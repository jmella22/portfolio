//React
import React from "react";

//Next

//Other library

//Material UI

//Personal
import { HomeLayout } from "../components/layouts/HomeLayout";
import { Contact, Hero, Myself, Projects } from "../components/sections";

const HomePage = ({ layout, page, utils }) => {
  const { hero, projects, about, contact } = page.body;
  return (
    <HomeLayout
      title={page.title}
      description={page.description}
      layout={layout}
      utils={utils}
    >
      <Hero hero={hero} utils={utils} />
      <Projects projects={projects} utils={utils} />
      <Myself myself={about} utils={utils} />
      <Contact contact={contact} utils={utils} />
    </HomeLayout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async ({ locale }) => {
  const { layouts, pages, utils } = await import(`../languages/${locale}.json`); // your fetch function here

  return {
    props: {
      layout: layouts.homeLayout,
      page: pages.home,
      utils,
    },
  };
};

export default HomePage;
