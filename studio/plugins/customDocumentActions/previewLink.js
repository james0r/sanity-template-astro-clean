import { EarthGlobeIcon } from '@sanity/icons'
import { PREVIEW_BASE_URL } from '../../constants'
import { endWithSlash } from '../../utils'

export default (props) => {
  return {
    label: 'Preview',
    icon: EarthGlobeIcon,
    onHandle: () => {
      window.open(`${endWithSlash(PREVIEW_BASE_URL)}${props.type}?draftId=${props.draft._id}`,'_blank');
    },
    shortcut: 'Ctrl+Alt+E',
  }
}