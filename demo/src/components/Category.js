import './Category.less'
export default {
  render() {
    return (
      <div class="category"> 
        <h1>图片的加载方式</h1>
        <ul class="category-list">
          <li>无序加载</li>
          <li>有序加载</li>
          <li>渐进加载</li>
          <li>预览图片</li>
        </ul>
      </div>
    )
  }
}