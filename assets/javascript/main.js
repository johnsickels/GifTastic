var topics = ["dog", "cat", "mouse"];

for (i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.addClass("gif-btn");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#buttons").append(a);
}

$(document).on("click", ".gif-btn", function () {
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=AGGaD69hOSoDdJN1x8FrkFNgxysdJyJz&limit=10&q=" + animal;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                gifDiv.addClass("gifsInline");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var animalImage = $("<img>");
                animalImage.addClass("gif");
                animalImage.attr("alt", "animal image");
                animalImage.attr("src", results[i].images.fixed_height_still.url);
                animalImage.attr("data-still", results[i].images.fixed_height_still.url);
                animalImage.attr("data-animate", results[i].images.fixed_height.url);
                animalImage.attr("data-state", "still");
                gifDiv.append(p);
                gifDiv.append(animalImage);
                $("#gifs").prepend(gifDiv);
            }
        });
});
$(".gif").on("click", function () {
    console.log(this);
    var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
})

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// 7. Deploy your assignment to Github Pages.