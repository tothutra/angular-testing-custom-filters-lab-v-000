describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  beforeEach(inject(function ($filter) {
    removeAllVowels = $filter('removeAllVowels');
  }));

  it("remove all vowels", function () {
    var results = $filter('removeAllVowels')('TraToDaleWatkins')
    expect(results).toEqual("TrTDlWtkns")
  })

});
