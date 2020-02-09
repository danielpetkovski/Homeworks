
let names = ["Trajce", "Petko", "Ace", "Marija", "Stefan"];


let button = document.querySelector("#button");

let list = document.querySelector("#list");



button.addEventListener("click", function (event){
    event.preventDefault();
    fillUp()
});

function fillUp() {
    for (let i = 0; i < names.length; i++) {
        let li = document.createElement("li");
        list.appendChild(li);
        li.innerHTML = names[i];
    }

}
