import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import creditCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <p className="text-3xl font-bold uppercase">Coders Cafe</p>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              debitis necessitatibus porro consequatur molestias aliquid
              cupiditate at? Molestiae molestias, minima iure accusamus veniam
              dolores enim dicta, esse laborum, earum eaque.
            </p>
            <p className="flex items-center gap-2">
              <FaPhone />
              <span>123-456-7890</span>
            </p>
            <p className="flex items-center gap-2">
              <FaMapLocation />
              <span>Mumbai, Maharashtra</span>
            </p>
          </motion.div>
          {/* footer links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <p className="text-3xl font-bold">Quick Links</p>
            <div className="grid grid-cols-2 gap-3">
              {/* first column */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* second column */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* social links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <p className="text-3xl font-bold">Follow Us</p>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <p className="text-xl font-semibold mb-2">Payment Methods</p>
              <img src={creditCards} alt="creditCards" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* copyright section */}
        <p
          className="text-white text-center mt-8 pt-8 border-t-2"
        >
          Copyright &copy; 2025 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
