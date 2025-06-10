import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import bjb from "../assets/images/bjb.png";

const GiftSection = () => {
  return (
    <div 
      style={{
        minHeight: "100vh",
        background: "#7B1E34",
        fontFamily: "'Playfair Display', serif",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      <motion.section 
        className="invitation-section-wedding-date"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
          <div className="container text-center">

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
                className="font-esthetic pt-2 mb-4" 
                style={{ fontSize: '2.5rem', color: "#800020", fontFamily: "'Poppins', sans-serif" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >Love Gift</motion.h2>
              <motion.p 
                className="mb-3" 
                style={{ 
                  fontSize: '0.9rem', 
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: '1rem',
                  marginRight: '1rem' 
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti bagi kami. 
                Dan jika memberi merupakan ungkapan tanda kasih, Bapak/Ibu dapat memberi kado secara cashless, melalui:
              </motion.p>

              <motion.div 
                className="bg-theme-dark rounded-4 shadow p-4 mx-4 mt-2 text-start"
                data-aos="fade-up" data-aos-duration="2500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                  <img src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1024px-BNI_logo.svg.png" className="img-fluid" style={{ maxWidth: '9vh' }} alt="bni" />
                  <div className="d-flex justify-content-between align-items-center mt-2">
                      <p className="m-0 p-0" style={{ fontSize: '0.95rem', fontFamily: "'Poppins', sans-serif" }}>1826-2928-16</p>
                      <button style={{
                        background: '#800020',
                        color: 'white',
                        padding: '0.8rem 2rem',
                        border: 'none',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 3px 10px rgba(135,206,235,0.2)'
                      }}
                      onClick={() => {
                        navigator.clipboard.writeText("1826292816");

                        Swal.fire({
                          title: "Berhasil!",
                          text: "Nomor rekening telah disalin ke clipboard.",
                          icon: "success",
                          confirmButtonText: "OK",
                          timer: 2000,
                          timerProgressBar: true,
                        });
                      }}
                      > 
                        <FontAwesomeIcon icon={faCopy} className="me-2" /> Salin
                      </button>
                  </div>

                  <p className="mt-2 mb-0 p-0" style={{ fontSize: '0.95rem', fontFamily: "'Poppins', sans-serif" }}>A/N Anisa Hafridha Putri</p>
              </motion.div>

              <motion.div 
                className="bg-theme-dark rounded-4 shadow p-4 mx-4 mt-2 mb-4 text-start"
                data-aos="fade-up" data-aos-duration="2500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1598px-Bank_Central_Asia.svg.png" 
                  className="img-fluid" 
                  style={{ maxWidth: '9vh' }} 
                  alt="bca" 
                />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className="m-0 p-0" style={{ fontSize: '0.95rem', fontFamily: "'Poppins', sans-serif" }}>7295-0795-50</p>
                  <button style={{
                    background: '#800020',
                    color: 'white',
                    padding: '0.8rem 2rem',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 3px 10px rgba(135,206,235,0.2)'
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText("7295079550");

                    Swal.fire({
                      title: "Berhasil!",
                      text: "Nomor rekening telah disalin ke clipboard.",
                      icon: "success",
                      confirmButtonText: "OK",
                      timer: 2000,
                      timerProgressBar: true,
                    });
                  }}
                  > 
                    <FontAwesomeIcon icon={faCopy} className="me-2" /> Salin
                  </button>
                </div>

                <p className="mt-2 mb-0 p-0" style={{ fontSize: '0.95rem', fontFamily: "'Poppins', sans-serif" }}>A/N Fathin Muhammad Fadhlullah</p>
              </motion.div>

              <motion.div 
                className="bg-theme-dark rounded-4 shadow p-4 mx-4 mt-2 text-start"
                data-aos="fade-up" data-aos-duration="2500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                  <img src={bjb} className="img-fluid" style={{ maxWidth: '9vh' }} alt="bjb" />
                  <div className="d-flex justify-content-between align-items-center mt-2">
                      <p className="m-0 p-0" style={{ fontSize: '0.95rem', fontFamily: "'Poppins', sans-serif" }}>0110-6587-5310-0</p>
                      <button style={{
                        background: '#800020',
                        color: 'white',
                        padding: '0.8rem 2rem',
                        border: 'none',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 3px 10px rgba(135,206,235,0.2)'
                      }}
                      onClick={() => {
                        navigator.clipboard.writeText("0110658753100");

                        Swal.fire({
                          title: "Berhasil!",
                          text: "Nomor rekening telah disalin ke clipboard.",
                          icon: "success",
                          confirmButtonText: "OK",
                          timer: 2000,
                          timerProgressBar: true,
                        });
                      }}
                      > 
                        <FontAwesomeIcon icon={faCopy} className="me-2" /> Salin
                      </button>
                  </div>

                  <p className="mt-2 mb-0 p-0" style={{ fontSize: '0.95rem', fontFamily: "'Poppins', sans-serif" }}>A/N Anisa Hafridha Putri</p>
              </motion.div>
          </div>
      </motion.section>
    </div>
  );
};

export default GiftSection;
