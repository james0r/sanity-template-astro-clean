import { EarthGlobeIcon } from '@sanity/icons'
import { PREVIEW_BASE_URL } from '../../constants'
import { endWithSlash } from '../../utils'

export default (props) => {
  console.log('props', props)
  console.log('PREVIEW_BASE_URL', PREVIEW_BASE_URL)

  return {
    label: 'Preview',
    icon: EarthGlobeIcon,
    onHandle: () => {
      window.open(`${endWithSlash(PREVIEW_BASE_URL)}${props.type}?draftId=${props.draft._id}`,'_blank');
    },
    shortcut: 'Ctrl+Alt+E',
  }
}