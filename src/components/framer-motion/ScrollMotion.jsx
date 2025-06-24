import { motion } from 'framer-motion';

const ScrollMotion = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0.4 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ display:"flex" , justifyContent:'center',alignItems:'center',width:'100%'}}
    >
      {children}
    </motion.div>
  );
};

export default ScrollMotion;
