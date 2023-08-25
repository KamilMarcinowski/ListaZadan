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
        template.className = "element";

        const title = document.createElement("p")
        title.innerText = textToAdd.value;

        const deleteBtn = document.createElement("Button");
        deleteBtn.innerText = "X";
        deleteBtn.style.width = "30px";
        deleteBtn.style.height = "30px";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.float = "right";
        deleteBtn.style.position = "relative";
        deleteBtn.style.bottom = "30px";
        deleteBtn.style.left = "-15px";
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.border = "none";

        deleteBtn.addEventListener("click", DeleteElement);

        template.appendChild(title);
        template.appendChild(deleteBtn);
        contentDiv.appendChild(template);

        textToAdd.value = "";
        SaveData();
    }
}

function DeleteElement(e)
{
    window.onclick = e =>
    {
        if (e.target.parentElement.className == "element")
        {
            e.target.parentElement.remove();
        }
    }
}

function ClearList()
{
    contentDiv.innerHTML = "";
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