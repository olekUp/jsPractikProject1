"use strict"

const numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");
/* let movie1 = prompt("Один з останніх переглянутих фільмів?", "");
let rating1 = prompt("На скільки ви його оцінюєте?", "");
let movie2 = prompt("Ще один з останніх переглянутих фільмів?", "");
let rating2 = prompt("На скільки ви його оцінюєте?", ""); */

const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

const a = prompt("Один з останніх переглянутих фільмів?", ""),
      b = prompt("На скільки ви його оцінюєте?", ""),
      c = prompt("Один з останніх переглянутих фільмів?", ""),
      d = prompt("На скільки ви його оцінюєте?", "");

personalMovieBD.movies[a] = b;
personalMovieBD.movies[c] = d;

console.log(personalMovieBD)
console.log(personalMovieBD.movies)