db.friends.aggregate([
    { $unwind: "$examScores" },
    { $project: { _id: 1, name: 1, age: 1, score: "$examScores.score" } },
    { $sort: { score: -1 } },
    // name: { $first: "$name" } - take the first name in the group
    { $group: { _id: "$_id", name: { $first: "$name" }, maxScore: { $max: "$score" } } }
])