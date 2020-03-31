import { images } from '../constant'
export default {
  props: {
    tab: {
      type: Object,
      default: () => {}
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