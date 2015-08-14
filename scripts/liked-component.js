function LikedComponent(container) {
		this.container = $(container);
		this.likedItems = [];
		this.template = Handlebars.compile($('#LikedTemplate').html());
		$(document).on('likeUnlike', _.bind(this.render, this));
}

LikedComponent.prototype.render = function(e, location, eventType) {
		var isExist = this.isExist(location);

  if(eventType === 'like' && !isExist) {
				this.likedItems.push({'name':location});
		}
		if(eventType === 'unlike' && isExist) {
				this.likedItems = _.reject(this.likedItems, function(item){ return item.name == location;});
		}
		this.container.html(this.template({"locations": this.likedItems}));
}

LikedComponent.prototype.isExist = function(location) {
  return _.any(this.likedItems, function(liked){
				return liked.name == location;
		});
}