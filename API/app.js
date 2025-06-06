let url = "https://api.potterdb.com/v1/movies";

// fetch(url)
//   .then((response) => {
//     console.log(response);
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log("ERROR - ", err);
// });

async function getMovies() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
}
getMovies();