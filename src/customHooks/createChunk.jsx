import { lazy } from 'react';

const createChunk = componentName => {
  return lazy(() => import(`../pages/${componentName}/${componentName}`));
};

export default createChunk;
