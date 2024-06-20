// components/PostContent.tsx
import React from "react";
import styles from "./PostContent.module.css";
import ImageWithCaption from "../imageWithCaption/ImageWithCaption";
import { PostContents } from "../../context/interface";

const PostContent: React.FC<PostContents> = ({
  title,
  description,
  images,
  content,
}) => {
  return (
    <div className={styles.posts__content}>
      {title && <h1 className={styles.title}>{title}</h1>}
      <p className={styles.desc}>{description}</p>
      <div className={styles.wrap__images}>
        {images.map((image, index) => (
          <ImageWithCaption key={index} {...image} />
        ))}
      </div>
      {content &&
        content.length !== 0 &&
        content.map((res: string, index: number) => (
          <p className={styles.desc}>{res}</p>
        ))}
    </div>
  );
};

export default PostContent;
