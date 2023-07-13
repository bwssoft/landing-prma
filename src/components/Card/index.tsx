"use client";
import React, { useState } from "react";
import { Right } from "@icon-park/react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

interface CardProps {
  icon: any;
  title: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ icon, title, onClick }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <motion.div
      className={styles.containerCards}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div>
        <img src={icon} />
      </div>
      <h4>{title}</h4>
      <Right />
    </motion.div>
  );
};

export default Card;
