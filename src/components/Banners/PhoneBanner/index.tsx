import React from "react";

import styles from "./styles.module.css";
import { motion } from "framer-motion";

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
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const PhoneBanner: React.FC = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"visible"}
        className={styles.DownloadContainer}
      >
        <motion.div>
          <motion.h3 variants={item}>Torne-se um agente de pronta resposta</motion.h3>

          <motion.p variants={item}>
            Baixe nosso aplicativo, faça seu cadastro e aguarde a liberação do
            seu acesso.
          </motion.p>
        </motion.div>
        <motion.div variants={item}>
          <img src="./assets/bt-gp.png" />
          <img src="./assets/bt-apple.png" />
        </motion.div>
      </motion.div>
      <motion.div className={styles.phoneContainer}>
        <img src="./assets/iPhone11.png" />
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"visible"}
        className={styles.CheckContainer}
      >
        <motion.div variants={item} className={styles.labels}>
          <img src="./assets/check.png" />
          <h3>Acompanhe de perto</h3>
          <p>
            Em tempo real você recebe no seu celular ocorrências de roubo, furto
            e disparo patrimonial.
          </p>
        </motion.div>
        <motion.div variants={item} className={styles.labels}>
          <img src="./assets/check.png" />
          <h3>Ganhe dinheiro</h3>
          <p>
            Após o fechamento do atendimento da ocorrência você poderá consultar
            o saldo disponível para saque.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PhoneBanner;
