import Image from "next/image";
import styles from "./singlePost.module.css";

export default function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/20866041/pexels-photo-20866041/free-photo-of-blanco-y-negro-naturaleza-hombre-caminando.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          fill
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src={
              "https://images.pexels.com/photos/20866041/pexels-photo-20866041/free-photo-of-blanco-y-negro-naturaleza-hombre-caminando.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            width={50}
            height={50}
            alt=""
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Mike Wazaski</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima eveniet fugiat atque modi esse dolores facere ipsam nesciunt iste!
        </div>
      </div>
    </div>
  );
}
