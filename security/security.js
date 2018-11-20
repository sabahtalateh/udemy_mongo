// - First of all you need to run mongo daemon with --auth flag
// mongod --auth
// 
// - Then login to the mongo shell and create first user with userAdminAnyDatabase role 
//  to be able to manage any database in the admin database
//
// use admin
db.createUser({ user: "alex", pwd: "alex", roles: ["userAdminAnyDatabase"] })
//
// Now you can authenticate as the user created
// 
// use admin
db.auth('alex', 'alex')
//
// The other way to login as a user from shell
// mongo -u alex -p alex --authenticationDatabase admin
//
// Then create a user for application
// use shop
db.createUser({ user: 'appdev', pwd: 'dev', roles: ["readWrite"] })
//
// Updating role
db.logout()
// use admin
db.auth("alex", "alex") // admin
// use shop
db.updateUser("appdev", { roles: ["readWrite", { role: "readWrite", db: "blog" }] })
//
//
//
//
//
//


