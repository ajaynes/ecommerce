import { useGetProductsWithLimitsSkipQuery } from "../services/product";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";

export default function ProductGrid({ category, limit, skip }) {
  const { data, error, isLoading } = useGetProductsWithLimitsSkipQuery({
    category,
    limit,
    skip,
  });
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {data.products.map((product) => (
                <Grid item xs={6} md={3} key={product.id}>
                  <ProductCard
                    title={product.title}
                    thumbnail={product.thumbnail}
                    price={product.price}
                    rating={product.rating}
                    brand={product.brand}
                    id={product.id}
                    images={product.images}
                    discount={product.discountPercentage}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : null}
    </>
  );
}