
import Content from './Content'
import {image_layouts} from '../constant'
import './PreviewImage.less'
export default {
  data() {
    return {
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
        <div class="preview-image__right">
          <ul class="preview-image__right-tabs">
            {image_layouts.map(item => (
              <li 
                onclick={this.handleTabChange(item)}
                class="preview-image__right-tabs-item" 
                style={this.activeName === item.value ? {background: '#a9a1a1'} : {background: '#ccc'}}>{item.name}</li>
            ))}
          </ul>
          <div class="preview-image__right-main-content">
            {this.activeName === 'Style' && (<Content tab={this.activeName}/>) }
          </div>
          
        </div>
      </div>
    )
  }
}

