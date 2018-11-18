db.places.find({
    location: {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [30.3310903, 59.943983]
            },
            $maxDistance: 500,
            $minDistance: 10
        }
    }
})