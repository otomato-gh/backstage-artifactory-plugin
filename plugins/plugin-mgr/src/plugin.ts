import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const mgrPlugin = createPlugin({
  id: 'plugin-mgr',
  routes: {
    root: rootRouteRef,
  },
});

export const MgrPage = mgrPlugin.provide(
  createRoutableExtension({
    name: 'MgrPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
