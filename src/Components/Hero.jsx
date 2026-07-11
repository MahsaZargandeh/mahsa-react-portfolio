import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { useEffect, useState } from "react";
export default function Hero() {
  const roles = ["Frontend Developer", "React Developer", "Full Stack Learner"];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[index].length) {
      const timer = setTimeout(() => {
        setText(text + roles[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((index + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [charIndex, index, text]);

  return (
    <section className="hero">
      <h2>
        {text}
        <span className="cursor">|</span>
      </h2>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mahsa Zargandeh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Frontend Developer | React
        </motion.p>

        <div className="hero-buttons">
          <a href="https://github.com/MahsaZargandeh" target="_blank">
            GitHub
          </a>

          <a href="#" className="cv-btn">
            Download CV
          </a>
        </div>

        <div className="hero-image">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </section>
  );
}
