import React from "react";
import styles from "./SlideItem.module.css";

interface SlideItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const SlideItem: React.FC<SlideItemProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className={styles.slideItem}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a href={link} className={styles.link}>
          Xem thêm
        </a>
      </div>
    </div>
  );
};

export default SlideItem;
