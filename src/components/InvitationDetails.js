import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import bgImage from "../assets/images/bg.png";

const InvitationDetails = () => {
  return (
    <motion.div
      className="invitation-details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.section
        id="home"
        className="invitation-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
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

        <motion.h1 className="title" whileHover={{ scale: 1.05 }}>
          Wedding Invitation
        </motion.h1>
        <motion.img
          src={bgImage}
          alt="Istri & Suami"
          className="profile-img"
          initial={{ scale: 0 }} 
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.5,   
            ease: "easeInOut"
          }}
        />
        <motion.h2 className="invitation-couple" whileHover={{ scale: 1.05 }}>
        Chairunnisa<br/>&amp;<br/>Denny Arihta Trio Saputra Barus
        </motion.h2>
        <motion.p style={{ fontSize: '1rem', color: '#F4EDE8', fontFamily: "'Poppins', sans-serif" }}>
          Minggu, 06 Juli 2025
        </motion.p>
        <a
          href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Akad%20%26%20Resepsi%20Pernikahan%20Icha%20%26%20Denny&dates=20250706T010000Z/20250706T060000Z&details=Dengan%20segala%20kerendahan%20hati%2C%20kami%20mengundang%20Anda%20untuk%20menghadiri%20acara%20pernikahan%20kami.&location=JL%20Ciputat%20Raya%2C%20Pasar%20Jumat%201%209%20Pondok%20Pinang%2C%20Kecamatan%20Kebayoran%20Lama%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2C%20RT.10%2FRW.9%2C%20Pd.%20Pinang%2C%20Kec.%20Kby.%20Lama%2C%20Kota%20Jakarta%20Selatan&sf=true&output=xml"
          target="_blank"
          rel="noreferrer"
          className="save-date-btn"
        >
          <button>
            <FontAwesomeIcon icon={faCalendarCheck} className="icon" />{" "}
            <span>Save The Date</span>
          </button>
        </a>
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="mouse">
            <motion.div
              className="scroll-animation"
              animate={{ y: [0, 20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.p className="scroll-text">Scroll Down</motion.p>
      </motion.section>
    </motion.div>
  );
};

export default InvitationDetails;