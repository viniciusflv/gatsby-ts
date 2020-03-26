import React, { Fragment, memo } from 'react';

import { graphql, useStaticQuery } from 'gatsby';

export default memo(() => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `);

  const data = edges.reduce((acc: any, { node: { frontmatter } }: any) => {
    return [...acc, frontmatter];
  },                        []);

  return (
    <div>
      <h1>Blog</h1>
      <ol>
        {data.map(({ title, date }: any) => (
          <li key={title}>
            <h2>{title}</h2>
            <p>{date}</p>
          </li>
        ))}
      </ol>
    </div>
  );
});
