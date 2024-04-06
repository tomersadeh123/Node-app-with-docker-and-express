const Post = require("../models/postModel");

// Controller function to get all posts
exports.getAllPosts = async (req, res, next) => {
    try {
        // Fetch all posts from the database
        const posts = await Post.find();
        
        // Send success response with fetched posts
        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: {
                posts
            }
        });
    } catch (err) {
        // Send error response if there's an error fetching posts
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Controller function to get one post by its ID
exports.getOnePost = async (req, res, next) => {
    try {
        // Find a post by its ID from the database
        const post = await Post.findById(req.params.id);
        
        // Send success response with the fetched post
        res.status(200).json({
            status: 'success',
            data: {
                post
            }
        });
    } catch (err) {
        // Send error response if there's an error fetching the post
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Controller function to create a new post
exports.createPost = async (req, res, next) => {
    try {
        // Create a new post using the request body
        const post = await Post.create(req.body);
        
        // Send success response with the created post
        res.status(200).json({
            status: 'success',
            data: {
                post
            }
        });
    } catch (err) {
        // Send error response if there's an error creating the post
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Controller function to update an existing post
exports.updatePost = async (req, res, next) => {
    try {
        // Find and update a post by its ID with the request body
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        
        // Send success response with the updated post
        res.status(200).json({
            status: 'success',
            data: {
                post
            }
        });
    } catch (err) {
        // Send error response if there's an error updating the post
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Controller function to delete a post by its ID
exports.deletePost = async (req, res, next) => {
    try {
        // Find and delete a post by its ID
        await Post.findByIdAndDelete(req.params.id);
        
        // Send success response if the post is deleted successfully
        res.status(200).json({
            status: 'success',
        });
    } catch (err) {
        // Send error response if there's an error deleting the post
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};
