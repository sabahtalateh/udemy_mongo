// mongod --auth
// mongo
// use admin
// db.createUser({user: 'admin', pwd: 'admin', roles: ["userAdminAnyDatabase"]})
// db.auth('admin', 'admin')
// db.createUser({user: "db_admin", pwd: "admin", roles: ["dbAdminAnyDatabase"]})
// db.createUser({user: "appdev", pwd: "dev", roles: [{role: "readWrite", db: "customers"}, {role: "readWrite", db: "sales"}]})
// Ctrl+C
// mongo -u appdev -p dev --authenticationDatabase customers
