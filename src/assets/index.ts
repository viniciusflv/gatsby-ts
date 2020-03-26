import vectors from './vectors.json';

function handleChildren(children: Array<any>): any {
  return children.map(({ name, attributes }) => {
    if (name === 'path') return attributes;

    try {
      return handleChildren(children);
    } catch (error) {
      return {};
    }
  });
}

interface SvgAsset {
  paths?: Array<{
    d: string;
    fill?: string;
  }>;
  viewBox?: string;
  fill?: string;
}

export default (vector: string): SvgAsset =>
  vectors
    .filter(({ attributes: { id } }) => id === vector)
    .reduce((_, { attributes: { viewBox, fill }, children }) => {
      return {
        viewBox,
        fill,
        paths: handleChildren(children),
      };
    }, {});
