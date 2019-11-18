 // 享元模式：运用共享的技术有效地支持大量的细颗粒度的对象，避免对象间拥有多余的开销。

 // version 1.0

 var dom = null,
   pager = 0,
   num = 5,
   len = articles.length;
 for (var i = 0; i < len; i++) {
   dom = document.createElement('div')
   dom.innerHTML = articles[i];
   if (i >= num) {
     dom.style.display = 'none'
   }
   document.getElementsById('container').appendChild(dom)
 }
 // 下一页绑定事件
 document.getElementsById('next_page').onclick = function () {
   var div = document.getElementsByTagName('div');
   var j = k = n = 0;
   n = ++pager % Math.ceil(len / num) * num;
   for (var j = 0; j < len; j++) {
     div[j].style.display = 'none'
   };
   for (var k = 0; k < 5; k++) {
     if (div[n + k]) {
       div[n + k].style.display = 'block'
     }
   }
 }


 // version 2.0

 var Flyweight = function () {
   var created = [];

   function create() {
     var dom = document.createElement('div');
     document.getElementById('container').appendChild(dom);
     created.push(dom);
     return dom;
   }
   return {
     getDiv: function () {
       if (created.length < 5) {
         return create()
       } else {
         var div = created.shift();
         created.push(div);
         return div;
       }
     }
   }
 }

 var pager = 0,
   num = 5,
   len = articles.length;
 for (var i = 0; i < 5; i++) {
   if (article[i]) {
     Flyweight.getDiv().innerHTML = articles[i];
   }
 }


 // 下一页绑定事件
 document.getElementsById('next_page').onclick = function () {
   if (article.length < 5)
     return;
   var n = ++pager * num % len;
   for (var j = 0; j < 5; j++) {
     if (article[n + j]) {
       Flyweight.getDiv().innerHTML = article[n + j]
     } else if (article[n + j - len]) {
       Flyweight.getDiv().innerHTML = article[n + j - len]
     } else {
       Flyweight.getDiv().innerHTML = ""
     }
   };
 }