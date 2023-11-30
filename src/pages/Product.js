import { useLocation } from "react-router-dom";

import ProductGallery from "../components/ProductGallery";
import ProductPrice from "../components/ProductPrice";
export default function Product() {
  const location = useLocation();
  const { title, thumbnail, price, rating, brand, id, images, discount } =
    location.state;
  return (
    <>
      <ProductGallery images={images} id={id} />
      <div className="product-info">
        <ProductPrice discount={discount} price={price} />
      </div>
      <p>left side with gallery</p>
      <p>right side with name, brand, price, and rating</p>
      <p>below with description</p>
      <p>below related products (in same category)</p>
    </>
  );
}
