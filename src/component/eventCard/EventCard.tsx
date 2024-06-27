import React from "react";
import styles from "./EventCard.module.css";
import { ArrowNarrowRight, CategoryIconS, ClockIcon } from "../../assets/Icon";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  category: string;
  link: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  description,
  imageUrl,
  category,
  link,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.info}>
            <p className={styles.category}>
              {CategoryIconS} {category}
            </p>
            <p className={styles.date}>
              {ClockIcon}
              {date}
            </p>
          </div>
          <button className={styles.link}>
            <span>Xem thêm</span>
            {ArrowNarrowRight}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
