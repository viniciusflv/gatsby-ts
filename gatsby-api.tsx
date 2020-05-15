import React from 'react';

import {
  WrapPageElementBrowserArgs,
  WrapPageElementNodeArgs,
  WrapRootElementBrowserArgs,
  WrapRootElementNodeArgs,
} from 'gatsby';

import { App } from './src/components/App';
import { Layout } from './src/components/Layout';

export const wrapRootElement = ({
  element,
  ...props
}: WrapRootElementBrowserArgs | WrapRootElementNodeArgs) => {
  return <App {...props}>{element}</App>;
};

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs | WrapPageElementNodeArgs) => {
  // @ts-ignore
  return props.path ? <Layout {...props}>{element}</Layout> : element;
};
