"use client";
import Card from "@/components/Card";
import React, { useState } from "react";
// import { Container } from './styles';

import styles from "./styles.module.css";
import { cardsData } from "../.././../data/cardsData";

const Cards: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

 
  return (
    <div className={styles.container}>
      {cardsData.map((item) => (
        <Card icon={item.icon} title={item.name} key={item.id} onClick={() => (modalOpen ? close() : open())} />
      ))}
    </div>
  );
};

export default Cards;
