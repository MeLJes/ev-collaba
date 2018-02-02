function sortByYear(films) {
    return films.sort(function(a, b) {
        return a.year - b.year;
    });
}
// sortByYear(filmsInJSON);


function filterByYears(films, minYear, maxYear) {
    if( minYear && !maxYear ) {
        return films.filter(function (film) {
            return film.year >= minYear;
        });
    }
    if( !minYear && maxYear ) {
        return films.filter(function (film) {
            return film.year <= maxYear;
        });
    }
    if( minYear && maxYear ) {
        return films.filter(function (film) {
            return film.year >= minYear && film.year <= maxYear;
        });
    }
    return films;
}
// filterByYears(filmsInJSON, null, 2005);


function getAmountByGenres(films) {
    return films.reduce(function (totalAmount, film) {
        totalAmount[film.genre] ? totalAmount[film.genre]++ : totalAmount[film.genre] = 1;

        return totalAmount;
    }, {} )
}
// getAmountByGenres(filmsInJSON);


function getTotalDuration(films) {
    return films.reduce(function (counter, film) {
        return counter + film.duration;
    }, 0);
}
// getTotalDuration(filmsInJSON);


function getTotalCommentsByFilm(films, filmId) {
    var getFilm = films.find(function (film) {
       return film.id === filmId;
    });

    return getFilm.comments.length;
}
// getTotalCommentsByFilm(filmsInJSON, 4);


function getCommentsByAuthorId(films, authorId) {
    return films.reduce(function (comments, film) {
        return comments.concat(
            film.comments.filter(function (comment) {
                return comment.authorId === authorId;
            })
        )
    }, []);
}
// getCommentsByAuthorId(filmsInJSON, 1001);


        function getRating (film) {
            var ratings = film.comments.map(function (comment) {
                return comment.rating;
            });

            // Get rating sum
            var ratingSum = ratings.reduce(function (a, b) {
                return a + b;
            }, 0);

            // Get average value
            return ratings.length ? parseFloat((ratingSum / ratings.length).toFixed(1)) : 0;
        }


function getRatingByFilmId(films, filmId) {
    var findingFilm = films.find(function (film) {
        return film.id === filmId;
    });

    return getRating(findingFilm);
}
// getRatingByFilmId(filmsInJSON, 1);


function sortByRating(films) {
    return films.sort(function (filmA, filmB) {
        return getRating(filmB) - getRating(filmA);
    })
}
// sortByRating(filmsInJSON);


function removeFilm(films, filmId) {
    return films.filter(function (film) {
        return film.id !== filmId;
    });
}
// removeFilm(filmsInJSON, 1);


function removeComment(films, filmId, commentId) {
    return films.map(function (film) {
        if( film.id === filmId ) {
            film.comments = film.comments.filter(function (comments) {
                return comments.id !== commentId;
            });
        }

        return film;
    });
}
// removeComment(filmsInJSON, 1, 5);


function addFilm(films, newFilm) {
    var filmsCopy = films.slice(0);
    newFilm.id = films.length + 1;
    newFilm.comments = [];

    filmsCopy.push(newFilm);
    return filmsCopy;
}
// addFilm(addFilm(filmsInJSON, { title: 'New Film', genre: 'documentary', director: 'Me lol', year: 2018, duration: 120 } ));


function addCommentToFilm(films, filmId, comment) {
    return films.map(function (film) {
        if( film.id === filmId ) {
            comment.id = film.comments.length + 1;
            film.comments.push(comment);
        }

        return film;
    });
}
// addCommentToFilm(filmsInJSON, 1, { authorId: '1001', authorName: 'Wally', text: 'Olololo', rating: 4 });


function updateFilmInfo(films, filmId, params) {
    return films.map(function (film) {
        if( film.id === filmId ) {
            film.title = params.title || film.title;
            film.genre = params.genre || film.genre;
            film.director = params.director || film.director;
            film.year = params.year || film.year;
            film.duration = params.duration || film.duration;
        }

        return film;
    });
}
// updateFilmInfo(filmsInJSON, 1, { title: 'New Film Name', genre: 'drama', director: 'Me lol', year: 2018, duration: 120 });


function updateComment(films, filmAndCommentId, newComment) {
    return films.map(function (film) {
        if( film.id === filmAndCommentId.filmId ) {
            film.comments.forEach(function (comment) {
                if( comment.id === filmAndCommentId.commentId ) {
                    comment.text = newComment;
                }
            });
        }

        return film;
    });
}
// updateComment(filmsInJSON, { filmId: 1, commentId: 3 }, 'New text comment');