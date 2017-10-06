let imgList = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507028448397&di=727d22ec67a6bd6d40332ab5441b0573&imgtype=0&src=http%3A%2F%2Fimg.52fuqing.com%2Fupload%2Feditor%2F2016-8-5%2F20168520212831fbi94.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507028448396&di=0f179a54dbdab0dff559b3347588fd78&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Forj480%2F8ee10ad7gw1f6ysjd4adqj20vk0hsasi.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507028448394&di=d679fc54b2854ebe3374582c37c447f6&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161231%2F39dfec23467e4298b8ec2e506a58c1fc_th.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507028448394&di=909f18bc45d3bba66646c2e5d9a98d98&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Forj480%2F006qngkigw1f7528dminrj31hc0k0tga.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507028448394&di=d9ad51d413a9e033983fcfe81fc6c404&imgtype=0&src=http%3A%2F%2F7xsbn8.com1.z0.glb.clouddn.com%2F14822919342.png',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507028448393&di=bc40dbcf238a7dd6aaca81b3a01fc7c2&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Forj480%2Fa6e0db92jw1f6ho6z8g9yj20mb0ecjsl.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507028448389&di=00c778b68fc3a8f2ce8882f8431107cf&imgtype=0&src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20170427%2F1493283420_20101_10.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507028448389&di=f58fafe38a215384fb8d8db31b445521&imgtype=0&src=http%3A%2F%2Fimg31.mtime.cn%2Fmg%2F2015%2F11%2F06%2F140728.38784238.jpg',
];

let index = 0,
    count = 0,
    len = imgList.length;

$('.btn').on('click', function(){
  if($(this).data('control') === 'prev') {
    index = Math.max(0, --index)
  }else {
    index = Math.min(len-1, ++index)
  }
  $('.pic').attr('src', imgList[index])
})

$.preload(imgList, {
  order: 'unordered',
  each: function(count) {
    console.log('progress: ' + Math.round(count / (len - 1) * 100)+'%')
    $('.progress').html(Math.round(count / (len - 1) * 100)+'%')
  },
  all: function() { 
    console.log('lsdkf')
    $('.loading').hide()
  }
})
