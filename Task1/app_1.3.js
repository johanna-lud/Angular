(function(){
var app = angular.module('store',[]);

app.controller('StoreConroller',function($scope){
this.items = cats;
      $scope.show= function(index){
      $scope.val=index;
      }
      $scope.num =function(index){ 
      $scope.store.items[index].count=$scope.store.items[index].count+1;
       val=$scope.store.items[index].num;
      }
});


var cats=[
{
  name:'Cat1',
  image:'img/cat.jpg',
  count: 0 ,
  num: 0,
},
{
  name:'Cat2',
  image:'img/cat1.jpg',
  count: 0 ,
  num: 1,
},
{
  name:'Cat3',
  image:'img/cat2.jpg',
  count: 0 ,
  num: 2,
},
{
  name:'Cat4',
  image:'img/cat3.jpg',
  count: 0 ,
  num: 3,
},
{
  name:'Cat5',
  image:'img/cat4.jpg',
  count: 0 ,
  num: 4,
},
];
})();
