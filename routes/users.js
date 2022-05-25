const router = require('express').Router();
const {
  getUsers,
  getCurrentUser,
  createUser,
  getUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');
const {
  validationUserId,
  validationUpdateUser,
  validationUpdateAvatar,
} = require('../middlewares/validations');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', validationUserId, getUser);
router.post('/', createUser);
router.patch('/me', validationUpdateUser, updateUser);
router.patch('/me/avatar', validationUpdateAvatar, updateAvatar);

module.exports.userRouter = router;
