const fs = require('fs');
const path = require('path');


/**
 * @description retourne tout les pokemons
 * @returns 
 */
function findAll() {
    return readDB();
}

/**
 * @description Recherche par nom
 * @param {*} search
 * @returns 
 */
function searchByName(search) {
    const pokemons = readDB();

    return pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))
}



/**
 * @description Lecture de la base JSON
 * @returns 
 */
function readDB() {
    const dbPath = path.join(__dirname, '../db/pokedex.json')
    const pokedex = fs.readFileSync(dbPath);
    return JSON.parse(pokedex);
}


module.exports = {
    searchByName,
    findAll
};
