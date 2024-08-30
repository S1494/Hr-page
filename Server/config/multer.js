import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// Configuration
cloudinary.config({
  cloud_name: "dqhdq6ixx",
  api_key: "678714871761447",
  api_secret: "dxFYUUuldDttNeo7QfQI1sDIoXw",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "hrpageresume",
    format: async () => "pdf",
    public_id: (req, file) => file.originalname.split(".")[0] + Date.now(),
  },
});

const upload = multer({ storage: storage });

export default upload;
