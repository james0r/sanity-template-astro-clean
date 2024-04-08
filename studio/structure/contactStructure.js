import { DocumentsIcon } from '@sanity/icons'

export default (S) =>
  S.listItem()
    .title('Contact')
    .icon(DocumentsIcon)
    .schemaType('contact')
    .child(S.documentTypeList('contact'))