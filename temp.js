describe("Mocking the Date object", function(){
		it("mocks the Date object and sets it to a given time", function() {
				var baseTime = new Date(2013, 9, 23);
						jasmine.clock().mockDate(baseTime);

				jasmine.clock().tick(50);
				expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
		});
});