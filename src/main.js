import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import pokemon from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.table(data.pokemon);

//for (let i=0) 

fetch('https://raw.githubusercontent.com/noelia018/LIM013-data-lovers/master/src/data/pokemon/pokemon.json')
  .then((response)=> response.json())
  .then((data) => {
    const dataPokemon = data.pokemon;
    console.log(dataPokemon);
  

    let container = document.getElementById("container-result");
  const showAll = document.getElementById("root");

  //CONTENEDOR DONDE MOSTRAREMOS LA INFO
  const createCards = (data) => {
    let pokemonCard ='';
  //RECORREMOS EL ARRAY 
  data.forEach(pokemon => {
  //CREAMOS LA TARJETA CON LOS ELEMENTOS DEL ARRAY
  let card = `
  
  <div class="card" >
  <div class="card-body">
  <img src="${ pokemon.img }"/><br>
  <b>Nº </b>${ pokemon.num }<br>
  <b>${ pokemon.name }</b><br>
  <b>Tipo </b><br> ${ pokemon.type }</b><br>
  <b>Debilidades </b><br> ${ pokemon.weaknesses }<br>
  <b>Huevos </b><br> ${pokemon.egg }</b><br><br>
  </div>
  </div>
  </div>
  `;
  pokemonCard += card;
  })
  showAll.innerHTML=pokemonCard;
  }
  //MOSTRAMOS LA DATA DESDE EL JSON
  createCards(dataPokemon)
});