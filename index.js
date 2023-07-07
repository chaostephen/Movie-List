//Movie list, add movies, check them off, or delete them with just a click

let message = document.querySelector('#message')

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


function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted!`
    // message.addEventListener('click')
    revealMessage();
    
    
}
function crossOffMovie(event){
    
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent= `${event.target.textContent} Watched`
    } else {
        message.textContent=`${event.target.textContent} added back to the list`
    }
    revealMessage();
}

function revealMessage(){
    message.classList.remove('hide')
    setTimeout(()=>message.classList.add('hide'),1000)

}

