// let movie = {
//   title: "The dark knight rises",
//   year: 2012,
//   rate: 8.4,
// };
// console.log(movie);
// console.log(movie.rate);
// console.log(movie["rate"]);
// console.log(movie.director); // undefined

// let interests = ["basketball", "LOL", "gym"];
// interests.push("reading");
// console.log(interests[0].toLocaleUpperCase());
// console.log(interests[interests.length - 2].toLocaleUpperCase());
// console.log(interests[interests.length - 1].toLocaleUpperCase());

// let newMovie = {
//   title: "Tenet",
//   director: "Christopher Nolan",
//   year: 2020,
// };
// const information = prompt("What do you want to know about the movie");
// if (newMovie[information] == null || newMovie[information] == undefined) {
//   alert(`${information} is not in our data, we will update it now`);
//   newMovie[`${information}`] = prompt(`Enter the new data`);
// } else {
//   alert(`${newMovie[information]}`);
// }

// movie.rate = 8.7;
// movie.rate += 0.5;
// console.log(movie);

// updateInformation = prompt(
//   "Choose the data you want to update(title, year, rate)"
// );
// movie[`${updateInformation}`] = prompt("What do you want to chang it to");
// console.log(movie);

// let movie1 = {
//   name: `Mulan`,
//   year: 1998,
//   rate: 7.0,
// };

// let movie2 = {
//   name: `Inception`,
//   year: 2010,
//   rate: 8.8,
// };

// let movie3 = {
//   name: `Shawshank Redemption`,
//   year: 1995,
//   rate: 9.8,
// };

// let movies = [];
// movies.push(movie1);
// movies.push(movie2);
// movies.push(movie3);
// console.log(movies[0]);
// console.log(movies[2].name);
// for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i]);
// }
// for (let i=0; i<movies.length;i++){
//   movies[i].rate += 0.7
//   console.log(movies[i].rate)
// }

let movie = {
  title: "The Avengers",
  year: 2012,
  characters: ["Iron Man", "Captain American", "Black Widow", "Hulk"],
};
  console.log(movie)
movie.characters.push("Nick Furry");
  console.log(movie)
