async function getRickAndMorty() {
    const api = "https://rickandmortyapi.com/api/character/1,2,555"
    const res = await fetch(api)
    const data = await res.json()

    return data
}

async function loadContent(e) {
    const character = await getRickAndMorty()
    e.preventDefault();

    const hash = window.location.hash;
    const content = document.getElementById("contenido");

    switch (hash) {
        case "#rick":
            content.innerHTML = `
            <div class="card">
            <img src=${character[0].image} width="200" height="200"/>
            <p>${character[0].name}</p>
            <span>${character[0].status}</span>
            </div>`;
            break;
        case "#morty":
            content.innerHTML = `
            <div class="card">
            <img src=${character[1].image} width="200" height="200"/>
            <p>${character[1].name}</p>
            <span>${character[0].status}</span>
            </div>`;
            break;
        case "#robot":
            content.innerHTML = `
            <div class="card">
            <img src=${character[2].image} width="200" height="200"/>
            <p>${character[2].name}</p>
            <span class="dead">${character[2].status}</span>
            </div>`;
            break;
        default:
            content.innerHTML = "<h2>Bienvenido Sergie Code!</h2>";
    }
}

window.addEventListener('load', loadContent);
window.addEventListener('hashchange', loadContent);