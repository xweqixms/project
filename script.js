"use strict";







let numberOfFilms;

function start() {
     numberOfFilms = +prompt('How nany movies did u see?', '');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How nany movies did u see?', '');
     }
}



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for(let i = 0; i < 2; i++){
        const a = prompt('What film did u see the last?','');
        const b = prompt('What mark of film?','');
        
        if(a != null && b != null && a !='' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('dassad');
        } else {
            i--;
        }
    }

}




function detectPersonalLevel() {
    if(numberOfFilms < 10)
    alert('Malo');
    else if(numberOfFilms >=10 && numberOfFilms <= 30)
        alert('Norm');
        else 
        alert('Kinoman');
}


function showMyBD() {
    if (personalMovieDB.privat != true) {
        console.log(personalMovieDB);
    } else {
        console.log("Error");
    }
}


function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`What is ur favourite genre? ${i}`); 
    }
}

console.log(personalMovieDB);

start();
detectPersonalLevel();
rememberMyFilms();
showMyBD();
writeYourGenres();
