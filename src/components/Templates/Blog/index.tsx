import React, { memo, useEffect, useState } from 'react';

import { graphql } from 'gatsby';
import { changeLocale, useIntl } from 'gatsby-plugin-intl';

import { Flex } from '../../Core/Flex';
import { Text } from '../../Core/Text';
import { TextTypes } from '../../Core/Text/interface';
import { Markdown } from '../../Markdown';
import { SEO } from '../../SEO';

export const query = graphql`
  query($slug: String!, $language: String!) {
    markdownRemark(fields: { slug: { eq: $slug }, language: { eq: $language } }) {
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
    const [locale, setLocale] = useState(useIntl().locale);

    useEffect(() => {
      changeLocale(locale);
    },        [locale]);

    function toggleLocale() {
      setLocale(locale === 'pt' ? 'en' : 'pt');
    }

    return (
      <Flex
        direction='column'
        grow='2'
        maxWidth='1200px'
        width='100%'
        margin='auto'
      >
        <SEO title={title} />
        <button onClick={toggleLocale}>Toggle Locale</button>
        <Text text={title} type={TextTypes.H1} />
        <Text text={date} type={TextTypes.P} />
        <Markdown html={html} />
      </Flex>
    );
  }
);
