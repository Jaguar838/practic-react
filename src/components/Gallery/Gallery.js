import React, { Component } from "react";

import PropTypes from "prop-types";
import styles from "./Gallery.module.css";
import axios from "axios";

const ApiKey = "563492ad6f91700001000001a1694d52156341ed8ac1b944afa82939"

class Gallery extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    axios.defaults.baseURL = "";
    axios.defaults.headers.common.Authorization = ApiKey;
    const param = `v1/search?query=${this.state.query}`
    axios
      .get(param)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        return data.photos;
      })
      .then((images) => {
        this.setState({ images })
      });
  }
  render() {
    const { galleryImg } = this.props;
    const { images } = this.state;
    return (
      <ul>
        {images.map((image) => {
          return (
            <li key={image.id}
              className={styles.item}>
              <img src={image.src.tiny} alt={image.photographer} />
              <p>{image.label}</p>
            </li>
          );
        })}
         </ul>
      
        className={styles.cardSet}>
        {galleryImg.map((image) => (
          
        ))}
     
    );
  }
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
