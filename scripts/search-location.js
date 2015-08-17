function SearchLocation() {
    this.launch = function() {
        var location = $('#location');

        var searchResults = $('#searchResults ul');
        var liked = $('#liked ul');

        $('#search').on('click', function(e) {
            $.ajax({
                url: 'http://locations-backend.herokuapp.com/locations?location=' + location.val(),
                //url: '/locations?location=' + location.val(),
                dataType: 'json',
                success: function(data) {
                    searchResults.html('');
                    $(data).each(function(index, loc) {
                        var compiled  = _.template("<li><span><%= name %></span><button>Like</button></li>");
                        var item = $(compiled({name: loc.name}));

                        item.on('click', 'button', function(e) {
                            var selected_item = item.find('span').text();
                            var button = item.find('button');
                            var li = $("<li></li>").text(selected_item);

                           var isExsit = _.any(liked.find('li'), function(liked_item){
                               return $(liked_item).text() == selected_item;
                           });

                            if(button.text() == 'Like') {
                                if(!isExsit) liked.append(li);
                                button.text('UnLike')
                            }else{
                                _.each(liked.find('li'), function(liked_item){
                                  if($(liked_item).text() == selected_item) $(liked_item).remove();
                                });
                                button.text('Like');
                            };
                        });

                        searchResults.append(item);
                    });
                },
                error: function(error) {
                    console.log(error);
                }
            });
        });
    };
}




