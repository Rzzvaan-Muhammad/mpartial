import React from "react";
import { SEO, Layout } from "../components";
import Hero from "../components/home/hero";
import SecondSection from "../components/home/second-section";
import ThirdSection from "../components/home/third-section";
import FourthSection from "../components/home/fourth-section";
import FifthSection from "../components/home/fifth-section";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="" />
    <Hero />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
  </Layout>
);

export default IndexPage;
