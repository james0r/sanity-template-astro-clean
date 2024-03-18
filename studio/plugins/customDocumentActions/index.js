import {
  definePlugin
} from 'sanity'
import previewLink from './previewLink'

export const resolveDocumentActions = (prev, { schemaType }) => {
  return [
    ...prev,
    previewLink,
  ]
}

export const customDocumentActions = definePlugin({
  name: 'custom-document-actions',
  document: {
    productionUrl: 'https://starx.vercel.app',
  }
})