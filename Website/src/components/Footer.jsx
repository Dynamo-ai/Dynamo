import PropTypes from "prop-types";
import styles from "./Footer.module.css";


const Footer = ({ className = "" }) => {

  return (
    <footer className={[styles.footer, className].join(" ")} id="about">
      <div className={styles.footerChild} />
      <div className={styles.footerContent}>
        <header className={styles.footerContent1}>
          <div className={styles.mainFooter}>
            <div className={styles.logo}>
              <img
                className={styles.excludeIcon}
                loading="lazy"
                alt=""
                src="/exclude.svg"
              />
              <b className={styles.dynamoAi}>Dynamo AI</b>
            </div>
            <div
              className={styles.discoverThePower}
            >{`Discover the power of AI through diffferent features of Dynamo AI `}</div>
          </div>
          <div className={styles.frame}>
            <div className={styles.linkColumns}>
              <b className={styles.home}>Home</b>
            </div>
            <div className={styles.linkColumns}>
              <b className={styles.aboutUs}>About us</b>
            </div>
            <div className={styles.linkColumns}>
              <b className={styles.services}>Services</b>
            </div>
            <div className={styles.linkColumns}>
              <b className={styles.techUsed}>Tech Used</b>
            </div>
          </div>
        </header>
        <div className={styles.copyright}>
          <div className={styles.copyright2024DynamoAi}>
            copyright 2024 Dynamo-AI All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
