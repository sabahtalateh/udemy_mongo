db.numbers.insertOne({ a: 0.1, b: 0.3 })

db.numbers.aggregate([
    {
        $project: {
            result: { $subtract: ["$b", "$a"] }
        }
    }
])
//  "_id" : ObjectId("5bf442bf3163691f7d37a93c"), "result" : 0.19999999999999998 }

db.numbers.deleteMany({})

db.numbers.insertOne({
    a: NumberDecimal("0.1"),
    b: NumberDecimal("0.3"),
})

db.numbers.aggregate([
    {
        $project: {
            result: { $subtract: ["$b", "$a"] }
        }
    }
])
// { "_id" : ObjectId("5bf443d13163691f7d37a93d"), "result" : NumberDecimal("0.2") }
db.numbers.updateOne({}, { $inc: { a: NumberDecimal("0.1") } })
