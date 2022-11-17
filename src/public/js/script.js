const list = document.querySelector('ul');
const modal = document.querySelector('#modal');
const editConfirm = document.querySelector('#editConfirm');
const editName = document.querySelector('#nameInput');
const editTime = document.querySelector('#timeInput');
editConfirm.addEventListener('click', event => handleEditConfirm(event))

let cards;
let deleteButtons;
let editButtons;

fetch('http://localhost:3000/displayData')
    .then(data => data.json())
    .then(data => renderData(data))
    .catch(err => console.log(err))



function renderData(data) {
    data.forEach(cardData => {
        const li = document.createElement('li');
        li.dataId = cardData._id;
        li.innerHTML = (`
            <h4>${cardData.name}</h4>
            <p>${cardData.time}</p>
            <p>${cardData.date}</p>
            <button class="delete">Delete</button>
            <button class="edit">Edit</button>
        `);
        li.classList.add('card');
        list.appendChild(li);
    });
    deleteButtons = Array.from(document.querySelectorAll(".delete"));
    deleteButtons.forEach(button => button.addEventListener('click', event => handleDeleteClick(event)));
    editButtons = Array.from(document.querySelectorAll(".edit"));
    editButtons.forEach(button => button.addEventListener('click', event => handleEditClick(event)));
}

function handleDeleteClick(event) {
    const dataId = event.target.parentElement.dataId;
    const url = `http://localhost:3000/deleteCard/${dataId}`
    fetch(url, { method: "DELETE" })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error");
            }   
            document.location.reload(true)
        })
        .catch(e => console.log(e))
}

function handleEditClick(event) {
    const dataId = event.target.parentElement.dataId;
    editConfirm.dataId = dataId;
    modal.style.display = "flex";
}

function handleEditConfirm(event) {
    const dataId = event.target.dataId;
    const url = `http://localhost:3000/editCard/${dataId}`;
    fetch(url, { 
        headers: {'Content-Type': 'application/json' },
        method: "PUT",
        body: JSON.stringify({ name: editName.value, time: editTime.value })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error");
            }
            document.location.reload(true)
        })
        .catch(err => console.log(err))
}
