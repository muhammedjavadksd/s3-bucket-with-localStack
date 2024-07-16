const FileService = require("../service/FileService");
const S3BucketClientService = require("../service/S3BucketClient");


class UserController{

    s3Service;
    fileService;

    constructor() {
        this.s3Service = new S3BucketClientService("demo");
        this.fileService = new FileService();
        this.uploadImage = this.uploadImage.bind(this);
        this.generatePresignedUrl = this.generatePresignedUrl.bind(this);
    }

    async uploadImage(req, res, next) {
        const file = req.files.image;
        const url = req.body.presigned_url;

        const uploadImage = await this.fileService.uploadImageToS3Bucket(file, url);
        if (uploadImage) {
            res.status(201).json({status:true, msg:"Image upload success"})
        } else {
            res.status(400).json({status:false, msg:"Image uploaded failed"})
        }
    }
    
    
    async generatePresignedUrl(req, res) {
        const generateURL = await this.s3Service.generatedPresignedUrl("abcd");
        if (generateURL) {
            res.status(200).json({ url: generateURL, status: false })
        } else {
            res.status(400).json({ status: false })
        }
    }
}

module.exports = UserController