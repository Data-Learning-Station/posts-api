const joi = require('joi')
const { createValidator } = require('express-joi-validation')
const { Router } = require('express')
const { createPost, getAllPosts } = require('./database')

const validator = createValidator() 

const createSchema = joi.object({
    content: joi.string().required(),
    author: joi.string().required()
})

module.exports = Router()
    .get('/posts', async (req, res) => {
        try {
            const posts = await getAllPosts()
            res.json({
                message: null,
                posts
            })
        }
        catch(err) {

            console.error(err);

            res.status(500).json({
                message: "Internal Server error",
                posts: null
            })
        }
    })
    .post('/posts', validator.body(createSchema), async (req, res) => {
        try {

            const post = {
                author: req.body.author,
                avatar: "https://api.multiavatar.com/Binx%20Bond.png",
                content: req.body.content
            }

            const newPost = await createPost(post)

            
            res.json({
                message: null,
                post: newPost
            })
        }
        catch(err) {
            
            console.error(err);

            res.status(500).json({
                message: "Internal Server error",
                post: null
            })
        }
    })
