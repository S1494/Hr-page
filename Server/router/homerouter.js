import express from "express";
import User from "../module/userSchema.js";
import upload from "../config/multer.js";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  return res.status(200).json({ message: "Received get req at home page" });
});

homeRouter.get("/signup", (req, res) => {
  return res.status(200).json({ message: "Received get req at SIGNUP page" });
});

homeRouter.post("/signup", upload.single("resume"), async (req, res) => {
  const { firstname, lastname, email, confirmpassword } = req.body;
  let { password } = req.body;
  let resume;
  const bcryptSalt = 10;

  try {
    if (!firstname) {
      return res.status(400).json({ message: "First name is required" });
    } else if (firstname.length < 3) {
      return res
        .status(400)
        .json({ message: "First Name must be at least 3 characters long" });
    }
    if (!lastname) {
      return res.status(400).json({ message: "Lastname is required" });
    } else if (lastname.length < 3) {
      return res
        .status(400)
        .json({ message: "Lastname must be at least 3 characters long" });
    }

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: "Email is invalid" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already Exist" });

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    } else if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    if (!confirmpassword) {
      return res.status(400).json({ message: "Confirm password is required" });
    }

    if (password !== confirmpassword) {
      return res
        .status(400)
        .json({ message: "Password and Confirm password must be same" });
    } else {
      password = await bcrypt.hash(password, bcryptSalt);
    }

    // const result = await cloudinary.uploader.upload(req.file.path, {
    //   folder: "resumes",
    // });

    let stream = cloudinary.uploader.upload_stream(
      {
        folder: "resume",
      },
      async (error, result) => {
        if (error) {
          return res.status(500).json({ message: "Failed to upload image" });
        }
        const nuser = new User({
          firstname,
          lastname,
          email,
          password,
          resume: result.public_id,
        });

        await nuser.save();
        res.status(200).json({
          status: 200,
          message: "You have successfully Submitted your resume",
          data: nuser,
        });
      }
    );

    streamifier.createReadStream(req.file.buffer).pipe(stream);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

export default homeRouter;
