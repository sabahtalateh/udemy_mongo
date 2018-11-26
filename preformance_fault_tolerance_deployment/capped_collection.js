// For capped collection the insertion order is the same as the fetching order 
//  when calling find on a cllection
//
// size - max size in bytes, max - max documentns in collections
//
db.createCollection("capped", { capped: true, size: 10000, max: 3 })

db.capped.insertOne({name: "Alex"})
db.capped.insertOne({name: "Liza"})
db.capped.insertOne({name: "Andrew"})
db.capped.insertOne({name: "Roma"})
