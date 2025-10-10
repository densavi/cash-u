'use client';

import { useState } from "react";
import styles from "./Subscribe.module.css";

import Link from "next/link";
import Image from "next/image";

export default function Subscribe() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className={styles.subscribe}>
      <h4 className={`${styles.title}`}>
        Підпишіться на новини від Cash-U в сфері крипто-обміну
      </h4>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="Введіть Email" required />
        <button className="btn btn-purple" type="submit">Підписатись</button>
      </form>
      {success && <p className={styles.success}>Дякуємо за підписку</p>}
    </div>
  );
}