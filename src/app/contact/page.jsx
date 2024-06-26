import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Next App Contact Page",
  description: "Contact description",
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={"/contact.png"} alt="Contact" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
