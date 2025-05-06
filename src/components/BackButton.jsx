import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate("/")}
      initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:1}}
      className="fixed md:right-8 hover:cursor-pointer md:top-1/2 md:-translate-y-1/2 bottom-4 right-4 px-4 py-2 md:px-3 md:py-1.5 bg-powder text-charcoal rounded-bl-4xl rounded-tl-4xl text-base md:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 z-50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span >←</span> 
      <span className="hidden md:inline">Back</span> 
      
    </motion.button>
  );
};

export default BackButton;
