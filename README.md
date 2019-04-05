# GifTastic

### The assignment:
In this assignment, I will use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, I called the GIPHY API and used JavaScript and jQuery to change the HTML of my site.

### Here's how the app works:
1. Before I could make any part of my site work, I needed to create an array of strings, each one related to a topic that interested me. I saved it to a variable called `topics`.
   * I chose destinations for my theme.

2. I could then take the topics in this array and create buttons in my HTML.
   * I tried using a loop that appends a button for each string in the array.

3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

5. Under every gif, display its rating (PG, G, so on).
   * This data is provided by the GIPHY API.

6. I added a form to my page takes the value from a user input box and adds it into my `topics` array. Then I made a function call that takes each topic in the array remakes the buttons on the page.

### Game design notes:
- Ensure your app is fully mobile responsive.
- Allow users to request additional gifs to be added to the page.
   * Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.

### Technologies Used
- Bootstrap
- HTML
- CSS
- JavaScript
- JQuery
- Giphy API
- AJAX

### Trivia Game Links:
[GifTastic](https://johnsickels.github.io/GifTastic/)
![Trivia Game](https://raw.githubusercontent.com/johnsickels/GifTastic/master/assets/videos/userinterface.png)