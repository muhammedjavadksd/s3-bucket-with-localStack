

class Helpers {


    generateKey() {
        const timestamp = new Date().toISOString().replace(/[:\-TZ.]/g, ''); // Format timestamp
        const randomSuffix = Math.random().toString(36).substring(7); // Random string for uniqueness
        const fileName = ".jpeg"; // Assuming 'file' is the File object from file input
      
        const key = `uploads/${timestamp}_${randomSuffix}_${fileName}`;
      
        return key;
    }
      
}

module.exports = Helpers;