import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import styles from "../../styles/form.module.css"

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  function onSubmit(data) {
    axios
      .post("https://eoo1d9t51tgd61u.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Thanks for signing up! Check your inbox for updates 😊`
        );
      })
      .catch((e) => console.error(e));
  }

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.card}>
        <h3 className={styles.title}>Contact us for New Pizza updates & discounts!</h3>

        <input className={styles.inp} {...register("email")} placeholder="me@gmail.com"></input>

        <button className={styles.btn} role="submit">{isSubmitting ? "Submitting" : "Submit"}</button>
        {successMessage && <p className={styles.update}>{successMessage}</p>}
      </form>
    </div>
  );
}