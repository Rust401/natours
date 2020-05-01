const User = require('../models/userModules');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();

    //SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    });
});

exports.addUser = (req, res) => {
    res.status(500).json({
        status: 'fail',
        message: 'router not define yet'
    });
};

exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'fail',
        message: 'router not define yet'
    });
};

exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'fail',
        message: 'router not define yet'
    });
};

exports.getUserById = (req, res) => {
    res.status(500).json({
        status: 'fail',
        message: 'router not define yet'
    });
};
