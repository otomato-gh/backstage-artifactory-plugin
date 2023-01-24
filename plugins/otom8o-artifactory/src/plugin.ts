import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const otom8OArtifactoryPlugin = createPlugin({
  id: 'otom8o-artifactory',
  routes: {
    root: rootRouteRef,
  },
});

export const EntityOtom8OArtifactoryContent = otom8OArtifactoryPlugin.provide(
  createRoutableExtension({
    name: 'EntityOtom8OArtifactoryContent',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
