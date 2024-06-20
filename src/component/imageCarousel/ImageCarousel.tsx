// src/components/ImageCarousel.tsx
import React, { useState } from "react";
import styles from "./ImageCarousel.module.css";
import { CarouselItem, ImageData } from "../../context/interface";
import { NextIconL, PrevIconL } from "../../assets/Icon";

interface CarouselProps {
  title?: string;
  desc?: string;
  slides: ImageData[];
}

const ImageCarousel: React.FC<CarouselItem> = ({ title, desc, slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  console.log("Title", title);

  const handleThumbnailClick = (index: number): void => {
    setCurrentSlide(index);
  };

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

  const getTranslateValue = (): string => {
    const thumbnailsToShow: number = 5;
    const half: number = Math.floor(thumbnailsToShow / 2);
    let translateValue: number =
      -((currentSlide - half) * 100) / thumbnailsToShow;

    if (currentSlide < half) {
      translateValue = 0;
    } else if (currentSlide >= slides.length - half) {
      translateValue =
        -((slides.length - thumbnailsToShow) * 100) / thumbnailsToShow;
    }

    return `translateX(${translateValue}%)`;
  };

  return (
    <div className={styles.wrap__carousel}>
      {(title || desc) && (
        <div className={styles.header}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {desc && desc.map((res: string) => <p>{res}</p>)}
        </div>
      )}
      <div className={styles.carousel}>
        <div className={styles.mainImage}>
          <button className={styles.prew} onClick={handlerPrev}>
            {PrevIconL}
          </button>
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className={styles.largeImage}
          />
          <p className={styles.alt}>{slides[currentSlide].alt}</p>
          <button className={styles.next} onClick={handlerNext}>
            {NextIconL}
          </button>
        </div>
        <div className={styles.thumbnailsContainer}>
          <div
            className={styles.thumbnails}
            style={{ transform: getTranslateValue() }}
          >
            {slides.map((image: ImageData, index: number) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className={`${styles.thumbnail} ${
                  slides[currentSlide].id === image.id ? styles.selected : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
