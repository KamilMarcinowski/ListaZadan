const textToAdd = document.getElementById("toAdd");
const btnAdd = document.getElementById("Add");
const contentDiv = document.getElementById("content");

LoadData();

function Add()
{
    if (textToAdd.value != "")
    {
        const template = document.createElement("div");
        template.style.width = "400px";
        template.style.height = "50px";
        template.style.backgroundColor = "white";
        template.style.borderRadius = "15px";
        template.style.marginTop = "10px";
        template.style.cursor = "pointer";

        const title = document.createElement("p")
        title.innerText = textToAdd.value;

        template.appendChild(title);
        contentDiv.appendChild(template);

        textToAdd.value = "";
        SaveData();
    }
}

function SaveData()
{
    localStorage.setItem("data", contentDiv.innerHTML);
}

function LoadData()
{
    contentDiv.innerHTML = localStorage.getItem("data");
}

btnAdd.addEventListener("click", Add);