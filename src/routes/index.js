var express = require('express');
var router = express.Router();

const pokedexController = require('../controllers/pokedex-controller');

/* GET home page. */
router.get('/', pokedexController.renderPokedexList);
/* POST search */
router.post('/search', pokedexController.nameControl ,pokedexController.renderPokedexSearch);

module.exports = router;
