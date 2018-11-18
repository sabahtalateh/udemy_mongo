// Find movies where rating greater than 9.2 and runtime grater than 100
db.movies.find({
    $and: [
        { "meta.rating": { $gt: 9.2 } },
        { "meta.runtime": { $lt: 100 } }
    ]
}).pretty()

// Genre equals to drama or genre equals to action
db.movies.find({
    $or: [
        { genre: "drama" },
        { genre: "action" }
    ]
}).pretty()

// Find movies where amount of visitors is greater than the expectedVisitors
db.movies.find({
    $expr: {
        $gt: ["$visitors", "$expectedVisitors"]
    }
}).pretty()