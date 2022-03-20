const sendError = (res, msg) => {
    res.send({success: false, message: msg})
}

module.exports = {
    registerValidate: (req, res, next) => {
        const {email, pass1, pass2} = req.body

        if(email.length > 20 || email.length < 4) return sendError(res, "Bad email")
        if(pass1.length > 20 || pass1.length < 5) return sendError(res, "Bad password")
        if(pass1 !== pass2) return sendError(res, "Passwords do not match")

        next()
    }
}