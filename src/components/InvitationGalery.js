import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  { id: 1, src: require("../assets/imagesKita/1.JPG") },
  { id: 2, src: require("../assets/imagesKita/2.JPG") },
  { id: 3, src: require("../assets/imagesKita/3.JPG") },
  { id: 4, src: require("../assets/imagesKita/4.jpg") },
  { id: 5, src: require("../assets/imagesKita/5.JPG") },
  { id: 6, src: require("../assets/imagesKita/6.jpg") },
  { id: 7, src: require("../assets/imagesKita/7.jpg") },
  { id: 8, src: require("../assets/imagesKita/8.jpg") },
];

const InvitationGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
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
                cursor: "pointer",
              }}
              onClick={() => setSelectedImage(image.src)}
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

        {/* Swiper Carousel */}
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
            width: "80%",
          }}
        >
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

        {/* Modal Preview */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              cursor: "zoom-out",
            }}
          >
            <motion.img
              src={selectedImage}
              alt="Preview"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
            />
          </div>
        )}
      </motion.section>
    </div>
  );
};

export default InvitationGallery;