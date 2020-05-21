import React, { FC, memo } from 'react';
import { Helmet } from 'react-helmet';

import { join } from 'path';

import { useHooks } from './hooks';

export const SEO: FC<{
  title?: string;
  description?: string;
  path?: string;
}> = memo(({ title, description, path }) => {
  const data = useHooks();
  const pageTitle = title ?? new Map(data?.titles).get(path) ?? data?.title;
  return (
    <Helmet
      defaultTitle={data?.title}
      titleTemplate={data?.titleTemplate}
      defer={false}
    >
      <title>{pageTitle}</title>
      <meta content={pageTitle} property='og:title' />
      <meta content={description ?? data?.description} name='description' />
      <meta content={description ?? data?.description} itemProp='description' />
      <meta
        content={description ?? data?.description}
        property='og:description'
      />
      <meta content={data?.keywords} name='keywords' />
      <meta content={data?.author} name='author' />
      <meta content={data?.siteName} itemProp='name' />
      <meta content={data?.siteName} property='og:site_name' />
      <meta content={data?.siteUrl} property='og:url' />
      <meta content={join(data?.siteUrl, data?.image?.path)} itemProp='image' />
      <meta
        content={join(data?.siteUrl, data?.image?.path)}
        property='og:image'
      />
      <meta content={data?.image?.type} property='og:image:type' />
      <meta content={data?.image?.size} property='og:image:width' />
      <meta content={data?.image?.size} property='og:image:height' />
      <meta content={data?.locale} property='og:locale' />
      <meta content='website' property='og:type' />
      <meta content='index, follow' name='robots' />
    </Helmet>
  );
});
