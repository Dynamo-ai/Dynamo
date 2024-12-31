import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const FrameComponent2 = ({ className = "" }) => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.testimonialItems}`, {
      duration: 500,
      easing: 'ease-in',
      opacity:0,
      reset: true,
      delay:500,
    });
  }, [styles.testimonialItems]);

  useEffect(() => {
    ScrollReveal().reveal(`.${styles.testimonialColumns}`, {
      duration: 500,
      easing: 'ease-in',
      opacity:0,
      reset: true,
      delay:500,
    });
  }, [styles.testimonialColumns]);
  return (
    <div className={[styles.testimonialWrapper, className].join(" ")}>
      <div className={styles.testimonial}>
        <div className={styles.testimonialItems} id="ida">
          <div className={styles.frame}>
            <img
              className={styles.desktopComputerIcon}
              loading="lazy"
              alt=""
              src="/desktopcomputer.svg"
            />
            <div className={styles.frame1}>
              <div className={styles.frontend}>Frontend</div>
              <div className={styles.techstackUsed}>Techstack Used</div>
            </div>
          </div>
          <div className={styles.streamlitReactFigmaContainer}>
            <p className={styles.streamlit}>{`Streamlit `}</p>
            <p className={styles.streamlit}>React</p>
            <p className={styles.streamlit}>Figma - UIUX</p>
          </div>
        </div>
        <div className={styles.testimonialColumns}>
          <div className={styles.frame}>
            <img
              className={styles.chipIcon}
              loading="lazy"
              alt=""
              src="/chip.svg"
            />
            <div className={styles.frame1}>
              <div className={styles.backend}>Backend</div>
              <div className={styles.techstackUsed}>Techstack Used</div>
            </div>
          </div>
          <div className={styles.pythonGeminiApiContainer}>
            <p className={styles.streamlit}>Python</p>
            <p className={styles.streamlit}>Gemini API</p>
            <p className={styles.streamlit}>Stable Diffusion - CV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
