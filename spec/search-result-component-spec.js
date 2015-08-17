describe('Search Result Component', function(){
		var searchResultComponent = null;
		var fakeResults = null;

		beforeEach(function(){
				//jasmine.getFixtures.fixturesPath = 'spec/fixtures';
				jasmine.getFixtures.fixturesPath = 'base/spec/fixtures';
				loadFixtures('index.html');

				searchResultComponent = new SearchResultComponent('#searchResults');
				fakeResults = [{name: 'test 1'}, {name: 'test 2'}];
				$(document).trigger('search', [fakeResults]);
		});

		it('should render search results when search triggered', function(){
				expect(searchResultComponent.searchResults).toEqual([{name: 'test 1', status: 'like'}, {name: 'test 2', status: 'like'}]);
				expect(searchResultComponent.container.find('li').length).toEqual(2);
				expect(searchResultComponent.container.find('li:first-child .location').text()).toBe('test 1');
				expect(searchResultComponent.container.find('li:last-child .location').text()).toBe('test 2');
		});

		it('should bind toggle like event for each search result item', function(){
				var spyEvent = spyOnEvent($(document), 'likeUnlike');
				var expectedSearchResults = [
						{ name: 'test 1', status: 'unlike'},
						{ name: 'test 2', status: 'like' }
				]
				searchResultComponent.container.find('li:first-child button').trigger('click');
				expect(searchResultComponent.searchResults).toEqual(expectedSearchResults);
				expect(spyEvent).toHaveBeenTriggered(document);
				expect(searchResultComponent.container.find('li:first-child button').text()).toBe('unlike');
				expect(searchResultComponent.container.find('li:last-child button').text()).toBe('like');
		});
});