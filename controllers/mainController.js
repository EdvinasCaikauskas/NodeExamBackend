const userSchema = require("../schemas/userSchema")
const postSchema = require("../schemas/postSchema")
const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const {email, pass1: password} = req.body

        const hash = await bcrypt.hash(password, 10)

        const user = new userSchema()
        user.email = email
        user.password = hash
        await user.save()

        res.send({success: true})
    },


    login: async (req, res) => {
        const {email, password} = req.body

        const myUser = await userSchema.findOne({email})

        const compareResult = await bcrypt.compare(password, myUser.password)

        if (compareResult) {
            return res.send({success: true, user: {email, id: myUser._id}})

        }
        res.send({success: false, message: "Bad email or password"})
    },
    upload: async (req, res) => {
        const {photo, city, price, description, email} = req.body

        const post = new postSchema()
        post.photo = photo
        post.city = city
        post.price = price
        post.description = description
        post.owner = email
        await post.save()

        res.send({success: true})
    },
    getAll: async (req, res) => {
        const posts = await postSchema.find()

        res.send({success: true, posts})
    },
    search: async (req, res) => {
        const {city} = req.body

        const posts = await postSchema.find({city})

        res.send({success: true, posts})
    }
}