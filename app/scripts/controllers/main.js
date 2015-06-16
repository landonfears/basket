'use strict';

/**
 * @ngdoc function
 * @name basketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the basketApp
 */
angular.module('basketApp')
  	.controller('GroceryList', function ($scope) {
  		$scope.basketItems = [
  			{
  				id: 0,
  				name: '',
  				quantity: 1,
  				inBasket: false,
  				removed: false
  			}
  		];

  		$scope.addToGroceryList = function() {
  			$scope.basketItems.push({
  				id: $scope.basketItems.length,
  				name: '',
  				quantity: 1,
  				inBasket: false,
  				removed: false
  			});
  		};

  		$scope.addToBasket = function(basketItem) {
  			basketItem.inBasket = true;
  		};
  		$scope.removeFromBasket = function(basketItem) {
  			basketItem.inBasket = false;
  			basketItem.removed = true;
  		};
  	});
