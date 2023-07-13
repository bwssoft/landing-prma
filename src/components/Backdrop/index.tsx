import React, { ReactNode } from "react";

// import { Container } from './styles';
import { motion } from "framer-motion";
import styles from "./styles.module.css";

interface BackdropProps {
  children: ReactNode;
  onClick: () => void;
}
const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <motion.div
      className={styles.container}
      onClick={onClick}
      initial={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
