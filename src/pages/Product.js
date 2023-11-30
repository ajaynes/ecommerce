import { useSearchParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import ProductGallery from "../components/ProductGallery";
import ProductPrice from "../components/ProductPrice";
import ProductGrid from "../components/ProductGrid";
import { useGetProductByIdQuery } from "../services/product";

export default function Product() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id")
  const { data, error, isLoading } = useGetProductByIdQuery(productId);
  return (
    <>
    {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div>
        <ProductGallery images={data.images} id={data.id} />
        <div className="product-info">
          <Typography variant="h4" component="h1" gutterBottom>
            {data.title}
          </Typography>
          <ProductPrice discount={data.discountPercentage} price={data.price} />
          <Typography variant="h6" component="h3" gutterBottom>
            {data.brand}
          </Typography>
          <Rating name="read-only" value={data.rating} readOnly />
        </div>
      </div>
      <div>
      <Typography variant="p" component="p" gutterBottom>{data.description}</Typography>
      <ProductGrid category={data.category} limit={4} skip={0} />
      </div>
        </>
      ) : null}

      {/* <p>left side with gallery</p>
      <p>right side with name, brand, price, and rating</p>
      <p>below with description</p>
      <p>below related products (in same category)</p> */}
    </>
  );
}
