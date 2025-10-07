import styles from "./Subscribe.module.css";

import Link from "next/link";
import Image from "next/image";

export default function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <h4 className={`${styles.title} text-gradient-1`}>
        Підпишіться на новини від Cash-U в сфері крипто-обміну
      </h4>
      <form className={styles.form}>
        <input type="email" placeholder="Введіть Email" />
        <button className="btn btn-purple" type="submit">Підписатись</button>
      </form>
    </div>
  );
}