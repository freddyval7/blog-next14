"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    console.log("Post added successfully");
    revalidatePath("/blog");
    return await newPost.save();
  } catch (error) {
    console.error(error);
    return { error: "Failed to add post" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("Post deleted successfully");
    revalidatePath("/blog");
  } catch (error) {
    console.error(error);
    return { error: "Failed to delete post" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const login = async (previousState, formData) => {
  const { username, password } =
    Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password })
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid Username or Password" };
    }
    throw error;
  }
};

export const register = async (previousState, formData) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const userExists = await User.findOne({username});

    if (userExists) {
      return { error: "User already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ username, email, password: hashedPassword, img });

    await user.save();
    console.log("User registered successfully");

    return { success: true }
  } catch (error) {
    console.log(error);
    return { error: "Failed to register" };
  }
};
