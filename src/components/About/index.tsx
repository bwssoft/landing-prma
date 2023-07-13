"use client";
import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import IconButton from "../Buttons/IconButton";

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

const array = [
  {
    title: "Ética, respeito e transparência",
    text: "Cada cliente é único e cada atendimento que realizamos é personalizado e exclusivo para a empresa que nos contrata. Nosso intuito é atuar como uma extensão do seu negócio.",
  },
  {
    title: "Central de Atendimento 24h completa",
    text: "Com expertise no atendimento ao cliente e uma gama de serviços, somos capazes de atender ao seu cliente desde o início do relacionamento.",
  },
  {
    title: "6 mil prestadores de serviço",
    text: "Com expertise no atendimento ao cliente e uma gama de serviços, somos capazes de atender ao seu cliente desde o início do relacionamento.",
  },
];

const About: React.FC = () => {
  return (
    <motion.div className={styles.container}>
      <div className={styles.textContainer}>
        <motion.div
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          transition={{ ease: "backIn", duration: 1 }}
        >
          <h2>O que é a PRMA Federal</h2>
          <p>
            Somos uma empresa B2B, situada em São Paulo. Nosso propósito é
            oferecer atendimento de qualidade e excelência 24 horas por dia, 7
            dias por semana, e ser a melhor para o nossos clientes.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ ease: "linear", duration: 1 }}
          className={styles.yearsContainer}
        >
          <h2>+20 anos</h2>
          <hr />
          <p>Expertise e experiência no mercado.</p>
        </motion.div>
      </div>
      <div className={styles.listContainer}>
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          whileInView={"visible"}
        >
          {array.map((content) => (
            <>
              <motion.li className="item" variants={item}>
                {content.title}
                <p>{content.text}</p>
              </motion.li>
            </>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default About;
