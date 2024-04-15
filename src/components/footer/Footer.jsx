import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>ftdev</div>
      <div className={styles.text}>
        Creative Thoughts Agency © All Rights Reserved.
      </div>
    </div>
  )
}
