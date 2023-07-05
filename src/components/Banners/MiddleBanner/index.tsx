"use client";
import React from "react";
import styles from "./styles.module.css";
import Button from "@/components/Buttons/Button";

const MiddleBanner: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="./assets/AdobeStock_365794509 2assistente.png" />
      </div>
      <div className={styles.containerText}>
        <h2>Seja um assistente veicular 24 horas</h2>
        <p>
          A nossa Central 24 horas, está preparada para atender seus clientes em
          todo território nacional, do veículo leve ao extra pesado.
        </p>

        <Button variant="solid">Quero ser um prestador</Button>
      </div>
    </div>
  );
};

export default MiddleBanner;
