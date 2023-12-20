import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} alignItems="stretch">
          {products.map((product) => (
            <Grid
              item
              style={{ display: "flex" }}
              xs={6}
              md={3}
              key={product.id}
            >
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
  );
}

ProductGrid.propTypes = {
  products: PropTypes.array,
};
