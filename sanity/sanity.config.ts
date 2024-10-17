import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { customStructure } from './deskStructure';

export default defineConfig({
  name: 'default',
  title: 'plaza',

  projectId: 'aiar1864',
  dataset: 'production',

  plugins: [structureTool({ structure: customStructure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
