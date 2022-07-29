
//NODE GETTERS
let insideDive = document.getElementById('inside')
let jokeButton = document.getElementById('jokeButton')
let pTag = document.getElementById('pTag')
let likeButton = document.getElementById('like')
const button = document.querySelector(".heart-like-button");

//PAGE LOAD
document.addEventListener('DOMContentLoaded', getRandomJokes)

//EVENT LISTNERS
jokeButton.addEventListener('click', getRandomJokes)

//SHOWS LIKED HEART
button.addEventListener("click", () => {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
  } else {
    button.classList.add("liked");
  }
});

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
//RESETS HEART BUTTON
     if (button.classList.contains("liked")) {
        button.classList.remove("liked")}
};



