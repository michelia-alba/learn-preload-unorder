import './Category.less'
import { category_type } from '../constant'
export default {
  methods: {
    handleChangeTab(item) {
      return () => this.$emit('change', item)
    }
  },
  render() {
    return (
      <div class="category"> 
        <h1>图片的加载方式</h1>
        <ul class="category-list">
        {category_type.map(item => (
          <li onClick={this.handleChangeTab(item)}>{item.name}</li>
        ))}
        </ul>
        <div class="category-tips">图片引用至https://image.baidu.com/, https://www.pexels.com/zh-cn/</div>
      </div>
    )
  }
}