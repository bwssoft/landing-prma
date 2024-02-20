"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "@/components/Buttons/Button";
import { motion } from "framer-motion";
import ModalFramer from "@/components/ModalFramer";
import ItemModalCard from "@/components/ItemModalCard";

const TopBanner: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <motion.div
        className={styles.container}
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
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
            <Button
            onClick={openModal}
            variant="solid">Seja um prestador</Button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="./assets/ilustralockimg.png" />
        </div>
      </motion.div>
      <ModalFramer isOpen={modalIsOpen} onClose={closeModal}>
        <ItemModalCard />
      </ModalFramer>
    </>
  );
};

export default TopBanner;
