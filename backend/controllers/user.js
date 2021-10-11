// used to hash password to increase security
import bcrypt from "bcryptjs";
// used to safely store users in browser for an certain amount of time so they can stay online
import jwt from "jsonwebtoken";
import User from "../models/user";

// Signin and signup asynchronous functions. Sent post-data will be available in request body.
// Trycatch to see if there's an existing user and correct password, granting json web token.
// if not, error 404 or 400 will be recieved. If token creating is unsuccessful, error 500 will be displayed.
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "This user doesn't exist." });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Wrong password." });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "3h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Didn't go through, try again." });
  }
};

// Trycatch to see if there's an existing user and matching password. If passwords match user gets created. Password gets hashed with bcrypt for increased security.
// if not, error 404 or 400 will be recieved. If token creating is unsuccessful, error 500 will be displayed.
export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "This user already exist." });
    if (password === confirmPassword)
      return res.status(400).json({ message: "Passwords don't match." });
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "3h",
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Didn't go through, try again." });
  }
};
