const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
// import { fromEnv } from '@aws-sdk/credential-providers';
const { fromEnv } = require("@aws-sdk/credential-provider-env")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner")
const aws = require("@aws-sdk/client-s3");
const { S3 } = require("aws-sdk");

class S3BucketClientService {

    s3Clint;
    bucket;

    constructor(bucket) {

        this.s3Clint = new S3Client({

            region: "us-east-1",
            endpoint: "http://localhost:4566",
            forcePathStyle: true,
            credentials: fromEnv(),
            // accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            // secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        })

        this.bucket = bucket
    }


    async generatedPresignedUrl(key) {
        try {

            const params = {
                Key: key,
                Bucket: this.bucket,
                ContentType: "image/jpeg",
                ACL: 'public-read'
            }
            console.log(this.bucket);
            // await getSignedUrlPromise("p")
            const url = await getSignedUrl(this.s3Clint, new GetObjectCommand({ Bucket: this.bucket, Key: key }, { expiresIn: 3600, responseContentDisposition: 'inline' })) //this.s3Clint.getSignedUrlPromise("putObject", params);
            console.log(url);
            return url;
        } catch (e) {
            console.log("Error", e);
            return null
        }
    }

}

module.exports = S3BucketClientService;