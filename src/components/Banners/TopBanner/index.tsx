"use client";

import React from "react";
import styles from "./styles.module.css";
import Button from "@/components/Buttons/Button";
import { motion } from "framer-motion";

const TopBanner: React.FC = () => {
  return (
    <motion.div
      className={styles.container}
    initial={{ x: 30}}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className={styles.containerText}>
        <div>
          <h2>Soluções rápidas e efetivas na área de segurança.</h2>
          <p>
            Atendimento de qualidade e excelência 24 horas por dia, 7 dias por
            semana. Contratar a PRMA Seja um prestador
          </p>
        </div>
        <div className={styles.containerButtons}>
          <Button variant="outline">Contratar PRMA</Button>
          <Button variant="solid">Seja um prestador</Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="./assets/ilustralockimg.png" />
      </div>
    </motion.div>
  );
};

export default TopBanner;
