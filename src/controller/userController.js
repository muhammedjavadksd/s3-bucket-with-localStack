const FileService = require("../service/FileService");
const S3BucketClientService = require("../service/S3BucketClient");
const Helpers = require("../util/helper");


class UserController {

    s3Service;
    fileService;

    constructor() {
        this.s3Service = new S3BucketClientService("file-bucket");
        this.fileService = new FileService();
        this.uploadImage = this.uploadImage.bind(this);
        this.generatePresignedUrl = this.generatePresignedUrl.bind(this);
    }

    async uploadImage(req, res, next) {
        const file = req.files.image;
        const url = req.body.presigned_url;

        const uploadImage = await this.fileService.uploadImageToS3Bucket(file, url);
        if (uploadImage) {
            res.status(201).json({ status: true, msg: "Image upload success" })
        } else {
            res.status(400).json({ status: false, msg: "Image uploaded failed" })
        }
    }


    async generatePresignedUrl(req, res) {
        const helper = new Helpers();
        let keysData = new Array(5).fill(5);
        for (let index = 0; index < keysData.length; index++) {
            const key = helper.generateKey()
            keysData[index] = key
        }

        for (let index = 0; index < keysData.length; index++) {
            const url = await this.s3Service.generatedPresignedUrl(keysData[index])
            keysData[index] = url
        }

        console.log("Output");
        console.log(keysData);
        if (keysData.length) {
            res.status(200).json({ url: keysData, status: true })
        } else {
            res.status(400).json({ status: false })
        }
    }
}

module.exports = UserController