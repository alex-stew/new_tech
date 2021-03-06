const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require("../utils/auth");

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/create-post', withAuth, (req, res) => {
  console.log("working")
    res.render('create-post', {
      logged_in: req.session.logged_in
    });
});


router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
            model: User,
            attributes: ['name','id'],
        },
        {
            model: Comment,
            attributes: ['content','id'],
            include: [
              {
                model: User,
                attributes: ['name','id'],
              }
            ]
        },
      ],
    });

    const post = postData.get({ plain: true });

    console.log(post);
    res.render('post', {
      ...post,
      logged_in: req.session.logged_in,
      current_user_id: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
