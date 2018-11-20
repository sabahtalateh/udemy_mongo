// Get 1 element of examScores starting from element number 2
db.friends.aggregate([
    {
        $project: {
            _id: 0,
            examScore: { examScore: { $slice: ["$examScores", 2, 1] } },
            numScores: { $size: "$examScores" }
        }
    }
])