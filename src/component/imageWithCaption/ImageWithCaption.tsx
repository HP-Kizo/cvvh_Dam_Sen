// components/ImageWithCaption.tsx
import React from "react";
import styles from "./ImageWithCaption.module.css";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  src,
  alt,
  caption,
}) => {
  return (
    <div className={styles.images__item}>
      <img src={src} alt={alt} />
      <p className={styles.alt}>{caption}</p>
    </div>
  );
};

export default ImageWithCaption;
