"use client";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

import { login } from "@/lib/action";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button type="submit">Login</button>
      {state?.error && <p>{state.error}</p>}
      <Link href={"/register"}>
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};
