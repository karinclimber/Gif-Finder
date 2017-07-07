$(document).ready();
$.ajax({method: "GET", url: "API url"});

var topics = ["apple", "banana", "pear", "grape", "mango", "blueberry", "raspberry", "blackberry", "strawberry"];


function makeButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < topics.length; i++) {

        var x = $("<button>");
        x.addClass("movie");
        x.attr("data-name", topics[i]);
        x.text(topics[i]);
        $("#buttons-view").append(x);    }
}

function displayGif() {
    var gif = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/random?api_keydc6zaTOxFJmzC&tag=animals";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);

    }
    
    
    )
}