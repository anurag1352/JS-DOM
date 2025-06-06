let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getFact();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";

// // fetch(url)
// //   .then((response) => {
// //     console.log(response);
// //     return response.json()
// // })
// // .then((data) => {
// //     console.log(data);
// // })
// // .catch((err) => {
// //     console.log("ERROR - ", err);
// // });

// // async function getMovies() {
// //     let res = await fetch(url);
// //     let data = await res.json();
// //     console.log(data);
// // }
// // getMovies();


// //          AXIOS.
// async function getFact() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch(e) {
//         console.log("error - ", e);
//         return "NO fact found";
//     }
// }
// getFact();

//RANDOM DOG IMAGE.

let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let link = await getImage();
    //console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src".link);
})


async function getImage() {
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }catch(e) {
        console.log("error - ", e);
        return "NO Image found";
    }
}
getImage();
