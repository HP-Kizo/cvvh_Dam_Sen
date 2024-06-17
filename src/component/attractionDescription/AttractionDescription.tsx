import { ArrowRight } from "../../assets/Icon";

interface AttractionDescriptionProps {
  position: string;
  header: string;
  desc: string;
  image: string;
  alt: string;
}

const AttractionDescription: React.FC<AttractionDescriptionProps> = ({
  position,
  header,
  desc,
  image,
  alt,
}) => {
  return (
    <div className={`attraction-description__${position}`}>
      <div className="attraction-overlay"></div>
      <div className="attraction-desc">
        <h2>{header}</h2>
        <p>{desc}</p>
        <button
          className={
            position === "left"
              ? "attraction-button"
              : "attraction-button attraction-button__right"
          }
        >
          <span>Xem thêm </span>
          {ArrowRight}
        </button>
      </div>
      <div
        className={
          position === "left"
            ? "attraction-image-wrapper"
            : "attraction-image-wrapper attraction-image-wrapper__right"
        }
      >
        <img
          src="https://via.placeholder.com/346x517"
          alt={alt}
          className="attraction-image"
        />
      </div>
      <p className="attraction-caption">{alt}</p>
    </div>
  );
};

export default AttractionDescription;
