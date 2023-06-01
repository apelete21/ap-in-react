import React from "react";
import { motion } from "framer-motion";

const Motion = ({ className, children }) => {
  return (
    <motion.div
      className={className}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{ duration: 0.5 }}
      variants={{
        initialState: {
          opacity: 0,
        },
        animateState: {
          opacity: 1,
        },
        exitState: {
          opacity: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
