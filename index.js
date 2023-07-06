// Step 5
// Summary
// Finally, let’s add in some functionality that will display messages to users to let them know what action took place. We’ll be selecting an existing, but blank, HTML element and adding some code to our deleteMovie and crossOffMovie functions.

// Instructions
// At the top of your JS file, select the HTML element with the message id using querySelector. Save it to a variable called message. Right now, it’s just an empty aside element. In the next steps, we’ll assign its textContent to send users different notifications.

// In the deleteMovie function, add a line that assigns the textContent of message to be a string that says something like ‘Movie deleted!’ - You should now see this message pop up when you delete a movie. Test it out!


// The condition of your if statement should check if it’s true that the event.target.classList contains the checked class. - contains is a built-in method that can be used on classList, the structure for doing so is event.target.classList.contains(‘some-class-name’)

// If it’s true, then change message’s textContent to be a string that says something like ‘Movie watched!’

// Else, change message’s textContent to be a string that says something like ‘Movie added back!’

// Test it all out!
let message = document.querySelector('#message')



// In index.js, create a new function called addMovie that takes in an event as a parameter.

// We are going to want to get and set the value of our input field in this function, so let’s select it now. Use querySelector to get the input, save it to a variable called inputField.

// Let’s make the HTML for our movie list items. Create a new variable called movie, store a new li element in it using document.createElement, this will be the parent element of our movie’s title and the movie’s delete button.

// Next create a new span element and save it to a variable called movieTitle. Set the textContent of movieTitle to be the value of inputField. This will write what the user typed out into our new span.

// Now we’ll need to append the movieTitle span to our movie element. Use the appendChild method on movie, passing in movieTitle to attach the title to its parent.

// Then, use querySelector to find the ul element that already exists in our HTML and use appendChild to attach the movie element we created to the list.

// Finally, outside of your function, use querySelector to select the form element and then use addEventListener to listen for a submit event on the form element and run the addMovie function.

// Save your files, run the project and give it a try – it doesn’t work the way we expected. Because our button is inside a form element, it has a default action that is also running and interfering with our code. To fix this, at the beginning of the addMovie function, add event.preventDefault()

// For a more user-friendly experience, let’s clear the input field when the ‘Add’ button is clicked so it’s ready for another movie. To do this, set the value of inputField to an empty string at the bottom of the addMovie function.
// Instructions
// In the addMovie function, after appending the movieTitle to movie, use createElement to create a new button element and save it to a variable called deleteBtn.

// Set the textContent of deleteBtn to be the letter X.

// Use addEventListener to listen for a click event on the button and run the deleteMovie function. We will create that function later in this step.

// Now that the button has been created, use the appendChild method to add deleteBtn onto the movie element.

function addMovie(event){
    event.preventDefault()
    let inputField=document.querySelector('input')
    
    let movie=document.createElement('li')
    let movieTitle=document.createElement('span')
    movieTitle.textContent=inputField.value;
    movieTitle.addEventListener('click',crossOffMovie)

    movie.appendChild(movieTitle)
    let deleteBtn=document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)
    let newMovie=document.querySelector('ul')
    newMovie.appendChild(movie)
	inputField.value='';
}
let form=document.querySelector('form')
form.addEventListener('submit', addMovie)

// Finally, outside of the addMovie function, create a new function called deleteMovie that takes in an event parameter. When we click the button, we want to remove the entire list item. Since the button is a child of the list item, we can use event.target.parentNode.remove() to remove the entire list item. JavaScript knows what the target of this event is (the specific delete button that’s clicked) and will only get rid of that one button’s parent (the movie list item that holds the title and button). You should now have a functioning delete button on each movie you add!
function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted!"
    // message.addEventListener('click')
    
}
// In index.js, create a new function called crossOffMovie that takes in an event as a parameter. - Later, we will need to add this as an event handler for every movie title span.

// Call event.target.classList.toggle() passing in the checked class so that the class is added or removed if the title is clicked. (We want users to be able to “un-cross” movies off in case they did it by accident).

// Finally, we need to add this function as an event handler for every movie title. In the addMovie function, after you set the textContent of the span element, use addEventListener to listen for a click event on the span and run the crossOffMovie function.

// In the crossOffMovie function, we’re going to do something similar, but we want to have different messages based off of whether the movie was just checked off as ‘watched’ or if it was added back to the list. So let’s start by creating the structure for an if/else block. Put it below where you toggled the checked class in the crossOffMovie function.
function crossOffMovie(event){
    
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent='Watched'
    } else {
        message.textContent='Added back to the list'
    }
}


console.log("Hello there")