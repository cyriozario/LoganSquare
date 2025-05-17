// components/TextReveal.js
import { motion } from "framer-motion";

export default function TextReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
