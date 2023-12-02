import { useSearchParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProductGallery from "../components/ProductGallery";
import ProductPrice from "../components/ProductPrice";
import ProductGrid from "../components/ProductGrid";
import ProductRating from "../components/ProductRating";

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
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={5}>
              <ProductGallery images={data.images} id={data.id} />
            </Grid>
            <Grid item xs={7}>
              <div className="product-info">
                <Typography variant="h4" component="h1" gutterBottom>
                  {data.title}
                </Typography>
                <ProductPrice discount={data.discountPercentage} price={data.price} />
                <Typography variant="h5" component="h2" gutterBottom>
                  {data.brand}
                </Typography>
                <ProductRating rating={data.rating} />
                <Typography variant="p" component="p" gutterBottom>{data.description}</Typography>
              </div>
            </Grid>
          </Grid>
          <div className="related-products">
            <Typography variant="h6" component="h3" gutterBottom>Related Products</Typography>
            <ProductGrid category={data.category} limit={5} skip={0} />
          </div>
        </Container>
      ) : null}
    </>
  );
}
