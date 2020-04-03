const express = require('express');

const tourController = require(`${__dirname}/../controllers/tourController`);

const router = express.Router();

/* router.param('id', tourController.checkID); */

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.addTour);
router
    .route('/:id')
    .get(tourController.getTourById)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = router;
