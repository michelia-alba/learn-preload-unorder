// 图片预加载插件
(function($){
  function Preload(imgs, opts) {
    this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
    this.opts = $.extend({}, Preload.DEFAULT, opts);
    (this.opts.order === 'unordered') ? this._unordered() : this._ordered()  //_表示只在内部使用，不在外面使用
  };
  Preload.DEFAULT = {
    order: 'unordered',
    each: null,  //一张图片加载完执行
    all: null    //所有图片加载完执行
  };
  // 无序加载          
  Preload.prototype._unordered = function() {
    let imgs = this.imgs,
        opts = this.opts,
        len = imgs.length,
        count = 0;
    $.each(imgs, function(i, src) {
      if(typeof src != 'string') return;
      let imgsObj = new Image();
      $(imgsObj).on('load error', function() {
        opts.each && opts.each(count)
        if(count >= len-1){
          opts.all && opts.all()
        }
        count++;
      })
      imgsObj.src = src
    })
  };
  // 有序加载
  Preload.prototype._ordered = function() {
    let imgs = this.imgs,
        opts = this.opts,
        len = imgs.length,
        count = 0;
        
    load();
    function load() {
      let imgObj = new Image();
      $(imgObj).on('load error', function() {
        opts.each && opts.each(count);
        if(count >= len){
          opts.all && opts.all()
        }else {
          load()
        }
        count++;
      });
      imgObj.src = imgs[count]; 
    }
  };

  
  $.extend({
    preload: function(imgs, opts) {
      new Preload(imgs, opts)
    }
  })
})(jQuery)