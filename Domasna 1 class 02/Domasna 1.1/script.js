
let movies = ["gladiator", "matrix", "prometheus", "inception", "braveheart"];

let input = document.querySelector("#input");

let button = document.querySelector("#button");

let body = document.querySelector("body")

let h1 = document.createElement("h1");

button.addEventListener("click", function () {

    body.appendChild(h1)
    h1.innerHTML = ""
    for (let i = 0; i < movies.length; i++) {
        if (input.value.toLowerCase() === movies[i]) {

            h1.innerHTML = "The movie can be rented"
            h1.style.color = "green"
            return;
        }
    }

    h1.innerHTML = "The movie can't be rented"
    h1.style.color = "red"


})

