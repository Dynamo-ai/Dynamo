import PropTypes from "prop-types";
import styles from "./FeatureItems.module.css";

const FeatureItems = ({
  className = "",
  documentText,
  aITextSearch,
  searchThingsInAVeryAccurate,
}) => {
  return (
    <div className={[styles.featureItems, className].join(" ")}>
      <div className={styles.f}>
        <img
          className={styles.documentTextIcon}
          loading="lazy"
          alt=""
          src={documentText}
        />
      </div>
      <div className={styles.featureDetails}>
        <h3 className={styles.aiTextSearch}>{aITextSearch}</h3>
        <div className={styles.searchThingsIn}>
          {searchThingsInAVeryAccurate}
        </div>
      </div>
    </div>
  );
};

FeatureItems.propTypes = {
  className: PropTypes.string,
  documentText: PropTypes.string,
  aITextSearch: PropTypes.string,
  searchThingsInAVeryAccurate: PropTypes.string,
};

export default FeatureItems;
