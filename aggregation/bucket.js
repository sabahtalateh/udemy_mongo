// Bucket by boundaries
db.persons.aggregate([
    {
        $bucket: {
            groupBy: "$dob.age",
            boundaries: [0, 18, 30, 50, 80, 120],
            output: {
                numPersons: { $sum: 1 },
                averageAge: { $avg: "$dob.age" },
            }
        }
    }
])

// Auto bucket
db.persons.aggregate([
    {
        $bucketAuto: {
            groupBy: "$dob.age",
            buckets: 5,
            output: {
                numPersons: { $sum: 1 },
                averageAge: { $avg: "$dob.age" },
            }
        }
    }
])
