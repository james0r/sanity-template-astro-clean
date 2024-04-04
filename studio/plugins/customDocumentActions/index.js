import { definePlugin } from 'sanity'
import previewLink from './previewLink'
import { PREVIEWABLE_DOCUMENT_TYPES } from '../../constants'

export const resolveDocumentActions = (prev, { schemaType }) => {
  if (!PREVIEWABLE_DOCUMENT_TYPES.includes(schemaType)) return prev

  return [
    ...prev,
    previewLink,
  ]
}

export const customDocumentActions = definePlugin({
  name: 'custom-document-actions',
  document: {
    actions: resolveDocumentActions,
  },
})