import multer from "multer";
import { resolve, join } from "path";
import crypto from "crypto";

export default {
  upload(folder: string) {
    const destinationPath = resolve(__dirname, "..", "..", folder)
    return {
      storage: multer.diskStorage({
        destination: destinationPath,
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};
