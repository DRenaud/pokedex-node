const pokemonService = require('../services/pokemon-service');

/**
 * @description Rendu de la page avec tous les pokemons
 * @param {*} req
 * @param {*} res
 * @param {function} next
 */
function renderPokedexList(req, res, next) {
    const pokemons = pokemonService.findAll();

    res.render('index', {
        title: 'Pokedex',
        pokemons,
        search: null,
        searchError: null,
    });
}

/**
 * @description Rendu de la page de recherche
 * @param {*} req
 * @param {*} res
 * @param {function} next
 */
function renderPokedexSearch(req, res, next) {
    const search = req.body.search;
    const pokemons = pokemonService.searchByName(search);

    res.render('index', {
        title: 'Pokedex',
        pokemons,
        search,
        searchError: null,
    });
}

/**
 * @description Si la recherche est vide ou valide, on passe à la suite
 * @param {*} req
 * @param {*} res
 * @param {function} next
 */
function nameControl(req, res, next) {
    const search = req.body.search;

    if (!search || isNaN(search)) {
        next();
    } else {
        res.render('index', {
            title: 'Pokedex',
            pokemons: [],
            search,
            searchError: 'La recherche ne peut pas être faite avec un nombre.',
        });
    }
}

module.exports = {
    renderPokedexList,
    renderPokedexSearch,
    nameControl,
};
