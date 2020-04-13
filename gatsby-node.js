// Only commonjs
const { basename, resolve } = require('path');

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = basename(node.fileAbsolutePath, '.md');
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const blogPostTemplate = resolve(`src/components/Templates/Blog/index.tsx`);
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = await graphql(
    `
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  edges.forEach(
    ({
      node: {
        fields: { slug },
      },
    }) => {
      createPage({
        path: `/blog/${slug}/`,
        component: blogPostTemplate,
        context: { slug },
      });
    }
  );
};
