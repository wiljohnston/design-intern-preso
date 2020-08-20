/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { graphql } from "gatsby";
import Layout from "~components/Layout";
import SEO from "~components/SEO";
import { CursorContext } from "~context/CursorContext";

import Line from "~components/svg/Line";
import Spaceship from "~components/Spaceship";
import Horizon from "~components/svg/Horizon";
import HillOne from "~components/svg/HillOne";
import HillThree from "~components/svg/HillThree";
import stillStatic from "~assets/images/static.png";
import DataFall from "~components/DataFall";
import StaticWall from "~components/StaticWall";
import CactusOne from "~components/svg/CactusOne";
import CactusTwo from "~components/svg/CactusTwo";
import Bush from "~components/svg/Bush";
import Ball from "~components/svg/Ball";
import LastHill from "~components/svg/LastHill";
import Smoke from "~components/svg/Smoke";
import SteveDidYouFillUp from "~components/svg/SteveDidYouFillUp";
import FuckingHellNotAgain from "~components/svg/FuckingHellNotAgain";
import WhereAreWe from "~components/svg/WhereAreWe";

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  const { cursorCenterDeltaX, cursorCenterDeltaY } = useContext(CursorContext);
  const cursorAnimate = magnitude => ({
    x: magnitude * cursorCenterDeltaX,
    y: magnitude * cursorCenterDeltaY
  });

  const plantProperties = {
    cactusOne: { balance: [`grid-start-11 top-10vw`], scale: [`grid-end-2`] },
    cactusTwo: { balance: [`grid-start-6`], scale: [`grid-end-1`] },
    ball: { balance: [`grid-start-2 top-20vw`], scale: [`grid-end-1`] },
    bush: { balance: [`grid-start-3 top-30vw`], scale: [`grid-end-5`] }
  };

  const [balanceIndex, setBalanceIndex] = useState(0);
  const [scaleIndex, setScaleIndex] = useState(0);

  const { cactusOne, cactusTwo, bush, ball } = plantProperties;

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
          <Line className="relative block -z-10" />

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
            {/* <DataFall className="w-full h-full" /> */}
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

        <section
          className="w-full grid"
          style={{ height: `75vw`, marginTop: `-25vw` }}
        >
          <Ball
            className={`absolute overflow-visible ${ball.balance[balanceIndex]} ${ball.scale[scaleIndex]}`}
          />

          <Bush
            className={`absolute overflow-visible ${bush.balance[balanceIndex]} ${bush.scale[scaleIndex]}`}
          />

          <CactusTwo
            className={`absolute overflow-visible ${cactusTwo.balance[balanceIndex]} ${cactusTwo.scale[scaleIndex]}`}
          />

          <CactusOne
            className={`absolute overflow-visible ${cactusOne.balance[balanceIndex]} ${cactusOne.scale[scaleIndex]}`}
          />
        </section>

        <section className="w-full relative">
          <LastHill className="w-full relative -z-20" />

          <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0">
            <div
              className="w-1/3 relative"
              style={{ marginTop: `20vw`, marginLeft: `calc(16.66% + 1rem)` }}
            >
              <Smoke
                className="w-1/2 absolute overflow-visible"
                style={{ bottom: `40%`, left: `-15%` }}
              />

              <Spaceship maskColour="#F5F5F5" img={stillStatic} />

              <WhereAreWe
                className="h-3 absolute"
                style={{ right: `-15%`, top: `40%` }}
              />

              <SteveDidYouFillUp
                className="h-4 absolute"
                style={{ right: `-65%`, top: `60%` }}
              />

              <FuckingHellNotAgain
                className="h-5 absolute"
                style={{ right: `-38%`, top: `82%` }}
              />
            </div>
          </div>
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
