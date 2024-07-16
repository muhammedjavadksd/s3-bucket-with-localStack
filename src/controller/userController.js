

class UserController{

    uploadImage(req, res, next) {
       
        res.status(200).json({status:"hello"})
    }
}

module.exports = UserController