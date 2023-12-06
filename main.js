const entryContainer = document.querySelector(".entry-container");
const createBtn = document.querySelector(".btn");
let entry = document.querySelectorAll(".input-box");

function showEntry(){
    entryContainer.innerHTML = localStorage.getItem("entry");
}

showEntry();

function updateStorage(){
    localStorage.setItem("entry", entryContainer.innerHTML);
}
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "diaryapp-images/delete.png";
    entryContainer.appendChild(inputBox).appendChild(img);
})

entryContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        entry = document.querySelectorAll(".input-box");
        entry.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key == "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})