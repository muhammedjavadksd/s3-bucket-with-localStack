const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
// import { fromEnv } from '@aws-sdk/credential-providers';
const { fromEnv } = require("@aws-sdk/credential-provider-env")
const { getSignedUrl, getSignedUrlPromise } = require("@aws-sdk/s3-request-presigner")
const aws = require("@aws-sdk/client-s3")

class S3BucketClientService {

    s3Clint;
    bucket;

    constructor(bucket) {

        this.s3Clint = new S3Client({
            region: "us-east-1",
            endpoint: "http://localhost:4566",
            forcePathStyle: true,
            credentials: fromEnv(),

        })

        this.bucket = bucket
    }


    async generatedPresignedUrl(key) {
        try {

            const url = await getSignedUrl(this.s3Clint, new PutObjectCommand({
                Key: key,
                Bucket: this.bucket,
                ContentType: "image/jpeg",
                ACL: 'public-read'
            }), { expiresIn: 300000, responseContentDisposition: "inline" });
            // console.log(url);
            return url;
        } catch (e) {
            console.log("Error", e);
            return null
        }
    }

}

module.exports = S3BucketClientService;