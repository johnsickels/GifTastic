var topics = ["dog", "cat", "mouse"];

function renderButtons () {
    $("#buttons").empty();
    for (i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("gif-btn");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons").append(a);
    }
};

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var newGif = $("#gif-input").val().trim();
    topics.push(newGif);
    renderButtons();
  });

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

$(document).on("click", ".gif", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

renderButtons();

// 7. Deploy your assignment to Github Pages.