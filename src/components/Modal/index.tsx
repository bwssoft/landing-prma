import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { Close } from "@icon-park/react";

interface ModalProps {
  title?: string;
  icon?: string;
  text?: string;
  icons?: Array<{ icon: ReactNode; name: string }>;
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const data = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Modal: React.FC<ModalProps> = ({ title, icon, text, icons }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView={"visible"}
      className={styles.container}
    >
      <motion.div className={styles.containerHeader}>
        <motion.div className={styles.close}>
          <Close />
        </motion.div>
        <motion.div className={styles.header}>
          <motion.div>
            <motion.img src={icon} />
          </motion.div>
          <div>{title}</div>
        </motion.div>
      </motion.div>
      <motion.div className={styles.containerText}>{text}</motion.div>
      <motion.div className={styles.containerIcons}>
        {icons?.map((item) => (
          <motion.div variants={data} className={styles.containerImg}>
            <motion.div>{item.icon}</motion.div>
            <motion.div>{item.name}</motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
