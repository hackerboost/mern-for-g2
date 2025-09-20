import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    // Validate inputs
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      });
    }

    // Check if the user already exist in the system
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }

    // Hash the password first
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create the new user
    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
      phone,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "New User Created Successfully",
      user: newUser,
    });
  } catch (error) {
    console.log("Internal server error", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
export const loginUser = async (req, res) => {
  try {
    // Desctructure email and password from request body
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    // Find user and include password for comparison
    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: "Account has been deactivated",
      });
    }

    // Compare passwords
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate token
    const token = await generateToken(user._id, res);

    if (!token) {
      return res.status(500).json({
        success: false,
        message: "Error generating authentication token",
      });
    }

    // Remove password from response
    user.password = undefined;

    res.json({
      success: true,
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error logging in user",
    });
  }
};

// @desc    Logout user
// @route   POST /api/users/logout
// @access  Private
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error logging out user",
    });
  }
};

export const updateUser = async (req, res) => {
  const { data } = req.body;

  const { name, email, phone, avatar } = data;

  try {
    // Find the user by ID (assuming req.user.id contains the authenticated user's ID)
    const user = await userModel.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Update user fields
    user.name = name || user.name; // Update name only if provided
    user.phone = phone || user.phone; // Update phone only if provided
    user.avatar = avatar || user.avatar; // Update avatar only if provided

    await user.save();

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    console.log("Internal server error", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};
