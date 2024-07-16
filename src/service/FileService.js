const S3BucketClientService = require("./S3BucketClient");

class FileService {

    
    async uploadImageToS3Bucket(file,presigned_url) {
        try {
            
            const request = await fetch(presigned_url, {
                method: "PUT",
                body: file,
                headers: {
                    'Content-Type': file.type,
                }
            });
            const response = await request.json();
            if (!request.ok) {
                throw new Error("Upload image failed")
            }
            console.log("Upload success");
            return true
        } catch (e) {
            console.log("Upload image failed");
            console.log(e);
        }
    }
}

module.exports= FileService