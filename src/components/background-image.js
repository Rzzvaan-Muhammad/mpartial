import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
// import styled from "styled-components"
import backgroundStyles from "./background-image-module.css"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ src, children, ...props }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = useMemo(
    () => data.allFile.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  )

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData && imageData.node.childImageSharp.fluid}
      backgroundColor={`#040e18`}
      style={{
        width: "100%",
        height: "100%",
        backgroundPosition: "right top",
        backgroundSize: "100% 100%",
        backgroundColor: "#20325a",
      }}
      {...props}
      key="testing-1"
      className={`hero-bg-img`}
    >
      {children}
    </BackgroundImage>
  )
}

export default BackgroundSection
