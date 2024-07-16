const { S3Client } = require("@aws-sdk/client-s3");
// import { fromEnv } from '@aws-sdk/credential-providers';
const {fromEnv} = require("@aws-sdk/credential-provider-env")

class S3BucketClientService{

    s3Clint;

    constructor() {
        this.s3Clint = new S3Client({
            region: "us-east-1",
            endpoint: "http://localhost:4566",
            forcePathStyle: true,
            credentials: fromEnv()
        })
    }
    
}