const express = require('express')
const registerRouter = express.Router()
const bcrypt = require('bcryptjs')
const login_tb = require('../modals/login')
const register = require('../modals/register')





//Register api
registerRouter.post('/', async (req, res) => {
    const { email, password} = req.body
    try {
        const hashed = await bcrypt.hash(password, 10)
        if (!hashed) {
            return res.status(400).json({ message: "password hashing error!!!" })
        } else {
            const oldUser = await login_tb.findOne({ email })
            if (oldUser) {
                return res.status(400).json({ message: "user already exists" })
            } else {
                const loginData = await login_tb.create({ email, password: hashed })
                if (!loginData) {
                    return res.status(400).json({ message: "something went wrong" })
                } else {
                    const registerData = await register.create({ loginId: login_tb._id})
                    if (!registerData) {
                        return res.status(400).json({ message: "something went wrong" })
                    } else {
                        return res.status(200).json({ message: "Registration successful" })
                    }
                }
            }

        }
    } catch (error) {
        console.log(error);
        return res.status(404).json({ ERROR: error })

    }
})

module.exports = registerRouter