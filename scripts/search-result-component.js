function SearchResultComponent(container) {
    this.container = $(container);
    this.searchResults = [];
    this.template = Handlebars.compile($('#searchResultsTemplate').html());
    $(document).on('search', _.bind(this.render, this));
    this.container.on('click', 'button', _.bind(this.toggleLike, this));
}

SearchResultComponent.prototype.render = function(e, data) {
    this.searchResults = _.map(data, function(item){
        item.status = 'like';
        return item;
    });
    this.container.html(this.template({"locations": this.searchResults}));
}

SearchResultComponent.prototype.toggleLike = function(e) {
    var currentLocation = $(e.currentTarget).data('location');
    var eventType = '';

    this.searchResults = _.map(this.searchResults, function(item){
       if(item.name == currentLocation) {
        eventType = item.status;
        item.status = (eventType == 'like')? 'unlike' : 'like';
       }
       return item;
    });

    $(document).trigger('likeUnlike', [currentLocation, eventType]);
    this.container.html(this.template({"locations": this.searchResults}));
}
