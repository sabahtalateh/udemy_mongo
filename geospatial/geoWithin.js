db.places.find({
    location: {
        $geoWithin: {
            $geometry: {
                type: "Polygon",
                coordinates: [[p1, p2, p3, p4, p1]]
            }
        }
    }
})