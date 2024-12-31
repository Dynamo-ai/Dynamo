import Testimonial from "../components/Testimonial";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import LandingPageContent from "../components/LandingPageContent";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";
import styles from "./DynamoLandingPage.module.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const DynamoLandingPage = () => {
  useEffect(() => {
    ScrollReveal().reveal('#id1', {
      duration: 1000,
      distance: '300px',
      easing: 'ease-in-out',
      origin: 'right',
      reset: true,
      delay:250,
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal('#id2', {
      duration: 1000,
      distance: '300px',
      easing: 'ease-in-out',
      origin: 'left',
      reset: true,
      delay:250,
    });
  }, []);
  return (
    <div className={styles.dynamoLandingPage}>
      <img className={styles.doraWrapIcon} alt="" src="/dora-wrap.svg" />
      <Testimonial />
      <FrameComponent />
      <FrameComponent1 />
      <div className={styles.landingPageContent}>
        <div className={styles.section}>
          <div className={styles.creditCardHeader} id="id1">
            <div className={styles.creditCardTitle}>
              <h1 className={styles.findTheBest}>
                Find the best answer using Dynamo’s Text Chatbot
              </h1>
              <div className={styles.elevateYourSearch}>
                Elevate your search experience with our AI-driven search engine.
                Enjoy faster, more accurate results tailored to your queries,
                thanks to advanced algorithms and deep learning. Discover
                relevant information effortlessly, with intelligent suggestions
                and insights designed to make your search intuitive, efficient,
                and highly responsive to your needs
              </div>
            </div>
            <img
              className={styles.image6Icon}
              loading="lazy"
              alt=""
              src="/image-6@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.landingPageContent}>
        <div className={styles.section}>
          <div className={styles.creditCardHeader} id="id2">
            <img
              className={styles.image5Icon}
              loading="lazy"
              alt=""
              src="/image-5@2x.png"
            />
            <div className={styles.creditInfoCopy}>
              <h1
                className={styles.findTheBest}
              >{`Get your results through Dynamo’s Voice Assistant `}</h1>
              <div className={styles.elevateYourSearch}>
                Discover the power of AI voice search, where your spoken queries
                transform into instant, accurate results. Navigate the web, find
                information, and get answers with just your voice. Experience a
                new level of convenience and speed, making searching intuitive
                and hands-free, so you can focus on what truly matters
              </div>
            </div>
          </div>
        </div>
      </div>
      <LandingPageContent />
      <FrameComponent2 />
      <Footer />
    </div>
  );
};

export default DynamoLandingPage;
