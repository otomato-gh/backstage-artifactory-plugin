import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { otom8OArtifactoryPlugin, Otom8OArtifactoryPage } from '../src/plugin';

createDevApp()
  .registerPlugin(otom8OArtifactoryPlugin)
  .addPage({
    element: <Otom8OArtifactoryPage />,
    title: 'Root Page',
    path: '/otom8o-artifactory'
  })
  .render();
