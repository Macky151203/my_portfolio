import { motion } from "framer-motion";

const Layout2 = ({ children }) => (
  <motion.div
    // initial={{ x: 300, opacity: 0 }}
    // animate={{ x: 0, opacity: 1 }}
    // exit={{ x: 300, opacity: 0 }}
    // transition={{
    //     ease: "linear",
    //     duration: 2,
    //     x: { duration: 1 }
    //   }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
export default Layout2;