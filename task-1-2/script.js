function sortByYear(films) {
    return films.sort(function(a, b) {
        return a.year - b.year;
    });
}
//sortByYear(filmsInJSON);


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


        function getAverageRating(films, filmId) {
            var ratingCount, ratingSum, getTotalValue, getTotalRating, getTotalRatingParse;
            var holder = [];

            if( !filmId ) {
                films.forEach(function (film) {
                    film.comments.forEach(function (rating) {
                        holder.push(rating.rating);
                    });

                    ratingCount = holder.length;

                    // Get rating sum
                    ratingSum = holder.reduce(function (a, b) {
                        return a + b;
                    }, 0);

                    // Get average value
                    function averageRating(ratingSum, ratingCount) {
                        return (ratingSum / ratingCount).toFixed(1);
                    }
                    getTotalValue = averageRating(ratingSum, ratingCount);
                    getTotalRatingParse = parseFloat(getTotalValue);

                    if ( getTotalRatingParse >= 1 ) {
                        return getTotalRatingParse;
                    } else {
                        return 0;
                    }
                });
            } else {
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
                }, 0);

                // Get average value
                function averageRating(ratingSum, ratingCount) {
                    return (ratingSum / ratingCount).toFixed(1);
                }
                getTotalRating = averageRating(ratingSum, ratingCount);
                getTotalRatingParse = parseFloat(getTotalRating);

                if ( getTotalRatingParse >= 1 ) {
                    return getTotalRatingParse;
                } else {
                    return 0;
                }
            }
        }


function getRatingByFilmId(films, filmId) {
    // var ratingCount, ratingSum, getTotalRating, getTotalRatingParse;
    // var holder = [];
    //
    // films.forEach(function (film) {
    //     if( film.id === filmId ) {
    //         film.comments.forEach(function (rating) {
    //             holder.push(rating.rating);
    //         });
    //     }
    // });
    // ratingCount = holder.length;
    //
    // // Get rating sum
    // ratingSum = holder.reduce(function (a, b) {
    //     return a + b;
    // }, 0);
    //
    // // Get average value
    // function averageRating(ratingSum, ratingCount) {
    //     return (ratingSum / ratingCount).toFixed(1);
    // }
    // getTotalRating = averageRating(ratingSum, ratingCount);
    // getTotalRatingParse = parseFloat(getTotalRating);
    //
    // if ( getTotalRatingParse >= 1 ) {
    //     return getTotalRatingParse;
    // } else {
    //     return 0;
    // }

    getAverageRating(films, filmId);
}
//getRatingByFilmId(filmsInJSON, 1);


function sortByRating(films) {
    var ratingHolder = films.map(function (film) {
        var ratingCount, ratingSum, getTotalValue, getTotalRatingParse;
        var holder = [];

        film.comments.forEach(function (rating) {
            holder.push(rating.rating);
        });

        ratingCount = holder.length;

        // Get rating sum
        ratingSum = holder.reduce(function (a, b) {
            return a + b;
        }, 0);

        // Get average value
        function averageRating(ratingSum, ratingCount) {
            return (ratingSum / ratingCount).toFixed(1);
        }
        getTotalValue = averageRating(ratingSum, ratingCount);
        getTotalRatingParse = parseFloat(getTotalValue);

        if ( getTotalRatingParse >= 1 ) {
            return getTotalRatingParse;
            //console.log( film, getTotalRatingParse );
        } else {
            return 0;
            //console.log( film, 0 );
        }
    });

    console.log( ratingHolder );

    return ratingHolder.sort(function(a, b) {
        return a.getTotalRatingParse - b.getTotalRatingParse;
    });
}
//sortByRating(filmsInJSON);
//console.log( sortByRating(filmsInJSON) );