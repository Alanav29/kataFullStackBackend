const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");

const getMovies = asyncHandler(async (req, res) => {
	const movies = await Movie.find();
	// verificar si envia todas las peliculas
	res.status(200).json(movies);
});

const setMovie = asyncHandler(async (req, res) => {
	if (!req.body.title) {
		res.status(400);
		throw new Error("Por favor agrega el titulo de la pelicula");
	}

	if (await Movie.find({ title: req.body.title })) {
		res.status(400);
		throw new Error("Ya existe una pelicula con ese titulo");
	}

	if (!req.body.overview) {
		res.status(400);
		throw new Error("Por favor agrega la sinopsis  de la pelicula");
	}

	if (!req.body.release_date) {
		res.status(400);
		throw new Error("Por favor agrega la fecha de estreno de la pelicula");
	}

	if (!req.body.poster) {
		res.status(400);
		throw new Error("Por favor agrega la URL del poster de la pelicula");
	}

	const movie = await Movie.create({
		title: req.body.title,
		overview: req.body.overview,
		release_date: req.body.release_date,
		poster: req.body.poster,
	});

	res.status(201).json({ movie });
});

const updateMovie = asyncHandler(async (req, res) => {
	const movie = await Movie.findById(req.params.id);
	if (!movie) {
		res.status(400);
		throw new Error("La pelicula no fué encontrada");
	}

	const movieUpdated = await Movie.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.status(200).json(movieUpdated);
});

const deleteMovie = asyncHandler(async (req, res) => {
	const movie = await Movie.findById(req.params.id);
	if (!movie) {
		res.status(400);
		throw new Error("La pelicula no fué encontrada");
	}

	await movie.deleteOne();

	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getMovies,
	setMovie,
	updateMovie,
	deleteMovie,
};
