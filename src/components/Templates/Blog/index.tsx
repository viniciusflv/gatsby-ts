import React, { memo } from 'react';

import { graphql } from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

export default memo(
  ({
    data: {
      markdownRemark: {
        frontmatter: { title, date },
        html,
      },
    },
  }: any) => {
    return (
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
      </div>
    );
  }
);
