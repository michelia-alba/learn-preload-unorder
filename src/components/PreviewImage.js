
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
      this.tab = item
    }
  },
  render() {
    return (
      <div class="preview-image">
        <div class="preview-image__left">
          
          <Category onChange={this.handleTabChange} />
        </div>
        <div class="preview-image__right">
        <el-tabs value={this.activeName}>
          {image_layouts.map(item => (
            <el-tab-pane label={item.name} name={item.value}>
              <Content tab={this.tab}/>
            </el-tab-pane>
          ))}
          </el-tabs>
        </div>
      </div>
    )
  }
}

