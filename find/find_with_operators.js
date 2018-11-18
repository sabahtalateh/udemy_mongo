db.sales.find({
    $expr: {
        $gt: [
            {
                $cond: {
                    if: { $gte: ["$v", 190] },
                    then: { $subtract: ["$v", 30] },
                    else: "$v"
                }
            },
            "$t"
        ]
    }
})