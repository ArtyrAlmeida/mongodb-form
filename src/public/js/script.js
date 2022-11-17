const list = document.querySelector('ul');
const cardsInfo = [];
let cards;
let deleteButtons;

fetch('http://localhost:3000/displayData')
    .then(data => data.json())
    .then(data => renderData(data))
    .catch(err => console.log(err))



function renderData(data) {
    data.forEach(cardData => {
        cardsInfo.push(cardData);
        const li = document.createElement('li');
        li.dataId = cardData._id;
        li.innerHTML = (`
            <h4>${cardData.name}</h4>
            <p>${cardData.time}</p>
            <p>${cardData.date}</p>
            <button class="delete">Delete</button>
        `);
        li.classList.add('card');
        list.appendChild(li);
    });
    deleteButtons = Array.from(document.querySelectorAll(".delete"));
    deleteButtons.forEach(button => button.addEventListener('click', event => handleDeleteClick(event)));
}

function handleDeleteClick(event) {
    const dataId = event.target.parentElement.dataId
    const url = `http://localhost:3000/deleteCard/${dataId}`
    fetch(url, { method: "DELETE" })
        .then(response => {
            console.log('aaa');
            if (!response.ok) {
                throw new Error("Error");
            }   
            document.location.reload(true)
        })
        .catch(e => console.log(e))
}

