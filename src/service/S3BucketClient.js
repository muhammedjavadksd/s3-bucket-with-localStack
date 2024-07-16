const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
// import { fromEnv } from '@aws-sdk/credential-providers';
const { fromEnv } = require("@aws-sdk/credential-provider-env")
const {getSignedUrl} = require("@aws-sdk/s3-request-presigner")

class S3BucketClientService{

    s3Clint;
    bucket;

    constructor(bucket) {
        console.log("Region");
        console.log(process.env.AWS_REGION);
        this.s3Clint = new S3Client({
            region: "us-east-1",
            endpoint: "http://localhost:4566",
            forcePathStyle: true,
            credentials: fromEnv()
        })
        this.bucket= bucket
    }


    async generatedPresignedUrl(key) {
        try {
            const url = await getSignedUrl(this.s3Clint, new GetObjectCommand({ Bucket: this.bucket, Key: key }), { expiresIn: 300000, responseContentDisposition: "inline" });
            console.log(url);
            return url;
        } catch (e) {
            console.log("Error", e);
            return null
        }
    }
    
}

module.exports = S3BucketClientService;