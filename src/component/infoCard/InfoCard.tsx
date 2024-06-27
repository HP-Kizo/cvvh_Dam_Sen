// InfoCard.tsx
import React from "react";
import styles from "./InfoCard.module.css";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  description,
  color,
}) => {
  return (
    <div className={styles.infoCard} style={{ borderColor: color }}>
      <div className={styles.icon} style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title} style={{ color: color }}>
          {title}
        </h3>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
};

export default InfoCard;
