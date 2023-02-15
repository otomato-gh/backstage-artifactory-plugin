import { createApiRef } from '@backstage/core-plugin-api';

export interface otom8OArtifactoryPluginApi {
  getHealth(): Promise<{ status: string; }>;
}

export const otom8OArtifactoryPluginApiRef = createApiRef<otom8OArtifactoryPluginApi>({
  id: 'plugin.otom80artifactoryplugin.service',
});