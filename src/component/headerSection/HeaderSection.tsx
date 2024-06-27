import styles from "./HeaderSection.module.css";
import React from "react";

interface HeaderSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  icon: React.ReactNode;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  icon,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header__content}>
        <div className={styles.header__content_left}>
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className={styles.header__content_right}>
          <img src={imageUrl} alt={title} />
        </div>
      </div>
      <div className={styles.header__btn}>
        <p>{buttonText}</p> {icon}
      </div>
    </div>
  );
};

export default HeaderSection;
