import React from "react";
import styles from "./PlantCard.module.css";
import { ArrowNarrowRight, CategoryIcon, ClockIcon } from "../../assets/Icon";

interface PlantCardProps {
  name: string;
  description: string;
  date: string;
  type: string;
  imageUrl: string;
}

const PlantCard: React.FC<PlantCardProps> = ({
  name,
  description,
  date,
  type,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.content}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.wrap_category}>
            <div className={styles.category}>
              {CategoryIcon}
              <h3>{type}</h3>
            </div>
            <div className={styles.date}>
              {ClockIcon}
              <p>{date}</p>
            </div>
          </div>
          <div className={styles.detail}>
            <p>Xem thêm</p>
            {ArrowNarrowRight}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
