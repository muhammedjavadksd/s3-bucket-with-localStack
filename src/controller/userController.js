

class UserController{

    uploadImage(req, res, next) {
        const file = req.files.image;

        
        res.status(200).json({status:"hello"})
    }
}

module.exports = UserController