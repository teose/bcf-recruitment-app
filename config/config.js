import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb+srv://magnaRecruiter:hjasmmbgGFDFDb21@bcftestdb.whb3u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const testConnect = MongoClient.connect(url, (err, db) => {
    console.log("Connected to mongo server");
    db.close();
});

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "secret_key",
    mongoUri: testConnect

};
export default config;