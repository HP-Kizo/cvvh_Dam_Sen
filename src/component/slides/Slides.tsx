import { useState, useEffect } from "react";
import styles from "./Slides.module.css";
import {
  ActiveIcon,
  CallIcon,
  InActiveIcon,
  Message,
  NextIcon,
  PrevIcon,
} from "../../assets/Icon";
interface SildesProps {}

const Slides: React.FC<SildesProps> = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slides: string[] = [
    "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/b68e58acf455e3b824b3bf2428e17de38be33daa",
    "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/b0245d0f96b40355b9c171d181e9fa1d44634eb1",
    "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/b68e58acf455e3b824b3bf2428e17de38be33daa",
    "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/b0245d0f96b40355b9c171d181e9fa1d44634eb1",
  ];
  const handlerPrev = (): void => {
    setCurrentSlide((prev: number) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handlerNext = (): void => {
    setCurrentSlide((prev: number) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className={styles.slides}>
      {slides.map((image: string, index: number) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentSlide ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <div className={styles.prev} onClick={handlerPrev}>
        {PrevIcon}
      </div>
      <div className={styles.next} onClick={handlerNext}>
        {NextIcon}
      </div>
      <div className={styles.button_nav}>KHÁM PHÁ NGAY</div>
      <div className={styles.slider__icons}>
        {slides.map((_: string, index: number) => (
          <button
            key={index}
            className={currentSlide === index ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
          >
            {currentSlide === index ? ActiveIcon : InActiveIcon}
          </button>
        ))}
      </div>
      <div className={styles.contact}>
        <div className={styles.contact__item}>{CallIcon}</div>
        <div className={styles.contact__item}>{Message}</div>
      </div>
    </div>
  );
};

export default Slides;
