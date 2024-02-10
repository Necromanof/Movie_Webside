// const reponse = await fetch("https://api.themoviedb.org/3/movie/550?api_key=fc5a65cd7275c2e36792f5cb0ab79f5f");
// const films = await reponse.json();
// console.log(films);

const API_LINK = "https://api.themoviedb.org/3/discover/movie";
const SEARCHBAR_API = "https://api.themoviedb.org/3/search/movie";
const MOVIE_IMG = "https://image.tmdb.org/t/p/w1280";
const MOVIE_OVERVIEW = "https://api.themoviedb.org/3/movie/";
const MY_API_KEY = "fc5a65cd7275c2e36792f5cb0ab79f5f";

const main = document.getElementById("main");
const SearchBar = document.getElementById("search");
const form = document.getElementById("form");

getmovies(API_LINK);

// Get a movie

async function getmovies(url){
    try{
        const response = await fetch(url)
        const  data = await response.json()
        showMovies(data.results);  
    } catch (error) {
        console.log('Error:', error);
    }
}

function showMovies(movies){
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { title, poster_path, overview } = movie;
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie")
        movieElement.innerHTML = `
        <img src="${MOVIE_IMG + poster_path}" alt="${title}"/>
        <div class="movie_info">
            <h3 class="title">${title}</h3>
        </div>
        <div class="overview">
            <h3 class="title">Synopsis</h3>
            <h2 class="title"><a href="#">${title}</a></h2>
            <p>${overview}</p>
        </div>
        `;
        main.appendChild(movieElement);
        
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const UserSearch = search.value.trim();

    if (UserSearch){
        const url = `${SEARCHBAR_API}?api_key=${MY_API_KEY}&query=${UserSearch}`;
        getmovies(url);
    } else {
        alert ("Please enter a movie title");
    }
});