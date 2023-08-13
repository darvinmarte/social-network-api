const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController');


router.route('/').get(getThought).post(createThought);


router
    .route('/:applicationId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);


module.exports = router;