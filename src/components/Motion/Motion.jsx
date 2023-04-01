import React from "react";
import { motion } from "framer-motion";

const Motion = ({ className, children }) => {
  return (
    <motion.div
      className={className}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{ duration: 0.75 }}
      variants={{
        initialState: {
          opacity: 1,
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        },
        animateState: {
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
        exitState: {
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
