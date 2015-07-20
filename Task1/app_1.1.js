(function(){
  var app = angular.module('store',[]);
  app.controller('StoreConroller',function($scope){
  this.item = cat;
    $scope.num =function(){ 
    $scope.store.item.num = $scope.store.item.num + 1;
    }
  });
  var cat={
  image:'img/cat.jpg',
  num: 0 ,
  }
})();
