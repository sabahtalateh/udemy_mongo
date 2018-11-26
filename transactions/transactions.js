// use blog

db.users.insertOne({ name: "Alex" })
db.posts.insertMany([
    { title: "First", userId: ObjectId("5bfbfe426b146f4ad4790195") },
    { title: "Second", userId: ObjectId("5bfbfe426b146f4ad4790195") }
])

const session = db.getMongo().startSession()
session.startTransaction()
const usersC = session.getDatabase("blog").users
const postsC = session.getDatabase("blog").posts

usersC.deleteOne({ _id: ObjectId("5bfbfe426b146f4ad4790195") })
// But when we execute db.user.find() the user will still be there because of
//  we are running command from different session
// Also delete all posts 
postsC.deleteMany({ userId: ObjectId("5bfbfe426b146f4ad4790195") })

// To persist changes run
session.commitTransaction()
