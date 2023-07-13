import React, { ReactNode } from "react";

import styles from "./styles.module.css";
import { AnimatePresence, motion } from "framer-motion";

interface ModalFramerProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
const ModalFramer: React.FC<ModalFramerProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className={styles.overlay} onClick={onClose}>
          <motion.div
            initial={{ y: -500 }}
            exit={{ y: 500 }}
            animate={{ y: 0 }}
            className={styles.container}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalFramer;
