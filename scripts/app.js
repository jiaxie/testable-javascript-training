$(function() {
    var searchResults = new SearchResultView("#searchResults ul");
    var searchLocation = new SearchLocationView();

    var searchService = new SearchService("http://localhost:8080/locations?location=");
    var searchLogic = new SearchLocationLogic(searchLocation, searchResults, searchService);
    searchLogic.launch();

    var liked = new LikeView("#liked ul");
    $(document).on('like', function(e, loc) {
        liked.render(loc);
    });

});
