"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Button from "@/components/Buttons/Button";

const BottomBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ ease: "linear", duration: 1 }}
      className={styles.container}
    >
      <div className={styles.labelContainer}>
        <motion.div>
          <h2>Esteja seguro. Venha conosco.</h2>
        </motion.div>
        <motion.div>
          <Button variant="solid">Contratar a PRMA</Button>
        </motion.div>
      </div>
      <div>
        <img src="./assets/ilustralockimg.png" />
      </div>
      <div>
        <img src="./assets/GroupIcons.png" />
      </div>
    </motion.div>
  );
};

export default BottomBanner;
