describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  beforeEach(inject(function ($filter) {
    favoriteFood = $filter('favoriteFood');
  }));

  it('should filter results by food', function () {
    var list = [
      {
        name: 'Test',
        favoriteFood: 'Bread'
      },
      {
        name: 'Test 2',
        favoriteFood: 'Rice'
      },
      {
        name: 'Test 3',
        favoriteFood: 'Rice'
      }
    ]
    var result = $filter('favoriteFood')(list, "Rice")
    expect(result.length).toBe(2)
    expect(result[0].name).toBe('Test 2')
  })
	
});
