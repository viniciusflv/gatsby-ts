import React from 'react';

import {
  ReplaceComponentRendererArgs,
  WrapPageElementBrowserArgs,
  WrapPageElementNodeArgs,
  WrapRootElementBrowserArgs,
  WrapRootElementNodeArgs,
} from 'gatsby';
import { IntlConfig } from 'gatsby-plugin-intl';

import { App } from './src/components/App';
import { Layout } from './src/components/Layout';

export type LoadPageSync = (
  pathname: typeof window.location.pathname
) => {
  json: Omit<ReplaceComponentRendererArgs['props'], 'pageContext'> & {
    pageContext: { intl: IntlConfig & { defaultLanguage: string } };
  };
};

export type RootElementArgs = (
  | WrapRootElementBrowserArgs
  | WrapRootElementNodeArgs
) & { loadPageSync: LoadPageSync };

export type PageElementArgs = (
  | WrapPageElementBrowserArgs
  | WrapPageElementNodeArgs
) & ReplaceComponentRendererArgs;

export const wrapRootElement = (props: RootElementArgs) => {
  return <App {...props}>{props.element}</App>;
};

export const wrapPageElement = ({ element, props }: PageElementArgs) => {
  return props.path ? <Layout {...props}>{element}</Layout> : element;
};
