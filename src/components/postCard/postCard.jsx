import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

export const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={"https://images.pexels.com/photos/16248641/pexels-photo-16248641/free-photo-of-blanco-y-negro-pajaro-animal-nino.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt="Post" fill />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum earum praesentium impedit minima debitis consectetur eaque ex fugiat. Nobis libero sequi deserunt delectus, optio eum.</p>
        <Link className={styles.link} href={"/blog/post"}>READ MORE</Link>
      </div>
    </div>
  );
};
