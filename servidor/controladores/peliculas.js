const peliculaRepositorio = require("../repositories/Pelicula");

exports.getMovies = async (req, res) => {

  try {

    const peliculas = await peliculaRepositorio.getAllMovies();
    res.status(200).json({peliculas : peliculas});

  } catch (error) {

    res.status(500).json({ msg: error });

  }
};

exports.getMovieById = async (req, res) => {

  const peliculaId = req.params.id;


  try {

    const peliculas = await peliculaRepositorio.getById(peliculaId);
    console.log(peliculas.titulo);

    res.status(200).json(
      {
        pelicula : peliculas[0]            
      }
    );

  } catch (error) {

    res.status(500).json({ msg: error });

  }
};

exports.getGenders = async (req, res) => {

  try {
    
    const generos = await peliculaRepositorio.getAllGenders();

    res.status(200).json({generos : generos});

  } catch (error) {

    res.status(500).json({ msg: error });

  }
};

exports.getFilteredMovies = async (req, res) => {

  const anio = req.params.anio;
  const titulo = req.params.titulo
  const genero = req.params.genero;
  

  try {

    const filteredMovies = await peliculasRepo.filterMovies(anio, titulo, genero);

    if (filteredMovies.length === 0) {
      return res.status(404).json({
        msg: "no se encontraron peliculas con los datos especificados",
      });
    }

    res.status(200).json(filteredMovies);

  } catch (error) {

    return res.status(500).json({ msg: "fallo el controlador" });

  }
};