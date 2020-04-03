const express = require('express');

const userController = require(`${__dirname}/../controllers/userController`);

const router = express.Router();

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.addUser);
router
    .route('/:id')
    .get(userController.getUserById)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
