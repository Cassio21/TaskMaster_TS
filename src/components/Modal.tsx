import React from "react";

//!CSS
import styles from "./Modal.module.css";

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  //* Adicionar o CSS para a animação de entrada e saída da MODAL.
  //* Esse cara vai ter um evento porque tenho que pegar um clique, e vai retornar void.
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Texto do modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
