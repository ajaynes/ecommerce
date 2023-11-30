import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
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
      <ImageList sx={{ width: 500, height: 350 }} cols={3} rowHeight={164}>
        {images.map((item) => (
          <ImageListItem key={item} onClick={(e) => handleClick(e)}>
            <img
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
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
