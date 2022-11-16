const list = document.querySelector('ul')

fetch('http://localhost:3000/displayData')
    .then(data => data.json())
    .then(data => renderData(data))
    .catch(err => console.log(err))

function renderData(data) {
    data.forEach(cardData => {
        const li = document.createElement('li');
        li.innerHTML = (`
            <h4>${cardData.name}</h4>
            <p>${cardData.time}</p>
            <p>${cardData.date}</p>
        `);
        li.classList.add('card');
        list.appendChild(li);
    });
}