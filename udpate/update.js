// Upsert means that if there is no element with specified name, it will be created
db.sports.updateOne({name: "Lonely runner"}, {"requiresTeam": false}, {upsert: true})

db.sports.updateOne({name: "Runner with friends"}, {$set: {"requiresTeam": false}}, {upsert: true})

db.sports.updateOne({name: "Runner with friends"}, {$set: {minPlayers: 200000000}})

// increment existing value
db.sports.updateMany({minPlayers: {$exists: true}}, {$inc: {minPlayers: 10}})
