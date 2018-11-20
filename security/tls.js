// openssl req -newkey rsa:2048 -new -x509 -days 365 -nodes -out mongodb-cert.crt -keyout mongodb-cert.key
// cat mongodb-cert.key mongodb-cert.crt > mongodb.pem
//
// Run mongod
// mongod --sslMode requireSSL --sslPEMKeyFile /etc/ssl/mongo/mongodb.pem --sslDisabledProtocols 'none'
// Docker
// docker run -p 27017:27017 -v /Users/sabahtalateh/Code/udemy_mongo/pem/:/etc/ssl/mongo/ --name mongo-auth mongo --logpath /tmp/mongod.log --sslMode requireSSL --sslPEMKeyFile /etc/ssl/mongo/mongodb.pem --sslDisabledProtocols 'none'
//
// Connect
// mongo --ssl --sslCAFile /etc/ssl/mongo/mongodb.pem --host localhost
// docker exec -it mongo-auth mongo --ssl --sslCAFile /etc/ssl/mongo/mongodb.pem --host localhost
