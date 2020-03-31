
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
  },
  created() {
    window.onload = () => {
      const innerWidth = window.innerWidth
      const columns = parseInt(innerWidth / (this.defaultWidth + this.gap))
      const liEles = document.getElementsByClassName('preview-item')
      const ulEle = document.getElementById('preveiw-box')
      const parentTop = ulEle.offsetTop
      const heightArray = []

      map(liEles, (item, index) => {
        if (index < columns) {
          item.style.left = `${(this.defaultWidth + 20) * index}px`
          item.style.top = `${parentTop + 24}px`
          heightArray.push(item.offsetHeight + parentTop + 24)
        } else {
          debugger
          const minHeight = min(heightArray)
          const minHeightIndex = indexOf(heightArray, minHeight)
          item.style.top = `${minHeight + this.gap}px`
          item.style.left = `${(this.defaultWidth + 20) * minHeightIndex}px`
          heightArray[minHeightIndex] = minHeight + this.gap + item.offsetHeight
        }
      })
      return heightArray
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
