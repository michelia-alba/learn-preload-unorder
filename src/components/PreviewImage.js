
import Category from './Category'
import Content from './Content'
import {image_layouts} from '../constant'
import './PreviewImage.less'
export default {
  data() {
    return {
      tab: {},
      activeName: 'Style'
    }
  },
  methods: {
    handleTabChange(item) {
      return () => {
        this.activeName = item.value

      }
    }
  },
  render() {
    return (
      <div class="preview-image">
        <div class="preview-image__left">
          <Category onChange={this.handleTabChange} />
        </div>
        <div class="preview-image__right">
          <ul class="preview-image__right-tabs">
            {image_layouts.map(item => (
              <li 
                onclick={this.handleTabChange(item)}
                class="preview-image__right-tabs-item" 
                style={this.activeName ===item.value ? {background: '#a9a1a1'} : {background: '#ccc'}}>{item.name}</li>
            ))}
          </ul>
          <Content tab={this.tab}/>
        </div>
      </div>
    )
  }
}

