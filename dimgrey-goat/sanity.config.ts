import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'dimgrey-goat',

  projectId: 'xv4anyl4',
  dataset: 'medium_blog',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
