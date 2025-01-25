"use client";

import { motion } from "framer-motion";

export default function MobileProductCard() {
  const hoverEffect = {
    initial: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.3 } },
  };

  const products = [
    {
      id: 1,
      title: "Product Name",
      category: "Category Name",
      image: "/product-image.jpg", // Replace with your image URL
    },
    {
      id: 2,
      title: "Another Product",
      category: "Another Category",
      image: "/product-image-2.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white">
            <motion.h3
              className="text-xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {product.title}
            </motion.h3>
            <motion.p
              className="text-sm mt-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {product.category}
            </motion.p>
          </div>

          {/* Hover Effect - Additional Details */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            variants={hoverEffect}
            initial="initial"
            whileHover="hover"
          >
            <h4 className="text-lg font-semibold">Explore More</h4>
            <p className="text-sm mt-1">
              Click to learn more about {product.title}.
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
