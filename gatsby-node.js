// Only commonjs
const { basename, resolve } = require('path');
const webpack = require('webpack');
const pluginOptions = {
  path: `${__dirname}/src/assets/lang`,
  languages: [`en`, `pt`],
  defaultLanguage: `pt`,
  redirect: true,
};

function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  const {
    redirectComponent = null,
    languages,
    defaultLanguage,
  } = pluginOptions;
  if (!languages.includes(defaultLanguage)) {
    languages.push(defaultLanguage);
  }
  const regex = new RegExp(languages.map(l => l.split('-')[0]).join('|'));
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        GATSBY_INTL_REDIRECT_COMPONENT_PATH: JSON.stringify(redirectComponent),
      }),
      new webpack.ContextReplacementPlugin(
        /@formatjs[/\\]intl-relativetimeformat[/\\]dist[/\\]locale-data$/,
        regex
      ),
      new webpack.ContextReplacementPlugin(
        /@formatjs[/\\]intl-pluralrules[/\\]dist[/\\]locale-data$/,
        regex
      ),
    ],
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  //Exit if the page has already been processed.
  if (typeof page.context.intl === 'object') {
    return;
  }
  const { createPage, deletePage } = actions;
  const {
    path = '.',
    languages = ['en'],
    defaultLanguage = 'en',
    redirect = false,
  } = pluginOptions;

  const getMessages = (path, language) => {
    try {
      // TODO load yaml here
      const messages = require(`${path}/${language}.json`);

      return flattenMessages(messages);
    } catch (error) {
      if (error.code === 'MODULE_NOT_FOUND') {
        process.env.NODE_ENV !== 'test' &&
          console.error(
            `[gatsby-plugin-intl] couldn't find file "${path}/${language}.json"`
          );
      }

      throw error;
    }
  };

  const generatePage = (routed, language) => {
    const messages = getMessages(path, language);
    const newPath = routed ? `/${language}${page.path}` : page.path;
    return {
      ...page,
      path: newPath,
      context: {
        ...page.context,
        language,
        intl: {
          language,
          languages,
          messages,
          routed,
          originalPath: page.path,
          redirect,
          defaultLanguage,
        },
      },
    };
  };

  const newPage = generatePage(false, defaultLanguage);
  deletePage(page);
  createPage(newPage);

  languages.forEach(language => {
    const localePage = generatePage(true, language);
    const regexp = new RegExp('/404/?$');
    if (regexp.test(localePage.path)) {
      localePage.matchPath = `/${language}/*`;
    }
    createPage(localePage);
  });
};

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
        path: `/blog/${slug}/`,
        component: blogPostTemplate,
        context: { slug, language },
      });
    }
  );
};
