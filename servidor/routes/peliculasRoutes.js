const express = require("express");
const router = express.Router();
const peliculasController = require("../controladores/peliculas");

router.get("/peliculas", peliculasController.getMovies);

router.get("/peliculas/:id", peliculasController.getMovieById);

router.get("/peliculas/:titulo", peliculasController.getFilteredMovies);

router.get("/generos", peliculasController.getGenders);

module.exports = router;