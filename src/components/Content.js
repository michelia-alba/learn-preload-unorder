import { images } from '../constant'
import './Content.less'
const styleTypes= {
  Columns: 'content'
}
export default {
  props: {
    tab: {
      type: String,
    }
  },
  render() {
    return (
      <div class={styleTypes[this.tab]}>
        <ul>
          {images.map(item => (
            <li>
              <img src={item} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}