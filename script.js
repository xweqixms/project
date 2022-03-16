"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How nany movies did u see?', '');
   
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How nany movies did u see?', '');
        }
   },
   detectPersonalLevel: function() {
    if(personalMovieDB.count < 10)
        alert('Malo');
    else if(personalMovieDB.count >=10 && personalMovieDB.count <= 30)
        alert('Norm');
        else 
        alert('Kinoman');
},
   rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('What film did u see the last?','');
        const b = prompt('What mark of film?','');
        
        if (a != null && b != null && a !='' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
},
    showMyBD: function(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
},
    toogleShowMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++){
            let genre = prompt(`What is ur favourite genre? ${i}`);

            if(genre == '' || genre == null) {
                i--;
            } else
                personalMovieDB.genres[i - 1] = genre;
             
        }
       
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre ${i + 1} is ${item};`);
        }) 
            
        
}
};


console.log(personalMovieDB);
console.log("ddasdasd");

