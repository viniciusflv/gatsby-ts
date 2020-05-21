import React, { Fragment, memo } from 'react';

import { graphql } from 'gatsby';

import { Flex } from '../../Core/Flex';
import { Text } from '../../Core/Text';
import { TextTypes } from '../../Core/Text/interface';
import { Markdown } from '../../Markdown';
import { SEO } from '../../SEO';

export const query = graphql`
  query($slug: String!, $language: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, language: { eq: $language } }
    ) {
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
      <Fragment>
        <SEO title={title} />
        <Flex
          direction='column'
          grow='2'
          maxWidth='1200px'
          width='100%'
          margin='auto'
        >
          <Text text={title} type={TextTypes.H1} />
          <Text text={date} type={TextTypes.P} />
          <Markdown html={html} />
        </Flex>
      </Fragment>
    );
  }
);
