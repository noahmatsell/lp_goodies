//all boxes
var items [];
$('.lp-element .lp-pom-box').each(function(i,element) {
  var item = {};
  //a title
  item.title = element.childNodes[3].innerText;
  //description
  item.description = element.childNodes[7].innerText;
  //link
  item.link = element.childNodes[5].innerText;
  items.push(item);
});
