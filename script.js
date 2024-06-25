const inputBox= document.getElementById("input-box");
const listContainer =document.getElementById("list-container");
const addButton=document.getElementById("add-button");
// defining button ka task

function addTask(){
    if(inputBox.value==''){
        alert("Add to kr bsdk");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7"; // adding the cross icon
        li.appendChild(span); // to display the cross icon
    }
    inputBox.value="";
    saveData();
}
// Add event listener for the click event on the add button
addButton.addEventListener("click",addTask);

// Add event listener for the keypress event on the input box
inputBox.addEventListener("keypress",function(e){
    if(e.key=== "Enter"){
        addTask();
    }
});
// click function and remove function

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// for saving data

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// to dispay this data whenever we open the website again

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data") || "";
}
showTask();