// movies that have more than 3 genres
db.movies.find({ genre: { $size: 3 } }).pretty()

// aired in 2018
db.movies.find({ "meta.aired": 2018 }).pretty()

// ratings array has element which is greater than 8 and less than 10
db.movies.find({ ratings: { $elemMatch: { $gt: 8, $lt: 10 } } }).pretty()