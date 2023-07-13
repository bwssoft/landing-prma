"use client";
import React from "react";
import { Right } from "@icon-park/react";
import { motion } from "framer-motion";


const IconButton: React.FC = () => {
  return (
    <motion.div
    whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Right color="white" />
    </motion.div>
  );
};

export default IconButton;
