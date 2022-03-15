"use strict";

const numberOfFilms = +prompt('How nany movies did u see?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gengers: [],
    privat: false  
};

if(numberOfFilms < 10)
    alert('Malo');
    else if(numberOfFilms >=10 && numberOfFilms <= 30)
        alert('Norm');
        else 
        alert('Kinoman');


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



console.log(personalMovieDB);


