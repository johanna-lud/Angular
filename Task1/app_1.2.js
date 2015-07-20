(function(){
  var app = angular.module('store',[]);
  app.controller('StoreConroller',function($scope){
    this.items = cats;
      $scope.num =function(index){ 
      $scope.store.items[index].num=$scope.store.items[index].num+1;
      }
  });
var cats=[
{
  name:'Grumpy',
  image:'img/cat.jpg',
  num: 0 ,
},
{
  name:'Snoopy',
  image:'img/cat1.jpg',
  num: 0 ,
},
];
})();
