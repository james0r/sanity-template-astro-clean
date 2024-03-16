import { DocumentsIcon } from '@sanity/icons'

export default (S) =>
  S.listItem()
    .title('Posts')
    .icon(DocumentsIcon)
    .schemaType('post')
    .child(S.documentTypeList('post'))