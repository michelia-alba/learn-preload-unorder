  var imgs = [],
      count = 0;
  for(let i=0; i<12; i++) {
    imgs[i] = 'images/qq/'+i+'.gif';
  }
$('.btn').on('click', function(){
  $('.content').show();
  $.preload(imgs, {
    order: 'unordered', 
    all: function() {
      var content = '';
      content += '<ul class="list">'
      for(let i=0; i<imgs.length; i++) {
        content += "<li class='item'><img src="+imgs[i]+" /></li>"
      }
      content += '</ul>'
      $('.content').html(content)
    }
  });
});

