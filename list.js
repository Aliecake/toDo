
let list = [];

function todoList() {
    list.push(` ${prompt('Add to your list')}`);
    viewAll();
}

function viewAll() {
    deleteAll();
    list.forEach( (item) => {
        document.getElementById("list").innerHTML += `<li> ${item}`;
    });
    
    let liList = document.querySelectorAll("li");

    for (let jj = 0; jj < liList.length; jj++) {
        liList[jj].addEventListener("mouseover", () =>{
            liList[jj].classList.add("mouseover");
        })
        liList[jj].addEventListener("mouseout", () =>{
            liList[jj].classList.remove("mouseover");
        })
        liList[jj].addEventListener("click", () =>{
            liList[jj].classList.toggle("done");
        })
    }
}

function deleteAll() {
    document.getElementById("list").innerHTML = "";
}
function deleteOne() {
    let deleteMe = parseInt(prompt("Which item would you like to delete?"));
    
    for (let ii = 0; ii < list.length; ii ++) {
        if (deleteMe - 1 === ii) {
            list.splice(ii, 1);
        }
    }
    deleteAll();
    viewAll();
}