const S3BucketClientService = require("../service/S3BucketClient");


class UserController{

    s3Service;

    constructor() {
        this.s3Service = new S3BucketClientService("demo")
        this.uploadImage = this.uploadImage.bind(this);
        this.generatePresignedUrl = this.generatePresignedUrl.bind(this);
    }

    uploadImage(req, res, next) {
        const file = req.files.image;


        res.status(200).json({status:"hello"})
    }


    generatePresignedUrl(req, res) {
        const generateURL = this.s3Service.generatedPresignedUrl("abcd");
        res.status(200).json({url:generateURL})
        
    }
}

module.exports = UserController