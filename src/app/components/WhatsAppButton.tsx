import { motion } from "motion/react";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Número de WhatsApp de ejemplo - Reemplazar con el número real
  const whatsappNumber = "51988456999";
  const message = "Hola, me interesa conocer más sobre Fairpay";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-3 group"
      >
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
          className="absolute right-16 bg-white text-gray-900 px-4 py-2 rounded-full shadow-xl whitespace-nowrap font-medium"
        >
          ¿Necesitas ayuda?
        </motion.div>

        {/* Button */}
        <div className="relative">
          {/* Animated rings */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />

          {/* Main button */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-2xl flex items-center justify-center hover:shadow-green-500/50 transition-all duration-300">
            <MessageCircle className="w-8 h-8 text-white" fill="white" />
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}
