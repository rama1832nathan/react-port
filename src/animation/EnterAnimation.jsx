import { motion } from "framer-motion"

export default function EnterAnimation({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            {children}
        </motion.div>
    )
}

/**
 * ==============   Styles   ================
 */

const ball = {
    width: 200,
    height: 200,
    borderRadius: "50%",
    background: "var(--accent)",
}
