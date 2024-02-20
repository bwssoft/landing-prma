import React from "react";

import styles from "./styles.module.css";
import { motion } from "framer-motion";
import IconButton from "../Buttons/IconButton";

const ItemModalCard: React.FC = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div
        className={styles.cardContainer}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() =>
          (window.location.href =
            "https://view.forms.app/bws-soft/untitled-form")
        }
      >
        <div>
          <img src="./assets/AdobeStock_467188201 1.png" />
        </div>
        <div>
          <h4>Seja um assistente veicular 24 horas</h4>
          <IconButton />
        </div>
      </motion.div>
      <motion.div
        className={styles.cardContainer}
        onClick={() =>
          (window.location.href =
            "https://view.forms.app/bws-soft/untitled-form")
        }
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div>
          <img src="./assets/AdobeStock_365794509 2assistente.png" />
        </div>
        <div>
          <h4>Torne-se um agente de pronta resposta</h4>
          <IconButton />
        </div>
        
      </motion.div>
    </motion.div>
  );
};

export default ItemModalCard;
