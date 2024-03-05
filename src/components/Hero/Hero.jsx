import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hello it's me</p>
            <h3 className={styles.text_2}>Nattamon Chaiwong</h3>
            <p className={styles.text_3}>
              <span>I am a </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "student of the Faculty of Computer Science.",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "student at Phayao University.",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
</p>
            <p className={styles.text_4}>
            Faculty of ICT students, Department of Computer Science, 
            student ID 65025479,currently studying in the 2nd year, about to enter the 3rd year.
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="https://github.com/nattamon27">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://web.facebook.com/nattamol.chaiwong.7/">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>

          <div>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
          <div className={styles.hero_image}>
          </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;