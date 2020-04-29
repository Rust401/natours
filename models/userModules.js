const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

//name email photo password passwordConfirm

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please tell us your name']
        },
        email: {
            type: String,
            required: [true, 'Plese provice your email'],
            unique: true,
            lowercase: true,
            validate: [validator.isEmail, 'Please provide a valid email']
        },
        photo: {
            type: String
        },
        password: {
            type: String,
            required: [true, 'Please provide a password'],
            minlength: 8
        },
        passwordConfirm: {
            type: String,
            required: [true, 'Please provide a password'],
            minlength: 8
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
