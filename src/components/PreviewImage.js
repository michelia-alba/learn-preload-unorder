
import { map, parseInt, min, indexOf } from 'lodash'
import Content from './Content'
import { IMGTYPE } from '../constant'
import './PreviewImage.less'

export default {
  data() {
    return {
      activeName: IMGTYPE.JSS.key,
      defaultWidth: 250,
      gap: 10,
    }
  },
  methods: {
    handleTabChange(item) {
      return () => {
        this.activeName = item
      }
    },
    handleImageLayout() {
      const innerWidth = window.innerWidth
      const columns = parseInt(innerWidth / (this.defaultWidth + this.gap))
      const ulEle = document.getElementById('preveiw-box')
      const liEles = document.getElementsByClassName('preview-item')
      const parentTop = ulEle.offsetTop + 24
      const heightArray = []

      map(liEles, (item, index) => {
        if (index < columns) {
          item.style.left = `${(this.defaultWidth + 20) * index}px`
          item.style.top = `${parentTop}px`
          heightArray.push(item.offsetHeight + parentTop)
        } else {
          const minHeight = min(heightArray)
          const minHeightIndex = indexOf(heightArray, minHeight)
          item.style.top = `${minHeight + this.gap}px`
          item.style.left = `${(this.defaultWidth + 20) * minHeightIndex}px`
          heightArray[minHeightIndex] = minHeight + this.gap + item.offsetHeight
        }
      })
      return heightArray
    },
  },
  created() {
    window.onload = () => {
      this.handleImageLayout()
    }
    window.onresize = () => {
      this.handleImageLayout()
    }
  },
  render() {
    return (
      <div class="preview-image">
        <div class="preview-image__right">
          <ul class="preview-image__right-tabs">
            {map(IMGTYPE, (value, key) => (
              <li
                onclick={this.handleTabChange(key)}
                class="preview-image__right-tabs-item"
                style={this.activeName === value.value ? { background: '#a9a1a1' } : { background: '#ccc' }}>{value.name}</li>
            ))}
          </ul>
          <div class="preview-image__right-main-content">
            <Content tab={this.activeName}/>
          </div>

        </div>
      </div>
    )
  },
}
