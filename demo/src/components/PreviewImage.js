
import Category from './Category'
import Content from './Content'
import './PreviewImage.less'
export default {
  render() {
    return (
      <div class="preview-image">
        <div class="preview-image__left">
          <Category />
        </div>
        <div class="preview-image__right">
          <Content />
        </div>
      </div>
    )
  }
}

