const S3BucketClientService = require("./S3BucketClient");

class FileService {

    s3BucketConfig;

    constructor() {
        this.s3BucketConfig = new S3BucketClientService();
    }

    uploadImageToS3Bucket(file) {
        const path="demo"
        this.s3BucketConfig
    }
}