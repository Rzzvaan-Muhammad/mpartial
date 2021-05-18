import React from "react";

import { SEO, Layout } from "../components";

import Hero from "../components/home/hero";
import SecondSection from "../components/home/second-section";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="" />
    <Hero />
    <SecondSection />
  </Layout>
);

export default IndexPage;
