import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { customStructure } from './deskStructure';
import { presentationTool } from 'sanity/presentation';
import { resolve } from './presentation/resolve';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
const SANITY_STUDIO_PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_URL || 'https://localhost:3010';

const sharedConfigs = [
  {
    name: 'production',
    title: 'Default Workspace',
    projectId: 'aiar1864',
    dataset: 'production',
    basePath: '/production',
    subtitle: 'production',
  },
  {
    name: 'staging',
    title: 'Staging Workspace',
    projectId: 'aiar1864',
    dataset: 'staging',
    basePath: '/staging',
    subtitle: 'staging',
  },
];

export default defineConfig(
  sharedConfigs.map((config) => ({
    ...config,
    plugins: [
      structureTool({ structure: customStructure }),
      visionTool(),

      presentationTool({
        /*  resolve, */
        previewUrl: {
          previewMode: {
            enable: `${SANITY_STUDIO_PREVIEW_URL}/api/draft-mode/enable`,
          },
        },
      }),
    ],
    schema: {
      types: schemaTypes,
    },
  })),
);
