import PropTypes from "prop-types";
import styles from "./LandingPageContent.module.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const LandingPageContent = ({ className = "" }) => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.frameParent}`, {
      duration: 1000,
      distance: '300px',
      easing: 'ease-in-out',
      origin: 'right',
      reset: true,
      delay:250,
    });
  }, [styles.frameParent]);
  return (
    <div className={[styles.landingPageContent, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.findThePerfectCreditCardFParent}>
          <h1 className={styles.findThePerfect}>
            Turn Your Imagination into Stunning Art Using Dynamo's Image Generator
          </h1>
          <div className={styles.exploreTheFrontier}>
            Explore the frontier of creativity with AI image generation.
            Seamlessly convert your ideas into captivating visuals, where
            advanced algorithms and artistic vision merge. Discover how
            effortless it can be to bring your concepts to life with stunning
            detail and originality, transforming your imagination into
            extraordinary digital masterpieces
          </div>
        </div>
        <div className={styles.image4Parent}>
          <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
          <img
            className={styles.horseImage1}
            loading="lazy"
            alt=""
            src="/horse-image-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

LandingPageContent.propTypes = {
  className: PropTypes.string,
};

export default LandingPageContent;
