import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { useTheme } from 'styled-components';

import { Link } from '../Core/Link';

export const Menu = () => {
  const {
    allSitePage: { nodes },
  } = useStaticQuery(graphql`
    query {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `);

  function startsWith(str: string, searchStrings: Array<string>) {
    return searchStrings.reduce(
      (acc, searchString) => acc || str.startsWith(searchString),
      false
    );
  }

  function getPathsFromNodes(nodeArr: Array<any>): Array<string> {
    return nodeArr
      .map(({ path }: any) => path)
      .filter(
        (path: string) => !startsWith(path, ['/en', '/pt', '/404', '/dev'])
      );
  }

  return (
    <div>
      {getPathsFromNodes(nodes).map((path) => (
        <Link key={path} to={path}>
          path
        </Link>
      ))}
    </div>
  );
};
