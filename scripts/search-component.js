function SearchComponent(searchInput, searchButton) {
    this.searchInput = searchInput;
    this.searchButton = $(searchButton);
    this.searchButton.on('click', _.bind(this.search, this));

};

SearchComponent.prototype.search = function () {
    $.ajax({
        url: 'http://locations-backend.herokuapp.com/locations?location=' + $(this.searchInput).val(),
        //url: '/locations?location=' + $(this.searchInput).val(),
        dataType: 'json',
        success: function(data){
            $(document).trigger('search', [data]);
        },
        error: function (error){
          console.log(error);
        }
    })
};




