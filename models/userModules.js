const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
            validate: {
                //This only works on CREATE & SAVE
                validator: function(el) {
                    return el === this.password;
                },
                message: 'Passwords are not the same'
            }
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

userSchema.pre('save', async function(next) {
    //Only run this function if password was actually modified
    if (!this.isModified('password')) return next();

    //Hash the passwd with cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    //Delete passwdConfirm field
    this.passwordConfirm = undefined;
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
