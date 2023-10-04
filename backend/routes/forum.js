const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');

const Post = require('../models/Post');
const Comment = require('../models/Comment');

const { body, validationResult } = require('express-validator');

// ROUTE 1: Add a new forumPost using: POST "/api/forum/createpost". Login required
router.post('/createpost', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 1 }),
    body('content', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { title, content } = req.body;
            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const newPost = new Post({ title, content });

            await newPost.save();

            res.json(newPost);

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


// ROUTE 2: Add a new comment on a post using: POST "/api/forum/comment/:postId". Login required
router.post('/createpost', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 1 }),
    body('content', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { text } = req.body;
            const { postId } = req.params;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const post = await Post.findById(postId);
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
              }

              const newComment = new Comment({ text, parentPost: postId });
    await newComment.save();
    post.comments.push(newComment);
    await post.save();
    res.json(newComment);

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 3: Get all the posts using: POST "/api/forum/getallposts". Login required
router.get('/getallposts', fetchuser, async (req, res) => {
        try {
            const posts = await Post.find().populate('comments');
            res.json(posts);

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

module.exports = router