//array of dog breeds
var topics = ["Border Collie", "Golden Retriever", "Labrador Retriever", 
                "French Bulldog", "Poodle", "Pit Bull", 
                "Hound", "Vizsla", "Australian Shepherd",
                 "Chihuahua", "Dachshund"];


function displayDog() {

//ajax call to search giphy images
    var dog = $(this).attr("data-dog");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dog + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        methond: "GET"
    }).done(function(response) {
        console.log(queryURL);
        console.log(response);

        for (i = 0 ; i < 10 ; i++){
        $("#gifView").append('<img src="' 
                    + response.data[i].images.fixed_height_still.url 
                    +'" data-still="' + response.data[i].images.fixed_height_still.url
                    + '" data-animate="' + response.data[i].images.fixed_height.url 
                    + '" data-state="still" alt="gif-' + (i + 1) 
                    + '" class="gif-it img-responsive img-thumbnail">');

                $("#gifView").append('<p>Rating: ' + response.data[i].rating + '</p>');
            };
        });
    };

    //function - animate gif on click
    $("body").on("click", ".gif-it", function() {

        var state = $(this).attr("data-state");

        if (state === "still"){
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });



//dynamically create buttons for array

function makeButtons() {
    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var newBut = $("<button class='btn'>");
        newBut.addClass("dog");
        newBut.attr("data-dog", topics[i]);
        newBut.text(topics[i]);
        $("#buttons").append(newBut);
        }
}
//add new button for input
$("#add_Dog").on("click", function(event){
    event.preventDefault();
    var dog = $("#dogInput").val().trim();
    topics.push(dog);

    makeButtons();

});
//make all the buttons on the page with "dog" as the class respond 
//to click events
$(document).on("click", ".dog", displayDog);

      // calling makeButtons function to display the intial buttons
      makeButtons();