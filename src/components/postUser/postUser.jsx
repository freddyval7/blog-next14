import { getUser } from "@/lib/data";
import Image from "next/image";
import styles from "./postUser.module.css";

export const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  console.log(user);
  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        width={50}
        height={50}
        alt=""
        className={styles.avatar}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};
