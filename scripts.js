const inputItem = document.querySelector("#addNewItem");
const addItemButton = document.querySelector(".buttonPink");
const itemList = document.querySelector("#buttons-wrapper");
const alertBox = document.querySelector("#alertbox")
const closeAlertButton = document.querySelector("#alertbox img:last-child");

function createListItem(itemText) {
    const newItem = document.createElement("label"); 
    newItem.classList.add("shopping-item");
    newItem.querySelector('.delete-btn')?.addEventListener('click', (e) => {
        e.preventDefault(); 
        removeItem(newItem);
    });

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "shopping-items";

    const simpleId = itemText.toLowerCase().replace(/\s/g, '-');
    checkbox.value = simpleId;
    checkbox.id = simpleId;
    newItem.appendChild(checkbox);

    const customCheckboxImg = document.createElement("span"); 
    customCheckboxImg.classList.add("custom-checkbox");
    newItem.appendChild(customCheckboxImg);

    const itemName = document.createElement("span");
    itemName.textContent = itemText;
    newItem.appendChild(itemName);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("delete-btn");
    deleteButton.setAttribute("aria-label", "Remover item");

    const trashIcon = document.createElement("img");
    trashIcon.src = "assets/trash.svg"; 
    trashIcon.alt = ""; 
    deleteButton.appendChild(trashIcon);
    
    newItem.appendChild(deleteButton); 

    deleteButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        removeItem(newItem);
    });
    
    return newItem;
}

function showAlert() {
    alertBox.style.display = 'flex';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
}

function removeItem(itemElement) {
    itemElement.remove();
    showAlert();
}

function addItem() {
    const itemText = inputItem.value.trim();

    if (itemText) {
        const newItem = createListItem(itemText);
        itemList.appendChild(newItem);
        inputItem.value = "";
        inputItem.focus();
    }
}

addItemButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    addItem();
});

inputItem.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addItem();
    }
});

closeAlertButton.addEventListener("click", () => {
    alertBox.style.display = "none";
});

document.querySelectorAll('#buttons-wrapper .delete-btn').forEach(button => {
    const itemElement = button.closest('.shopping-item');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        removeItem(itemElement);
    });
});

console.log(alertBox)