import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
  when: "afterChildren"
};

const Layout = ({ pathname, children }) => (
  <AnimatePresence>
    <motion.div
      transition={spring}
      key={pathname}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
export default Layout;