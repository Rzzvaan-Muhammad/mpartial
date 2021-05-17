// exports.onCreateNode = ({ node }) => {
//   if (node.internal.type === `allFiles`) {
//   }
// }

// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
// const path = require(`path`)
// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`src/pages/categories.js`)
//   const result = await graphql(`
//     {
//       mainForms: allMarkdownRemark(
//         filter: { fileAbsolutePath: { glob: "**/src/markdown-pages/*.md" } }
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//       subForms: allMarkdownRemark(
//         filter: { fileAbsolutePath: { glob: "**/src/sub-markdown-pages/*.md" } }
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `)
//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }
//   result.data.mainForms.edges.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.path,
//       component: blogPostTemplate,
//       context: {
//         mainArticle: true,
//       }, // additional data can be passed via context
//     })
//   })
//   result.data.subForms.edges.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.path,
//       component: blogPostTemplate,
//       context: {
//         subArticle: true,
//       }, // additional data can be passed via context
//     })
//   })
//   //sub-markdown-files
// }

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html" || stage === "develop-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /bad-module/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }
