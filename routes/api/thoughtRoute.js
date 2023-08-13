const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');


router.route('/').get(getThought).post(createThought);


router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);


router.route('thought/:thoughtId/reactions').post(addReaction);

router.route('thought/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;