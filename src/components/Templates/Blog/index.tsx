import React, { memo } from 'react';

import { graphql } from 'gatsby';

import { Flex } from '../../Core/Flex';
import { Text } from '../../Core/Text';
import { TextTypes } from '../../Core/Text/interface';
import { Markdown } from '../../Markdown';
import { SEO } from '../../SEO';

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
      <Flex direction='column' grow='2'>
        <SEO title={title} />
        <Text text={title} type={TextTypes.H1} />
        <Text text={date} type={TextTypes.P} />
        <Markdown html={html} />
      </Flex>
    );
  }
);