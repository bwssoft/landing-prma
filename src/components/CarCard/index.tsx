import React from "react";
import { motion } from "framer-motion";

import styles from "./style.module.css";
interface CarCardsProps {
  img: string;
}
const CarCard: React.FC<CarCardsProps> = ({ img }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.container}
    >
      <img src={img} />
    </motion.div>
  );
};

export default CarCard;
