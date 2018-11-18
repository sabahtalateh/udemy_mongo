db.comp.insertOne({
    _id: "c1",
    name: "Comp 1"
})

db.comp.find().pretty()

db.comp.insertMany([
    {
        _id: "c1",
        name: "Comp 1"
    },
    {
        _id: "c2",
        name: "Comp 2"
    },
])

db.comp.find().pretty()
// Only one company is shown because of insertion process fails
//  on the first entry

db.comp.insertMany([
    {
        _id: "c1",
        name: "Comp 1"
    },
    {
        _id: "c2",
        name: "Comp 2"
    },
], { ordered: false })
db.comp.find().pretty()
// Both companies are shown now. "FIXED!" can be deployed to production right now)

db.comp.insertOne({
    name: "Comp 5"
}, { w: 1, j: 0 })
// Not guaranteed journaling

db.comp.insertOne({
    name: "Comp 6"
}, { w: 1, j: 1 })
// Guaranteed journaling