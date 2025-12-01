import React from "react";
import WorldMap from "../../assets/world-map.png";
import { motion } from "framer-motion";

const WhereToBuy = () => {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form section */}
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-4xl font-bold text-darkGray font-serif"
          >
            Buy our products from anywhere
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            action=""
            className="flex flex-col gap-4 mt-4"
          >
            <input
              type="text"
              placeholder="Enter your Name"
              className="input-style"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="input-style"
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <input
                type="text"
                placeholder=" country"
                className="input-style"
              />
              <input
                type="email"
                placeholder="zipcode"
                className="input-style w-full lg:w-[150px]"
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="primary-btn"
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
        {/* world map section */}
        <div className="col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
              transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            src={WorldMap}
            className="w-full sm:w-[500px] mx-auto"
            alt="WorldMap"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
