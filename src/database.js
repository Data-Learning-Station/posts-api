const { PrismaClient } = require("@prisma/client")

const { getRandomArbitrary } = require('./utils')

const prisma = new PrismaClient()

const createPost = async (post) => {

    return prisma.post.create({
        data: {
            content: post.content,
            author: {
                create: {
                    avatar: post.avatar,
                    name: post.author
                }
            },
            likes: getRandomArbitrary(3, 300),
            comments: getRandomArbitrary(3, 50),
            shares: getRandomArbitrary(3, 100),
        },
        select: {
            id: true,
            content: true,
            author: {
                select: {
                    name: true,
                    avatar: true,
                }
            },
            comments: true,
            likes: true,
            shares: true
        }
    })
}

const getAllPosts = async () => {
    return prisma.post.findMany({
        select: {
            id: true,
            content: true,
            author: {
                select: {
                    name: true,
                    avatar: true,
                }
            },
            comments: true,
            likes: true,
            shares: true
        }
    })
}

module.exports = {
    createPost,
    getAllPosts
}