import React from 'react';
import { motion } from 'framer-motion';

const TypeWriter = ({ text, delay = 0.03 }) => {
  const words = text.split(' ');
  
  return (
    <div className="inline">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.2em]">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: delay * (wordIndex * 5 + charIndex),
                ease: "easeOut"
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default TypeWriter;