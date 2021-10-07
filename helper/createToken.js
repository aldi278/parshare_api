const jwt = require('jsonwebtoken')

module.exports = {
    createToken: (payload) => {
        return jwt.sign(payload,process.env.SECRET_KEY,{
            expiresIn: "12h"
        })
    }
}