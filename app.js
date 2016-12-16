(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;


  list1.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

  list1.buyItems = ShoppingListCheckOffService.getBuyItems()
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

list2.boughtItems = ShoppingListCheckOffService.getBoughtItems()
}

function ShoppingListCheckOffService() {
  var service = this;


  var buyItems = [
    { name: "cookie", quantity: 1 }
    ,{ name: "milk", quantity: 2 }
    ,{ name: "chocholate", quantity: 3 }
    ,{ name: "bread", quantity: 4 }
    ,{ name: "water", quantity: 5 }
  ];

  var boughtItems = [];


  service.buyItem = function (itemIndex) {

    var item = buyItems[itemIndex];
    buyItems.splice(itemIndex, 1);
    boughtItems.push(item);
  };

  // service.removeItem = function (itemIdex) {
  //   items.splice(itemIdex, 1);
  // };

  service.getBuyItems = function () {
    return buyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

  // $scope.cnt = function () {
  //   $scope.msg ="";
  //   //$scope.menu = $scope.menu.replace(/,+/g,',');
  //   var arrayOfStrings = $scope.menu.split(',');
  //   if ($scope.menu.length == 0){$scope.msg = 'Please enter data first';$scope.mystyle={color:"Red"}}
  //   else if(arrayOfStrings.length > 3) {$scope.msg = 'Too mutch!'; $scope.mystyle={color:"green"}}
  //   else  {$scope.msg = 'Enjoy!';$scope.mystyle={color:"green"}}
  //
  //   ;
  //   //$scope.msg = $scope.menu;
  // };


})();
