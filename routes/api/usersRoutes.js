const router = require('express').Router();
const { getUsers, getOneUser, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/usersControllers');

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;