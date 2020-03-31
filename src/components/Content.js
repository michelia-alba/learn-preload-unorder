import { images } from '../constant'
import './Content.less'
export default {
  props: {
    tab: {
      type: String,
    }
  },
  render() {
    return (
      <div class="content">
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