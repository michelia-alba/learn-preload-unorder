import { images, IMGTYPE } from '../constant'
import './Columns.less'
import './Floats.less'
import './JSS.less'

const styleTypes = {
  [IMGTYPE.Columns.key]: 'Columns',
  [IMGTYPE.Floats.key]: 'Floats',
  [IMGTYPE.JSS.key]: 'JSS',
}
export default {
  props: {
    tab: {
      type: String,
    },
  },
  render() {
    return (
      <div class={styleTypes[this.tab]}>
        <ul id="preveiw-box">
          {images.map(item => (
            <li class="preview-item">
              <img src={item} />
            </li>
          ))}
        </ul>
      </div>
    )
  },
}
