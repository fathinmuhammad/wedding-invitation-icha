import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  { id: 1, src: require("../assets/imagesKita/1.jpeg") },
  { id: 2, src: require("../assets/imagesKita/2.jpeg") },
  { id: 3, src: require("../assets/imagesKita/3.jpeg") },
  { id: 4, src: require("../assets/imagesKita/4.jpeg") },
  { id: 5, src: require("../assets/imagesKita/5.jpeg") },
  { id: 6, src: require("../assets/imagesKita/6.jpeg") },
];

const InvitationGallery = () => {
  return (
    <div
      className="invitation-gallery"
      style={{
        minHeight: "100vh",
        background: "#7B1E34",
        fontFamily: "'Playfair Display', serif",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      <motion.section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 10px 30px rgba(135,206,235,0.2)",
          borderRadius: "10px",
          margin: "20px 0",
          background: "#E7D5C5",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            color: "#800020",
            marginBottom: "1.5rem",
          }}
        >
          Galeri Foto
        </h2>

        {/* Grid View */}
        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={image.src}
                alt={`Foto ke-${image.id}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="gallery-swiper"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            margin: "1rem",
            backgroundColor: "#E7D5C5",
            width: '80%'
          }}
        >
          {/* Swiper Carousel */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            style={{
              width: "100%",
              maxWidth: "800px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <img
                  src={image.src}
                  alt={`Swiper foto ke-${image.id}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </motion.section>
    </div>
  );
};

export default InvitationGallery;