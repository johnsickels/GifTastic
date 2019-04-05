var topics = ["here", "there", "anywhere", "moscow", "bahamas", "barcelona"];

function renderButtons() {
    $("#buttons").empty();
    for (i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("btn btn-primary gif-btn");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons").append(a);
    }
};

$("#add-gif").on("click", function (event) {
    event.preventDefault();
    var newGif = $("#gif-input").val().trim();
    if ($("#gif-input").val() === "") {
        return false;
    }
    else {
        topics.push(newGif);
        renderButtons();
        $("#gif-input").val("");
    }
});

$(document).on("click", ".gif-btn", function () {
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=AGGaD69hOSoDdJN1x8FrkFNgxysdJyJz&limit=10&q=" + topic;

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
                var topicImage = $("<img>");
                topicImage.addClass("gif");
                topicImage.attr("alt", "topic image");
                topicImage.attr("src", results[i].images.fixed_height_still.url);
                topicImage.attr("data-still", results[i].images.fixed_height_still.url);
                topicImage.attr("data-animate", results[i].images.fixed_height.url);
                topicImage.attr("data-state", "still");
                gifDiv.append(p);
                gifDiv.append(topicImage);
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