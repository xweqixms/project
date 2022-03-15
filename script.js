"use strict";

const numberOfFilms = +prompt('How nany movies did u see?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gengers: [],
    privat: false  
};

const a = prompt('What film did u see the last?','');
const b = prompt('What mark of film?','');
const c = prompt('What film did u see the last?','');
const d = prompt('What mark of film?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);