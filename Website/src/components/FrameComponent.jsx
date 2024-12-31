import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";


const FrameComponent = ({ className = "" }) => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.banner}`, {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'left',
      reset: true,
      delay:250,
    });
  }, [styles.banner]);

  useEffect(() => {
    ScrollReveal().reveal('.gif', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'left',
      reset: true,
      delay:250,
    });
  }, ['.gif']);
  return (




    <div className={[styles.bannerWrapper, className].join(" ")}>


      <div className={styles.banner}>
        <div className={styles.heroContent}>
        <img src="src\dynamo log gif.gif" height="500px" width="500px" style={{position:"absolute",right:-11+"em",top:-1.5+"em"}} className="gif"></img>

          <h1 className={styles.discoverThePerfect}>
            Discover the Perfect Search Engine for you
          </h1>
          <div className={styles.unleashThePower}>
            Unleash the power of search with text, voice, and image generation
            all in one platform. Explore, interact, and create like never
            before.
          </div>
          <button className={styles.heroButton} onClick={()=> {window.open("http://localhost:8501")}}>
            <div className={styles.tryItYourself}>Try it yourself</div>




            <img
              className={styles.heroButtonChild}
              alt=""
              src="/vector-7.svg"
            />
          </button>
          <img
            className={styles.statisticsIcon}
            loading="lazy"
            alt=""
            src="/vector-4.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
