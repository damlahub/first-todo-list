let alertSection = document.querySelector("#alert-section");
let inputText = document.querySelector("#todo-input");
let addButton = document.querySelector("#add");
let removeButton = document.querySelector("#remove");

let ulDOM = document.querySelector(".list");

EventListeners();

function EventListeners(){
    addButton.addEventListener("click", TodoAdd);
    removeButton.addEventListener("click", TodoRemove);
}
function TodoAdd() {
        let liDOM = document.createElement("li");
        let alertDOM=document.createElement("p");
        let inputValue=inputText.value.trim();
        let alertValue=alertSection.value;
        console.log(alertValue);

        if(inputValue){
            liDOM.innerText = inputValue;
            ulDOM.appendChild(liDOM);
            inputText.value = " ";
        }
        else{
            alertDOM.innerText="Lütfen bir değer giriniz...";
            alertDOM.classList.add("alert");
            alertSection.append(alertDOM);
        }
}
//last element deleted.
function TodoRemove() {
    ulDOM.lastChild.remove();
}
