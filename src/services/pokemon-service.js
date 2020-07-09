const fs = require('fs');
const path = require('path');
const databaseConnection = require('../db/db');


/**
 * @description retourne tout les pokemons
 * @returns 
 */
function findAll() {
    return new Promise((resolve, reject) => {
        const query = `SELECT * from pokemons;`;

        databaseConnection.query(query, (error, results) => {
            if (error) {
                reject(error);
            }

            resolve(results)
        })
    });



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
