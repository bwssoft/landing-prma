"use client";
import Card from "@/components/Card";
import React, { useState } from "react";
// import { Container } from './styles';

import styles from "./styles.module.css";
import { cardsData } from "../.././../data/cardsData";
import { AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";
import ModalFramer from "@/components/ModalFramer";

const Cards: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  function openModal(data:any) {
    setIsOpen(true);
    setSelectedItem(data.id - 1)
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className={styles.container}>
        {cardsData.map((item) => (
          <>
            <Card
              icon={item.icon}
              title={item.name}
              key={item.id}
              onClick={ () => openModal(item)}
            />
          </>
        ))}
      </div>
      <ModalFramer isOpen={modalIsOpen} onClose={closeModal}>
      <Modal
          icons={cardsData[selectedItem].modal.icons}
          icon={cardsData[selectedItem].icon}
          text={cardsData[selectedItem].modal.text}
          title={cardsData[selectedItem].name}
        />
      </ModalFramer>
    </>
  );
};

export default Cards;
