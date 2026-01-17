import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { picture1, picture2, picture3 } from '../assets';
import { Link } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';

const images = [picture1, picture2, picture3];

function Picture() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, images.length));
  };

  return (
    <SectionWrapper>
      {/* TEXT AFTER LAST IMAGE */}
      {step === images.length && (
        <Link to="/card">
          <motion.p
            className="absolute inset-0 z-50 flex items-center justify-center text-center text-4xl font-bold text-customBlue cursor-pointer rotate-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            You're Getting Old! :P
          </motion.p>
        </Link>
      )}

      {/* ONE IMAGE AT A TIME */}
      <AnimatePresence>
        {step < images.length && (
          <motion.div
            key={step}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            drag
            whileDrag={{ scale: 1.05 }}
            onDragEnd={handleNext}
          >
            <div className="w-[220px] h-[300px] bg-white p-2 rounded-2xl shadow-xl">
              <img
                src={images[step]}
                alt={`Photo ${step + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}

export default Picture;
