"use client";
import React from "react";
import styles from "./styles.module.css";
import Button from "@/components/Buttons/Button";
import { motion } from "framer-motion";

const MiddleBanner: React.FC = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className={styles.imageContainer}
      >
        <img src="./assets/AdobeStock_365794509 2assistente.png" />
      </motion.div>
      <motion.div
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        transition={{ ease: "backIn", duration: 1 }}
        className={styles.containerText}
      >
        <h2>Seja um assistente veicular 24 horas</h2>
        <p>
          A nossa Central 24 horas, está preparada para atender seus clientes em
          todo território nacional, do veículo leve ao extra pesado.
        </p>

        <Button variant="solid">Quero ser um prestador</Button>
      </motion.div>
    </motion.div>
  );
};

export default MiddleBanner;
