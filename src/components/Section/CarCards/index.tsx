import React from "react";

import styles from "./styles.module.css";
import IconButton from "@/components/Buttons/IconButton";
import CarCard from "@/components/CarCard";
import { motion } from "framer-motion";

const CarCards: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div>
          <img src="./assets/cards/car.png" />
          <div>
          <h5>Pronta resposta veicular</h5>
          <h2>Carros recuperados</h2>
        </div>
        </div>
        
        <div>
          <IconButton />
        </div>
      </div>
      <div className={styles.containerCards}>
        <CarCard img="./assets/cars/car1.jpeg" />
        <CarCard img="./assets/cars/car2.jpeg" />
        <CarCard img="./assets/cars/car3.jpeg" />
        <CarCard img="./assets/cars/prma.png" />
      </div>
    </div>
  );
};

export default CarCards;
