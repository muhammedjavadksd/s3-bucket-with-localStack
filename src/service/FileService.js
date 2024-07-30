const S3BucketClientService = require("./S3BucketClient");

class FileService {


    async uploadImageToS3Bucket(file, presigned_url) {
        try {

            console.log(presigned_url);
            console.log(file);
            const request = await fetch(presigned_url, {
                method: "PUT",
                body: file,
                headers: {
                    'Content-Type': file.mimetype,
                }
            });

            console.log(request);
            // const response = await request.json();
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

module.exports = FileService