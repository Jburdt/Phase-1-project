
//NODE GETTERS
let insideDive = document.getElementById('inside')
let jokeButton = document.getElementById('jokeButton')
let pTag = document.getElementById('pTag')
let likeButton = document.getElementById('like')


//PAGE LOAD
document.addEventListener('DOMContentLoaded', getRandomJokes)

//EVENT LISTNERS
jokeButton.addEventListener('click', getRandomJokes)


//FETCH API JOKES 
function getRandomJokes() {
    const apiData = fetch('https://icanhazdadjoke.com/', {
       headers: {
           'Accept': 'application/json'
        }
    })
    
    .then(res => res.json())
    //gets the res and pass it to another function to .json and get json format and
    //get an object
    .then(apiData => pTag.innerText = apiData.joke)
    .catch(error => console.log(error, 'not working'))
  
}
 


}



