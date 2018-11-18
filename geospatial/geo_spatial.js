db.places.insertMany([{
    "_id": ObjectId("5be6e015246352004c7a52b0"),
    "name": "The Field of Mars",
    "location": {
        "type": "Point",
        "coordinates": [
            30.3296337,
            59.9440512
        ]
    }
},
{
    "_id": ObjectId("5be6e897246352004c7a52b1"),
    "name": "Summer Garder",
    "location": {
        "type": "Point",
        "coordinates": [
            30.3314997,
            59.9446473
        ]
    }
},
{
    "_id": ObjectId("5be6e8bf246352004c7a52b2"),
    "name": "Teapot House",
    "location": {
        "type": "Point",
        "coordinates": [
            30.3314997,
            59.9446473
        ]
    }
},
{
    "_id": ObjectId("5be6e90d246352004c7a52b3"),
    "name": "Kazan Cathedral",
    "location": {
        "type": "Point",
        "coordinates": [
            30.3286996,
            59.938135
        ]
    }
}])

// Places near the point
db.places.find({
    location: {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [30.330776, 59.943070]
            },
            $maxDistance: 500,
            $minDistance: 10
        }
    }
})

// Places within the zone
const p1 = [30.32802, 59.944869];
const p2 = [30.330287, 59.941801];
const p3 = [30.335501, 59.94136];
const p4 = [30.332301, 59.945867];

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

// Add The Field of Mars area
db.areas.insertOne({
    "_id": ObjectId("5be6ec2eed744fc8e9822500"),
    "name": "The Field of Mars",
    "area": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    30.32802,
                    59.944869
                ],
                [
                    30.330287,
                    59.941801
                ],
                [
                    30.335501,
                    59.94136
                ],
                [
                    30.332301,
                    59.945867
                ],
                [
                    30.32802,
                    59.944869
                ]
            ]
        ]
    }
})

// Find areas that intersects the the point
db.areas.find({
    area: {
        $geoIntersects: {
            $geometry: {
                type: "Point",
                coordinates: [30.330465, 59.943586]
            }
        }
    }
})