
import Content from './Content'
import {IMGTYPE} from '../constant'
import { map } from 'lodash'
import './PreviewImage.less'
export default {
  data() {
    return {
      activeName: IMGTYPE.Columns.key
    }
  },
  methods: {
    handleTabChange(item) {
      return () => {
        this.activeName = item
      }
    }
  },
  render() {
    return (
      <div class="preview-image">
        <div class="preview-image__right">
          <ul class="preview-image__right-tabs">
            {map(IMGTYPE,(value, key) => (
              <li 
                onclick={this.handleTabChange(key)}
                class="preview-image__right-tabs-item" 
                style={this.activeName === value.value ? {background: '#a9a1a1'} : {background: '#ccc'}}>{value.name}</li>
            ))}
          </ul>

          <div class="preview-image__right-main-content">
            <Content tab={this.activeName}/>
          </div>
          
        </div>
      </div>
    )
  }
}

