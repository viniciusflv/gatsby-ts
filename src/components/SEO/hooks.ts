import { graphql, useStaticQuery } from 'gatsby';

import { useLang } from '../Lang/context';

export function useHooks() {
  const { messages } = useLang();
  const {
    site: { siteMetadata: data },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            siteName
            title
            titles
            titleTemplate
            description
            keywords
            author
            locale
            image {
              path
              type
              size
            }
          }
        }
      }
    `
  );

  return { ...data, ...messages };
}
