const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './../../config.env' });

const Tour = require('./../../models/tourModules');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
    //.connect(process.env.DATABASE_LOCAL, {
    .connect(DB, {
        useNewUrlParser: true,
        useCreatIndex: true,
        useFindAndModify: false
    })
    .then(() => cnonsole.log('DB connection successful!'));

/* READ FILE FROM JSON */
const tours = JSON.parse(fs.readFileSync('./tours-simple.json', 'utf-8'));

/* IMPORT DATA INTO MONGODB */
const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('Data loading successful');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

/* Delete data from mongodb */
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('Data deleting successful');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}
//importData();
console.log(process.argv);
