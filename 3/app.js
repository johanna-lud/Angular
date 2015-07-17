(function(){
var app = angular.module('store',[]);

app.controller('StoreConroller',function(){
this.items = cats;
this.tab=0;
});




var cats=[
{
  name:'Cat1',
  image:'cat.jpg',
  count: 0 ,
  num: 1,
},
{
  name:'Cat2',
  image:'cat1.jpg',
  count: 0 ,
  num: 2,
},
{
  name:'Cat3',
  image:'cat2.jpg',
  count: 0 ,
  num: 3,
},
{
  name:'Cat4',
  image:'cat3.jpg',
  count: 0 ,
  num: 4,
},
{
  name:'Cat5',
  image:'cat4.jpg',
  count: 0 ,
  num: 5,
},
];
})();
