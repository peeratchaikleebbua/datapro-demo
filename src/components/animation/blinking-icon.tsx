"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IBlinkingIcon {
  icons: JSX.Element[];
  className?: string;
  size?: string;
  speed?: number;
}

const BlinkingIcon = ({
  icons,
  speed = 1000,
  size = "90",
  className,
}: IBlinkingIcon) => {
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIconIndex = Math.floor(Math.random() * icons.length);
      setCurrentIcon(randomIconIndex);
    }, speed); // Change icon every 1 seconds

    return () => clearInterval(interval);
  }, [icons.length, speed, currentIcon]);

  return (
    <div className={className}>
      <motion.div
        animate={{
          y: [-4, 4],
          transition: {
            duration: 0.9,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
        style={{ width: `${size}px`, height: `${size}px` }} 
      >
        <div className="bg-zinc-800 rounded-full p-3 bg-opacity-30 backdrop-blur-sm border-gray-600 border-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIcon}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: speed / 1000 }}
            >
              {icons[currentIcon]}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default BlinkingIcon;
