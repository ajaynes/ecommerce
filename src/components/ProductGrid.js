import { useSearchParams } from "react-router-dom";
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

  const [searchParams] = useSearchParams();
  // on product pages remove the current product from the list of related products
  let filteredData;
  if (data) {
    if (searchParams.get("id")) {
      filteredData = data.products.filter(p => p.id !== Number(searchParams.get("id")))
    } else {
      filteredData = data.products
    }
  }
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
              {filteredData.map((product) => (
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
                    description={product.description}
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
