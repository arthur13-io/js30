const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
        .then(blob => blob.json())
        .then(data => cities.push(...data))
        .catch(error => console.error('Fetch error', error));

function findMatch(wordToMatch, cities){
  return  cities.filter(place => {
        const regEx = new RegExp(wordToMatch, 'gi');
        return place.city.match(regEx) || place.state.match(regEx);
    });
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')
function displayMatches(){
    const matchArray = findMatch(this.value, cities);
    const html = matchArray.map(place => {
        return `
        <li>
            <span class="name">${place.city}, ${place.state}}</span>
            <span class="population>${place.population}</span>
        </li>
        `
    });
    suggestions.innerHTML = html;
}

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);