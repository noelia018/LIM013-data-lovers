import data from './data/pokemon/pokemon.js';

const pokemon = Object.values(data.pokemon);

const firstViewPokemons = document.getElementById('firstViewPokemons');

let allPokemons = '';
Object.values(pokemon).forEach((show) => {
  allPokemons += `
   <div id="allPokemons" class="allPokemons">
    <ul>
    <li>${show.num}</li>
    <li><img src="${show.img}"</li>
    <li>${show.name}</li>
    </ul>
    </div>
    `;
});
firstViewPokemons.innerHTML = allPokemons;

