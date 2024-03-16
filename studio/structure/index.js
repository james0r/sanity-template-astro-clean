import page from './pageStructure'
import post from './postStructure'
import navigation from './navigationStructure'
import settings from './settingsStructure'

// If you add document types to structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    'home',
    'navigation',
    'page',
    'settings',
    'post'
  ].includes(id)
}

export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      post(S, context),
      page(S, context),
      S.divider(),
      navigation(S, context),
      settings(S, context),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])