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
}: WrapRootElementBrowserArgs | WrapRootElementNodeArgs) => {
  return <App>{element}</App>;
};

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs | WrapPageElementNodeArgs) => {
  // @ts-ignore
  return props.path ? <Layout {...props}>{element}</Layout> : element;
};
