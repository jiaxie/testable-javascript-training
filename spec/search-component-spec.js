describe('search Component', function(){
		beforeEach(function(){
				jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
				loadFixtures('index.html');
		});


		it("should have search button, search input and bind event for a new component", function() {
				var searchComponent = new SearchComponent('#location', '#search');

				expect(searchComponent.searchInput).toBe('#location');
				expect(searchComponent.searchButton).toEqual($('#search'));
		});

		it('should trigger search when ajax success', function() {
				var spyEvent = spyOnEvent($(document), 'search');
				spyOn($, 'ajax').and.callFake(function(params) {
						params.success([{name: 'a'}, {name: 'b'}]);
				});
				var searchComponent = new SearchComponent('#location', '#search');

				$(searchComponent.searchInput).val('aaa');
				searchComponent.searchButton.click();

				expect($.ajax).toHaveBeenCalled();
				expect($.ajax.calls.mostRecent().args[0].url).toBe('http://locations-backend.herokuapp.com/locations?location=aaa')
				expect(spyEvent).toHaveBeenTriggered(document);
				//expect('search').toHaveBeenTriggeredOn(document);
		});

});