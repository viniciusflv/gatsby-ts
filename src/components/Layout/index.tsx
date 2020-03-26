import React, { FC, memo } from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';

import { WrapperStyle } from './style';

import { SEO } from '../SEO';

export const Layout: FC<any> = memo(({ children, path }) => {
  const {
    site: { siteMetadata: { titles } }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          titles
        }
      }
    }
  `);
  return (
    <WrapperStyle>
      <SEO path={path} />
      <nav style={{ padding: 20 }}>
        {titles.map((t: any) => {
          const [href, title] = t;
          return (
            <Link key={href} to={href}>
              {title ?? href}
              <br />
            </Link>
          );
        })}
      </nav>
      {children}
    </WrapperStyle>
  );
});
