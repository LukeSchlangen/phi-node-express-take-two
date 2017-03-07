var myApp = angular.module('FishApp', []);

myApp.controller('FishController', ['$http', function ($http) {
  var self = this;
  self.fishList = [];
  self.newFish = {};
  getFishData();
  function getFishData() {
    $http({
      method: 'GET',
      url: '/fish'
    }).then(function (response) {
      console.log('response', response);
      self.fishList = response.data;
    });
  }

  self.addNewFish = function () {
    $http({
      method: 'POST',
      url: '/fish/new',
      data: self.newFish
    }).then(function (response) {
      console.log(response);
      getFishData();
    });
  }
}]);
