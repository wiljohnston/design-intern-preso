/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import Layout from "~components/Layout";
import SEO from "~components/SEO";
import { CursorContext } from "~context/CursorContext";

import line from "~assets/images/line.png";
import Spaceship from "~components/Spaceship";
import Horizon from "~components/svg/Horizon";
import HillOne from "~components/svg/HillOne";
import HillThree from "~components/svg/HillThree";
import DataFall from "~components/DataFall";
import StaticWall from "~components/StaticWall";

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  const { cursorCenterDeltaX, cursorCenterDeltaY } = useContext(CursorContext);
  const cursorAnimate = magnitude => ({
    x: magnitude * cursorCenterDeltaX,
    y: magnitude * cursorCenterDeltaY
  });

  return (
    <>
      <SEO
        customTitle={frontmatter.title}
        customDescription={frontmatter.seoDescription}
        customKeywords={frontmatter.seoKeywords}
        path={location.pathname}
      />

      <Layout className="index-page w-full relative">
        <section className="min-h-screen grid border-b-2 border-solid py-8 f1">
          <h1 className="animation-appear-right grid-end-12 z-10 f1">
            {frontmatter.title}
          </h1>

          <motion.div
            className="absolute top-30pc right-0 w-1/5"
            animate={cursorAnimate(50)}
          >
            <Spaceship className="w-full relative" />
          </motion.div>
        </section>

        <section className="w-full flex items-top justify-center relative">
          <img
            src={line}
            alt="squiggly line"
            className="relative block -z-10"
          />

          <motion.div
            animate={cursorAnimate(10)}
            className="absolute -z-20 left-0 bottom-0 right-0"
          >
            <Horizon className="w-full" />
          </motion.div>

          <div
            className="w-full absolute -z-30 bottom-0"
            style={{ height: `26vw` }}
          >
            <DataFall className="w-full h-full" />
          </div>
        </section>

        <section
          className="w-full relative block"
          style={{ marginTop: `-8rem` }}
        >
          <HillOne className="w-full top-0 left-0 right-0" />

          <div
            className="w-full absolute -z-10 overflow-hidden"
            style={{ height: `50vw`, top: `10vw` }}
          >
            <StaticWall className="w-full h-full relative block" />
          </div>

          <HillThree className="w-full top-0 left-0 right-0" />
        </section>
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        seoDescription
        seoKeywords
      }
    }
  }
`;
