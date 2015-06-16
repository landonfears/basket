'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('basketApp'));

  var GroceryList,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GroceryList = $controller('GroceryList', {
      $scope: scope
    });
  }));

  it('should find the correct number of items', function () {
    scope.basketItems = [
        {
          id: 0,
          name: 'Milk',
          quantity: 1,
          inBasket: false,
          removed: false
        },
        {
          id: 0,
          name: 'Oranges',
          quantity: 1,
          inBasket: false,
          removed: false
        }
    ];

    expect(scope.basketItems.length).toBe(2);
  });

  it('should add to list', function() {
    scope.basketItems = [
        {
          id: 0,
          name: 'Milk',
          quantity: 1,
          inBasket: false,
          removed: false
        }
    ];

    expect(scope.basketItems.length).toBe(1);
    scope.addToGroceryList();
    expect(scope.basketItems.length).toBe(2);

  });

  it('should use the correct add/remove to basket functionality', function() {
    scope.basketItems = [
        {
          id: 0,
          name: 'Milk',
          quantity: 1,
          inBasket: false,
          removed: false
        }
    ];
    expect(scope.basketItems[0].inBasket).toBe(false);
    scope.addToBasket(scope.basketItems[0]);
    expect(scope.basketItems[0].inBasket).toBe(true);
    expect(scope.basketItems[0].removed).toBe(false);
    scope.removeFromBasket(scope.basketItems[0]);
    expect(scope.basketItems[0].inBasket).toBe(false);
    expect(scope.basketItems[0].removed).toBe(true);
  });
});
