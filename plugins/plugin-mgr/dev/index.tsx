import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { mgrPlugin, MgrPage } from '../src/plugin';

createDevApp()
  .registerPlugin(mgrPlugin)
  .addPage({
    element: <MgrPage />,
    title: 'Root Page',
    path: '/dummy'
  })
  .render();
