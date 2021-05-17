import React from "react";

import { SEO, Layout } from "../components";

import Hero from "../components/home/hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="" />
    <Hero />
  </Layout>
);

export default IndexPage;
