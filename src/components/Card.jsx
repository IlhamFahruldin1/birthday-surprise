import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "../assets/css/card.css";
import { Link } from 'react-router-dom'; 

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const timerRef = useRef(null);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true); 
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start overflow-y-auto py-12">
    <div className="w-[400px] flex flex-col items-center">
      <motion.div  initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{duration: 1.2}}>
      <div id="card" className={`${cardClass}`} onClick={toggleCard}>     
        <div id="card-inside">
          <div className="wrap">
            <p>Happy Birthday, Maria Heselle 🤍</p>

            <p>
              Today is a special day, a day when the world feels a little warmer as it celebrates your presence.
            </p>

            <p>
              May every step you take be filled with peace, and may every smile you give return to you in the form of multiplied happiness.
            </p>

            <p>
              You are a gentle and sincere soul, a presence that makes even the simplest things feel more meaningful without needing many words.
            </p>

            <p>
              In this new chapter of your life, may every hope you hold find its way, and may every bit of your weariness be repaid with the happiness you truly deserve.
            </p>

            <p>
              I pray that God always watches over your steps, grants you health, strength, and a gentle heart through every phase of your journey.
            </p>

            <p>
              May all your good prayers—both spoken aloud and quietly kept in your heart—be answered at the most beautiful time.
            </p>

            <p>
              Thank you for being someone who brings warmth, calm, and a small light into the lives of those around you.
            </p>

            <p>
              Happy birthday. May your life always be filled with love, peace, and happiness—today, tomorrow, and always. 🌷
            </p>


            <p className="signed">Ilham</p>
          </div>
        </div>

        <div id="card-front">
          <div className="wrap">
            <h1>Happy Birthday!</h1>
          </div>
        </div>
    </div>

      </motion.div>

    {/* prone to bugs */}
      {isCardOpened && (
        <motion.div className="-mt-[3rem]" initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ opacity: 1, visibility: "visible" }}
        transition={{duration: 1.2}}> 
        <Link to ='/cake'>
        <p className="-mt-[4rem] px-7 py-3 bg-customBlue text-white font-medium text-base rounded-full hover:bg-blue-600">
            Next Page
          </p>
        </Link>
            
        </motion.div>
         
        )}

    </div>
    
    </div>
    
  );
}

export default Card;