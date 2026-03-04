// COUNTDOWN TIMER

const releaseDate = new Date("Mar 26, 2026 00:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();
const distance = releaseDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML =
days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";

},1000);



/* -------- TEASER BUTTON -------- */

function watchTeaser(){
window.open("https://youtu.be/KYuj9hffF20?si=vKI4nwewTmKfWQE1", "_blank");
}



/* -------- SONG BUTTON -------- */

function playSong(link){
window.open(link, "_blank");
}



/* -------- LOAD MOVIES FROM API -------- */

const url =
"https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY";

fetch(url)

.then(res => res.json())

.then(data => {

const moviesDiv = document.getElementById("movies");

data.results.forEach(movie => {

const card = document.createElement("div");

card.classList.add("movie-card");

card.innerHTML =
`<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
<h4>${movie.title}</h4>`;

moviesDiv.appendChild(card);


});

});