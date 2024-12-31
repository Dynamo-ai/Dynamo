import PropTypes from "prop-types";
import styles from "./Testimonial.module.css";

const Testimonial = ({ className = "" }) => {
  return (
    <div className={[styles.testimonial, className].join(" ")}>
      <header className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <img
              className={styles.excludeIcon}
              loading="lazy"
              alt=""
              src="/exclude.svg"
            />
            <b className={styles.dynamoAi}>Dynamo AI</b>
          </div>
        </div>
        <nav className={styles.navLinks}>
          <nav className={styles.linkItems}>
            <a className={styles.aboutUs}>About us</a>
            <a className={styles.services}>Services</a>
            <a className={styles.techUsed}>Tech Used</a>
          </nav>
        </nav>
        <button className={styles.contactLink} onClick={()=> {window.open("http://localhost:8501")}}>
          <a className={styles.tryItYourself}>Try it yourself</a>
        </button>
      </header>
    </div>
  );
};

Testimonial.propTypes = {
  className: PropTypes.string,
};

export default Testimonial;
