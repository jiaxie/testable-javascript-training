function SearchComponent(searchInput, searchButton) {
    this.searchInput = searchInput;
    this.searchButton = $(searchButton);
    this.searchButton.on('click', _.bind(this.search, this));

};

SearchComponent.prototype.search = function () {
    $.ajax({
        url: 'http://locations-backend.herokuapp.com/locations?location=' + $(this.searchInput).val(),
        dataType: 'json',
        success: function(data){
            $(document).trigger('search', [data]);
        },
        error: function (error){
          console.log(error);
        }
    })
};

//-----------------------------------------
//(function($){
//    //var sss = function(){
//    //
//    //};
//    function SearchComponent(searchInput, searchButton) {
//        this.searchInput = searchInput;
//        this.searchButton = $(searchButton);
//        this.searchButton.on('click', _.bind(this.search, this));
//
//    };
//    SearchComponent.prototype.search = function () {
//        var callBack = function(data) {
//            $(document).trigger('search', [data]);
//        }
//        $.ajax({
//            url: 'http://locations-backend.herokuapp.com/locations?location=' + $(this.searchInput).val(),
//            dataType: 'json',
//            success: callBack,
//            error: function (error) {
//                console.log(error);
//            }
//
//        })
//    };
//
//    window.SearchComponent = SearchComponent;
//})(jQuery);

////------------------------------
//var searchComponent = (function(searchInput, searchButton){
//    var searchInput = searchInput;
//    var searchButton = searchButton;
//    var callBack = function(data) {
//        $(document).trigger('search', [data]);
//    };
//    var search = function(){
//        $.ajax({
//            url: 'http://locations-backend.herokuapp.com/locations?location=' + $(this.searchInput).val(),
//            dataType: 'json',
//            success: callBack,
//            error: function (error) {
//                console.log(error);
//            }
//        })
//    };
//
//    return {
//        search: search
//    };
//})();




