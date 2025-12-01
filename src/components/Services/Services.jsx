import React from "react";
import { motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee2 from "../../assets/coffee/coffee3.png";
import Coffee3 from "../../assets/coffee/coffee2 (1) (1).png";

const servicesData = [
  {
    id: 1,
    title: "Cappuccino",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.",
    img: Coffee1,
  },
  {
    id: 2,
    title: "Latte",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.",
    img: Coffee2,
  },
  {
    id: 3,
    title: "Espresso",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.",
    img: Coffee3,
  },
  {
    id: 4,
    title: "Americano",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.",
    img: Coffee1,
  },
];

const cardVariants = {
  hidden: {opacity: 0,y: 20,},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // duration: 0.5,
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};
// const containerVariants = {
//   hidden: {opacity: 1},
//   visible: {
//     opacity: 1,
//     transition: { delay: 0.6, staggerChildren: 0.4 },
//   },
// };
const containerVariants = {
  hidden: { opacity: 0 },     // FIXED
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4, delay: 0.6 },
  },
};
const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and{" "}
          <span className="text-primary">
            Tasty <span>Coffees</span>
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          non unde deserunt enim impedit consectetur assumenda quos a
          perferendis voluptatum, fugiat in illum nihil dolores facilis eos
          optio id architecto?
        </motion.p>
      </div>
      {/* card section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // viewport={{ amount: 0.8 }}
        viewport={{ amount: 0.2, once: true }} 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className="mt-9 text-center p-4 space-y-6"
          >
            <img
              className="max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer img-shadow2"
              src={service.img}
              alt=""
            />

            <div className="space-y-4">
              <p className="text-2xl font-bold text-primary">{service.title}</p>
              <p className="text-darkGray">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
