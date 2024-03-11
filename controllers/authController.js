import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import randomstring from "randomstring";

let emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
let passwordRegex = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;

const formatDatatoSend = (user) => {
  const access_token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
  return {
    access_token,
    name: user?.name,
    email: user?.email,
    paymentStatus:user?.paymentStatus,
  };
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json(formatDatatoSend(user));
    // console.log(res);
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const registerController = async (req, res) => {
  try {
    const {
      email,
      password,
      name,
      phone,
      city,
      gender,
      state,
      department,
      college,
      currentYear,
    } = req.body;

    if (!email) {
      return res.status(403).json({ message: 'Email is required' });
    }

    if (password.length < 8) {
      return res.status(403).json({
        message: 'Password must be at least 8 characters long',
      });
    }

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;
    let hasSpecialChar = false;

    for (const char of password) {
      if (char >= 'A' && char <= 'Z') {
        hasUpperCase = true;
      } else if (char >= 'a' && char <= 'z') {
        hasLowerCase = true;
      } else if (char >= '0' && char <= '9') {
        hasDigit = true;
      } else {
        hasSpecialChar = true;
      }
    }

    if (!(hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar)) {
      return res.status(403).json({
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character',
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'User already exists with this email.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let newUser;

    if (department === 'Other') {
      const { customDepartment } = req.body;
      newUser = new User({
        email,
        password: hashedPassword,
        name,
        phone,
        city,
        gender,
        state,
        department: customDepartment,
        college,
        currentYear,
      });
    } else {
      newUser = new User({
        email,
        password: hashedPassword,
        name,
        phone,
        city,
        gender,
        state,
        department,
        college,
        currentYear,
      });
    }

    try {
      const savedUser = await newUser.save();
      res
        .status(201)
        .json({ user: savedUser, message: 'User registered successfully.' });
    } catch (error) {
      if (error.code === 11000 && error.keyPattern.phone) {
        return res
          .status(400)
          .json({ message: 'Phone number is already registered.' });
      } else {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const randomString = randomstring.generate();
      const updateData = await User.updateOne(
        { email },
        { $set: { token: randomString } }
      );
      resetPassword(user.name, user.email, randomString);
      res.status(200).send({
        success: true,
        message:
          "Mail for password reset has been sent to your entered email address!",
      });
    } else {
      res
        .status(500)
        .send({ success: false, message: "Password reset failed" });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to reset password, please try again",
    });
  }
};

const resetPassword = async (name, email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset.",
      html: `<div> Hi <b>${name}</b>. Please click on the below button to reset your password. </div>
      <a style="text-decoration:none; display:inline-block; text-align:center; padding:5px 10px; height:auto; width:auto; background-color:green; color:white; font-weight:700; margin-top:5px; margin-left:4px; border-radius:3px;" href="http://localhost:3000/api/v1/auth/reset-password?token=${token}"> RESET </a>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Mail has been sent successfully.", info.response);
      }
    });
  } catch (error) {
    error.status(400).send({
      success: true,
      message: error.message,
    });
  }
};

const updatePassword = async (req, res, next) => {
  try {
    const { email, password, newPassword } = req.body;
    const User = await User.findOne({ email });
    if (!User) {
      return res.status(500).json({
        message: "The email entered doesn't exist, try registering yourself",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, User.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Password" });
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    const updateData = await User.updateOne(
      { email },
      { $set: { password: hashedNewPassword } }
    );

    res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Failed to set Password",
    });
  }
};

const changePasswordController = async (req, res) => {
  try {
    const { password, newPassword } = req.body;
    const userId = req.user._id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid current password." });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedNewPassword;
    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "Password updated successfully." });
  } catch (error) {
    console.error("Error changing password:", error);
    return res
      .status(400)
      .send({ success: false, message: "Failed to change password." });
  }
};

//export
export default {
  loginController,
  registerController,
  forgotPassword,
  resetPassword,
  updatePassword,
  changePasswordController,
};

