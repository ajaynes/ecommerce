import { useState } from "react";
import PropTypes from "prop-types";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// TODO: FIX the main image doesn't change if you choose another product from the related list

export default function ProductGallery(props) {
  const { images, id } = props;
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const handleClick = (e) => {
    setSelectedImage(e.target.src.split("?")[0]);
  };
  return (
    <>
      <div className="main-image">
        <img src={selectedImage} />
      </div>
      <ImageList sx={{ height: 300 }} cols={5} rowHeight={150} gap={8}>
        {images.map((item) => (
          <ImageListItem key={item} onClick={(e) => handleClick(e)}>
            <img
              src={item}
              alt="placeholder"
              id={id}
              loading="lazy"
              className={item === selectedImage ? "active" : null}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

ProductGallery.propTypes = {
  images: PropTypes.array,
  id: PropTypes.number,
};
