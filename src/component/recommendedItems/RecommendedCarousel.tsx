// src/components/RecommendedCarousel.tsx
import React, { useState } from "react";
import styles from "./RecommendedCarousel.module.css";
import {
  ArrowNarrowLeft,
  ArrowNarrowRight,
  CategoryIconS,
  NextIcon,
  NextIconL,
  PrevIcon,
  PrevIconL,
} from "../../assets/Icon";
import { RecommendedItem } from "../../context/interface";

interface RecommendedCarouselProps {
  recommendedItems: RecommendedItem[];
}
const RecommendedCarousel: React.FC<RecommendedCarouselProps> = ({
  recommendedItems,
}) => {
  const [currentStartIndex, setCurrentStartIndex] = useState<number>(0);
  const visibleCount: number = 4; // Số lượng item hiển thị

  const handlePrevClick = (): void => {
    setCurrentStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick = (): void => {
    setCurrentStartIndex((prev) =>
      Math.min(prev + 1, recommendedItems.length - visibleCount)
    );
  };

  return (
    <div className={styles.recommendedCarousel}>
      <div className={styles.navigate}>
        <button className={styles.btn}>
          {ArrowNarrowLeft}
          <p>Roller Coaster</p>
        </button>
        <button className={styles.btn}>
          <p>Phượng hoàng bay</p>
          {ArrowNarrowRight}
        </button>
      </div>
      <section className={styles.wrap__carousel}>
        <header className={styles.header}>
          <h1>Có thể bạn thích</h1>
        </header>
        <div className={styles.carousel}>
          <button className={styles.prevButton} onClick={handlePrevClick}>
            {PrevIconL}
          </button>
          <div className={styles.itemsContainer}>
            {recommendedItems
              .slice(currentStartIndex, currentStartIndex + visibleCount)
              .map((item: RecommendedItem) => (
                <div key={item.id} className={styles.item}>
                  <div className={styles.item__top}>
                    <img
                      src={item.imgSrc}
                      alt={item.alt}
                      className={styles.image}
                    />
                    <div className={styles.info}>
                      <h3 className={styles.title}>{item.title}</h3>
                      <p className={styles.date}>{item.date}</p>
                    </div>
                  </div>
                  <div className={styles.item__bottom}>
                    {CategoryIconS}
                    <h2>{item.category}</h2>
                  </div>
                </div>
              ))}
          </div>
          <button className={styles.nextButton} onClick={handleNextClick}>
            {NextIconL}
          </button>
        </div>
      </section>
    </div>
  );
};

export default RecommendedCarousel;
