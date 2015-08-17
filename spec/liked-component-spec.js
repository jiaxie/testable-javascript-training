describe('Liked Component', function(){
		var likedComponent = null;

		beforeEach(function(){
				//jasmine.getFixtures().fixturesPath = 'spec/fixtures';
				jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
				loadFixtures('index.html');
				likedComponent = new LikedComponent('#liked');
				likedComponent.likedItems = [{name: 'test 1'}, {name: 'test 2'}];
		});

		it('should return true if location exist', function(){
				expect(likedComponent.isExist('test 1')).toBe(true);
				expect(likedComponent.isExist('test 3')).toBe(false);
		});

		describe('should toggle liked location', function(){
				it('should add to liked when like an not existing location', function(){
						expect(likedComponent.likedItems.length).toBe(2);
						$(document).trigger('likeUnlike', ['test 3', 'like'])
						expect(likedComponent.likedItems.length).toBe(3);
						expect(likedComponent.likedItems[2]).toEqual({name: 'test 3'});
						expect(likedComponent.container.find('li:last-child').text()).toBe('test 3');
				});

				it('should not add to liked when like an existing location', function(){
						expect(likedComponent.likedItems.length).toBe(2);
						$(document).trigger('likeUnlike', ['test 2', 'like'])
						expect(likedComponent.likedItems.length).toBe(2);
				});

				it('should remove location when unlike an existing location', function(){
						expect(likedComponent.likedItems.length).toBe(2);
						$(document).trigger('likeUnlike', ['test 2', 'unlike'])
						expect(likedComponent.likedItems.length).toBe(1);
				});

				it('should not remove location when unlike a not existing location', function(){
						expect(likedComponent.likedItems.length).toBe(2);
						$(document).trigger('likeUnlike', ['not existing location', 'unlike'])
						expect(likedComponent.likedItems.length).toBe(2);
				});
		});
});