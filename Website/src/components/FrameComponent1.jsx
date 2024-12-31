import FeatureItems from "./FeatureItems";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const FrameComponent1 = ({ className = "" }) => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.featureList}`, {
      duration: 1000,
      easing: 'ease-in-out',
      scale:1.1,
      reset: true,
      delay:250,
    });
  }, [styles.featureList]);
  return (
    <div className={[styles.featuresWrapper, className].join(" ")} id="services">
      <div className={styles.features}>
        <h1 className={styles.whatDoWe}>What do we offer?</h1>
        <div className={styles.featureList}>
          <FeatureItems
            documentText="/documenttext.svg"
            aITextSearch="AI Text Search"
            searchThingsInAVeryAccurate="Search things in a very accurate and simpler form through Dynamo."
          />
          <FeatureItems
            documentText="/microphone.svg"
            aITextSearch="AI Voice Search"
            searchThingsInAVeryAccurate="Use your voice to search things and listen answer at the same time."
          />
          <FeatureItems
            documentText="/photograph.svg"
            aITextSearch="Image Generation"
            searchThingsInAVeryAccurate="Generate any type image on a single prompt."
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
