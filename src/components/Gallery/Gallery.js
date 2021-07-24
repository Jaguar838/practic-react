import PropTypes from "prop-types";

import styles from "./Gallery.module.css"

function Gallery({ galleryImg }) {
  return (
    <ul className={styles.cardSet}>
      {galleryImg.map((image) => (
        <li key={image.id} className={styles.item}>
          <img src={image.img} alt={image.label} />
          <p>{image.label}</p>
        </li>
      ))}
    </ul>
  );
}
export default Gallery;

Gallery.propTypes = {
  galleryImg: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
