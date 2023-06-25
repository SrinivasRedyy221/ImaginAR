'use client';
import {motion} from "framer-motion";
import { TypingText } from '../components'
import styles from "../styles";
import {fadeIn,staggerContainer} from "../utils/motion";
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0 "></div>
    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title="| About ImaginAR" textStyles="text-center"/>
      <motion.p
      variants={fadeIn('up','tween', 0.2,1)}
      className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white ">
      Welcome to our website, where we unlock the limitless possibilities of <span className="font-extrabold text-white">Augmented Reality (AR)</span> to create extraordinary experiences. We believe that technology has the power to transform the way we perceive and interact with the world around us.

Augmented Reality merges the virtual and physical realms, allowing us to overlay digital content onto our real-world environment. With our cutting-edge AR technology, we bring imagination to life, blurring the boundaries between what is real and what is possible.

At our website, we offera wide range of immersive AR experiences that cater to diverse interests and industries. Whether you're an avid gamer, an enthusiastic learner, a creative professional, or a business seeking innovative solutions, we have something incredible in store for you.
      </motion.p>

      <motion.img
      variants={fadeIn('up','tween',0.3,1)}
      src='/arrow-down.svg'
      alt="arrow"
      className="w-[18px] h-[28px] object-contain mt-[28px]"/>
    </motion.div>
  </section>
);

export default About;
