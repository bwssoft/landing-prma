import React, { ReactNode } from "react";
import Backdrop from "../Backdrop";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
interface ModalProps {
  children: ReactNode;
  handleClose: () => {};
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "-100vh",
    opacity: 1,
    damping: 0,
    stiffnes: 500,
  },
  exit: { y: "-100vh", opacity: 0 },
};
const Modal: React.FC<ModalProps> = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose} key={""}>
      <motion.div
        className={styles.container}
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>BATATATATATATATTATATATTATATta</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
