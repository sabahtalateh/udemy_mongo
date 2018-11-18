db.persons.aggregate([
    { $match: { gender: "female" } },
    { $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } } },
    { $sort: { totalPersons: -1 } }
])

// Group persons by gender, calc num of persons for each group and calculate 
//  average age in every group
db.persons.aggregate([
    { $match: { "dob.age": { $gt: 50 } } },
    {
        $group: {
            _id: { gender: "$gender" },
            numPersons: { $sum: 1 },
            avgAge: { $avg: "$dob.age" }
        }
    },
    { $sort: { numPersons: -1 } }
])

