const textToAdd = document.getElementById("toAdd");
const btnAdd = document.getElementById("Add");
const contentDiv = document.getElementById("content");


function Add()
{
    const template = document.createElement("div");
    template.style.width = "400px";
    template.style.height = "50px";
    template.style.backgroundColor = "white";
    template.style.borderRadius = "15px";
    template.style.marginTop = "10px";

    contentDiv.appendChild(template);
}

btnAdd.addEventListener("click", Add);