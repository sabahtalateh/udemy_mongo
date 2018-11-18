// For every person project gender, and fullName that made of
//  concatenated first and last name with first capital letter
db.persons.aggregate([
    {
        $project: {
            _id: 0,
            gender: 1,
            fullName: {
                $concat: [
                    { $toUpper: { $substrCP: ["$name.first", 0, 1] } },
                    {
                        $substrCP: [
                            "$name.first",
                            1,
                            { $subtract: [{ $strLenCP: "$name.first" }, 1] }
                        ]
                    },
                    " ",
                    { $toUpper: { $substrCP: ["$name.last", 0, 1] } },
                    {
                        $substrCP: [
                            "$name.last",
                            1,
                            { $subtract: [{ $strLenCP: "$name.last" }, 1] }
                        ]
                    },
                ]
            }
        }
    }
]).pretty()