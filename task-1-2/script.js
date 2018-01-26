// Sort by year
function sortByYear(films) {
    return films.sort(function(a, b) {
        return a.year - b.year;
    });
}
//sortByYear(filmsInJSON);


// Filter by years
function filterByYears(films, minYear, maxYear) {
    var argument = arguments.length;

    if( argument === 1 ) {
        return films;
    }
    if( argument === 2 ) {
        return films.filter(function (film) {
            return film.year >= minYear;
        });
    }
    if( minYear && maxYear ) {
        return films.filter(function (film) {
            return film.year >= minYear && film.year <= maxYear;
        });
    }
    return films.filter(function (film) {
        return film.year <= maxYear;
    });
}
//filterByYears(filmsInJSON, null, 2005);


// Get amount by genres
function getAmountByGenres(films) {
    var genreArr = {};

    films.forEach(function (film) {
        if( !genreArr[film.genre] ) {
            genreArr[film.genre] = 1;
        } else {
            genreArr[film.genre]++;
        }
    });

    return genreArr;
}
//getAmountByGenres(filmsInJSON);


// Get total duration
function getTotalDuration(films) {
    var holder = [];

    // Get all durations
    films.forEach(function (film) {
        holder.push(film.duration);
    });

    // Get sum
    return holder.reduce(function (a, b) {
        return a + b;
    });
}
//getTotalDuration(filmsInJSON);


// Get total comments by film
function getTotalCommentsByFilm(films, filmId) {
    var holder;

    films.forEach(function (film) {
        if( film.id === filmId ) {
            holder = film.comments.length;
        }
    });

    return holder;
}
//getTotalCommentsByFilm(filmsInJSON, 4);


// Get comments by author ID
function getCommentsByAuthorId(films, authorId) {
    var holder = [];

    films.forEach(function (film) {
        film.comments.forEach(function (comment) {
            if( comment.authorId === authorId ) {
                holder.push(comment);
            }
        });
    });

    return holder;
}
//getCommentsByAuthorId(filmsInJSON, 1001);


// Get rating byt film ID
function getRatingByFilmId(films, filmId) {
    var ratingCount, ratingSum;
    var holder = [];

    films.forEach(function (film) {
        if( film.id === filmId ) {
            film.comments.forEach(function (rating) {
                holder.push(rating.rating);
            });
        }
    });
    ratingCount = holder.length;

    // Get rating sum
    ratingSum = holder.reduce(function (a, b) {
        return a + b;
    });

    // Get average value
    function averageRating(ratingSum, ratingCount) {
        return (ratingSum / ratingCount).toFixed(1);
    }

    return averageRating(ratingSum, ratingCount);
}
//getRatingByFilmId(filmsInJSON, 1);