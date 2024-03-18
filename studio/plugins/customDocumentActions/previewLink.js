import { EarthGlobeIcon } from '@sanity/icons'
import { PREVIEW_BASE_URL } from '../../constants'
import { endWithSlash } from '../../utils'

export default (props) => {
  return {
    label: 'Preview',
    icon: EarthGlobeIcon,
    onHandle: () => {
      console.log(props)

      window.open(`${endWithSlash(PREVIEW_BASE_URL)}${props.type}?draftId=${props.draft._id}`,'_newtab');
    },
    shortcut: 'Ctrl+Alt+E',
  }
}