(function(){
var app = angular.module('store',[]);
app.controller('StoreConroller',function(){
this.items = cats;
});
var cats=[
{
  name:'Grumpy',
  image:'cat.jpg',
  num: 0 ,
},
{
  name:'Snoopy',
  image:'cat1.jpg',
  num: 0 ,
},
];
})();
