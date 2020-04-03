const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

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
    .then(() => console.log('DB connection successful!'));

/* const testTour = new Tour({
    name: 'The Forest Hiker u',
    rating: 4.8,
    price: 497
});

testTour
    .save()
    .then(doc => {
        console.log(doc);
    })
    .catch(err => {
        console.log('ERROR 👺:', err);
    }); */

const app = require(`${__dirname}/app`);

const port = process.env.PORT || 9910;

app.listen(port, () => {
    console.log(`app running on port ${port}...`);
});
