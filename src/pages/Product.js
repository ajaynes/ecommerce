import { useSearchParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ProductGallery from "../components/ProductGallery";
import ProductPrice from "../components/ProductPrice";
import ProductGridSlider from "../components/ProductGridSlider";
import ProductRating from "../components/ProductRating";
import { useGetProductByIdQuery } from "../services/product";
import AddToCart from "../components/AddToCart";
import ProductPageLayout from "../layouts/ProductPageLayout";


export default function Product() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id")
  const { data, error, isLoading } = useGetProductByIdQuery(productId);


  console.log(data)

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <ProductPageLayout category={data.category}>
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
                  <AddToCart data={data} />
                </div>
              </Grid>
            </Grid>
            <div className="related-products">
              <Typography variant="h6" component="h3" gutterBottom>Related Products</Typography>
              <ProductGridSlider category={data.category} limit={5} skip={0} type="product" />
            </div>
          </ProductPageLayout>
        </>
      ) : null}
    </>
  );
}
