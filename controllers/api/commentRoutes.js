const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const allComments = await Comment.findAll({});
    res.status(200).json(allComments);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
        ...req.body,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      },
    );
    console.log(newComment);

    if (!newComment) {
      res.status(404).json({ message: 'this is not the comment you are looking for...' });
      return;
    }

    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
