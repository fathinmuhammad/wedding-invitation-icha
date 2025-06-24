import React from "react";
import { motion } from "framer-motion";
import cowok from "../assets/images/cowo.png";
import cewek from "../assets/images/cewe.png";

const InvitationBridge = () => {
  return (
    <div className="invitation-wedding-date">
        
    <motion.section
      id="bride"
      className="invitation-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 10px 30px rgba(135,206,235,0.2)',
        borderRadius: '10px',
        background: '#E7D5C5'
      }}
    >

        <motion.div 
          className="flower-frame-top-right flower-top-right" 
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,   
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="flower-frame-top-left flower-top-left" 
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,   
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="flower-frame-bottom-right flower-bottom-right" 
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,   
            ease: "easeInOut"
          }}
        ></motion.div>        
        <motion.div 
          className="flower-frame-bottom-left flower-bottom-left"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,   
            ease: "easeInOut"
          }}
        ></motion.div>


        <motion.h2
          className="font-arabic py-4 m-0"
          style={{ 
            fontSize: "1.35rem",
            color: '#800020',
            fontFamily: "'Cairo', sans-serif",
            fontWeight: 'bold',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            textAlign: 'center',
            marginBottom: '0rem',
            marginTop: '3rem'
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.h2>

        <motion.h2
          className="font-esthetic py-4 m-0"
          style={{ 
            fontSize: "0.7rem",
            color: '#800020',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'bold',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            textAlign: 'center',
            fontStyle: 'italic',
            marginBottom: '0rem'
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Assalamualaikum Warahmatullahi Wabarakatuh
        </motion.h2>

        <motion.p
          className="pb-4 m-0"
          style={{ 
            fontSize: "0.7rem",
            color: '#470113',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'bold',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            textAlign: 'justify',
            marginLeft: '1rem',
            marginRight: '1rem',
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan menghadiri acara pernikahan kami:
        </motion.p>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
           <motion.img
              src={cewek}
              alt="cewek"
              className="rounded-circle border border-3 shadow my-4 mx-auto"
              style={{
                width: "250px",
                objectFit: "cover",
                margin: '20px 0',
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.5,   
                ease: "easeInOut"
              }}
            />
            <motion.h2
              className="font-esthetic m-0"
              style={{ 
                fontSize: "3rem",
                color: '#800020',
                fontFamily: "'Tangerine', serif",
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginBottom: '0rem',
                marginTop: '0rem'
              }}
            >
              Chairunnisa
            </motion.h2>
            <motion.p
              className="mt-3 mb-1"
              style={{ 
                fontSize: "1rem",
                color: '#470113',
                fontFamily: "'Poppins', sans-serif",
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginTop: '0rem',
                fontWeight: 'bold',
                marginBottom: '0rem'
              }}
            >
              Putri Ke-2 Dari 2 Bersaudara
            </motion.p>
            <motion.p 
              className="mb-0"
              style={{
                color: '#800020', 
                fontFamily: "'Poppins', sans-serif", 
                textShadow: '0 1px 2px rgba(0,0,0,0.1)', 
                marginTop: "0rem",                 
                fontSize: '0.6rem',
              }}
            >
              Putri Dari Bpk (Alm) Yulizon R Sikumbang & Ibu Dra. H Suneti Khaidir
            </motion.p>

            <motion.h2
              className="font-esthetic my-4"
              style={{ 
                fontSize: "2rem",
                color: '#800020',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 'bold',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginBottom: '0rem',
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              &amp;
            </motion.h2>

            <motion.img
              src={cowok}
              alt="cowo"
              style={{
                width: "250px",
                objectFit: "cover",
                margin: '20px 0',
                
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.5,   
                ease: "easeInOut"
              }}
            />
            <motion.h2
              className="m-0"
              style={{ 
                fontSize: "3rem",
                color: '#800020',
                fontFamily: "'Tangerine', serif",
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginBottom: '0rem',
                marginTop: '0rem'
              }}
            >
              Denny Aritha Trio Saputra Barus
            </motion.h2>
            <motion.p
              style={{ 
                fontSize: "1rem",
                color: '#470113',
                fontFamily: "'Poppins', sans-serif",
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginTop: '0rem',
                fontWeight: 'bold',
                marginBottom: '0rem'
              }}
            >
              Putra Ke-3 Dari 3 Bersaudara
            </motion.p>
            <motion.p 
              style={{
                color: '#800020', 
                fontFamily: "'Poppins', sans-serif", 
                textShadow: '0 1px 2px rgba(0,0,0,0.1)', 
                marginTop: "0rem", 
                marginBottom: '6rem',
                fontSize: '0.6rem',
              }}
            >
              Putra Dari Bpk Effendy O Barus & Ibu Nurkiftiyah
            </motion.p>
          </motion.div>
    </motion.section>
    </div>
  );
};

export default InvitationBridge;