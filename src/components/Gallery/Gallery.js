import PropTypes from "prop-types";
import galleryImg from "./GalleryImg";

export function Gallery() {
  return (
    <section>
      <ul>
        {galleryImg.map((image) => (
          <li key={image.id}>
            <img src={image.img} alt={image.label} />
            <p>{image.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

Gallery.propTypes = {
  id: PropTypes,
};
