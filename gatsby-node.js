// Only commonjs
const { basename, resolve } = require('path');

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const [slug, language] = basename(node.fileAbsolutePath, '.md').split('.');
    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'language', value: language });
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
                language
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
        fields: { slug, language },
      },
    }) => {
      createPage({
        path: `/${slug}/`,
        component: blogPostTemplate,
        context: { slug, language },
      });
    }
  );
};
