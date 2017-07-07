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

//display top 10 images from giphy and prepend rating underneath
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
        var dogDiv = $("<div class='item'>");
        var rating = results[i].rating;
        var d = $("<p>").text("Rating: " + rating);
        var dogImage = $("<img>");
        dogImage.attr("src", results[i].images.fixed_height.url);
        dogDiv.append(d);
        dogDiv.prepend(dogImage);

        $("#gifView").prepend(dogDiv);
    }
    });    
};

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