import { DocumentsIcon } from '@sanity/icons'

export default (S) =>
  S.listItem()
    .title('Navigation')
    .icon(DocumentsIcon)
    .schemaType('navigation')
    .child(S.documentTypeList('navigation'))