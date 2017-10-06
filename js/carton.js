var imgs = [
  'http://45.34.137.202:8080/comicdata/12307/1/1.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/2.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/3.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/4.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/5.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/6.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/7.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/8.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/9.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/10.jpg',
];
var len = imgs.length
    index = 0;
$.preload(imgs, {
  order: 'ordered'
})
$('.btn').on('click', function() {
  if($(this).data('control') === 'prev') {
    index = Math.max(0, --index)
  } else {
    index = Math.min(len-1, ++index);
  }
  $('.pic').attr('src', imgs[index])
})