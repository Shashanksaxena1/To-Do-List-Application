const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");
listContainer.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveTask()
    }
})
function addTask(){
    if(inputBox.value === '')
    {
        alert("Enter Task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask()
}
function saveTask(){
    localStorage.getItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()