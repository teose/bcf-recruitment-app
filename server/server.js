import express from "express";
import devBundle from "./devBundle";
import path from "path";
import template from "./../index";
import { MongoClient } from "mongodb";

const app = express();
devBundle.compile(app);
const CURRENT_WORKING_DIR = process.cwd();
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));
app.get('/', (req, res) => { res.status(200).send(template()) });

let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info(`server started on port $s.`, port)
});

const url = process.env.MONGODB_URI || 'mongodb+srv://magnaRecruiter:K<Jsfgjmhnbhbn!zA31@bcftestdb.whb3u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
MongoClient.connect(url, (err, db) => {
    console.log("Connected to mongo server");
    db.close();
});


