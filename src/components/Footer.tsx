import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>React + TS - Lista Todo</span> <br />
        Desenvolvido por &copy;Cássio - 2023.
      </p>
    </footer>
  );
};

export default Footer;
