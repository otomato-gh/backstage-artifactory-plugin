
import { 
  createApiFactory,
  createPlugin,
  createRoutableExtension,
  discoveryApiRef,
} from '@backstage/core-plugin-api';
import { ArtifactoryPluginBackendClient } from './api/ArtifactoryPluginBackendClient';
import { otom8OArtifactoryPluginApiRef } from './api';

import { rootRouteRef } from './routes';

export const otom8OArtifactoryPlugin = createPlugin({
  id: 'otom8o-artifactory',
  apis: [
    createApiFactory({
      api: otom8OArtifactoryPluginApiRef,
      deps: {
        discoveryApi: discoveryApiRef,
      },
      factory: ({ discoveryApi }) =>
        new ArtifactoryPluginBackendClient({ discoveryApi }),
    }),
  ],
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
