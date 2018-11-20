
// db.transformedPersons.createIndex({ location: "2dsphere" })

db.transformedPersons.aggregate([
    {
        $geoNear: {
            near: {
                type: "Point",
                coordinates: [-18.4, -42.8]
            },
            maxDistance: 200000,
            num: 10,
            query: { age: { $gt: 30 } },
            distanceField: "distance"
        }
    }
])