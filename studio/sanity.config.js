import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { structure } from './structure';
import { schemaTypes } from "./schema";
import { customDocumentActions } from './plugins/customDocumentActions';
import { assist } from '@sanity/assist'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  name: 'default',
  title: 'starx',

  projectId: '2jmmbukj',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    visionTool(),
    customDocumentActions(),
    assist(),
    unsplashImageAsset()
  ],
  schema: {
    types: schemaTypes,
  },
})