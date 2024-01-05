import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import CategorySidebar from "../components/CategorySidebar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function CategoryPageLayout({
  filter,
  products,
  clearFilter,
  children,
  name,
  isFiltered,
}) {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <div className="body-layout">
          <Breadcrumb />
          <Grid container spacing={4}>
            <Grid item md={8}>
              <Typography variant="h4" component="h1" gutterBottom>
                {name}
              </Typography>
            </Grid>
            <Grid item md={4}></Grid>
          </Grid>
          <Divider sx={{ mb: "2rem" }} />
          <Grid container spacing={4}>
            <Grid item md={2}>
              <CategorySidebar
                filter={filter}
                products={products}
                clearFilter={clearFilter}
                isFiltered={isFiltered}
              />
            </Grid>
            <Grid item md={10}>
              {children}
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

CategoryPageLayout.propTypes = {
  children: PropTypes.array,
  name: PropTypes.string,
  filter: PropTypes.func,
  clearFilter: PropTypes.func,
  products: PropTypes.array,
  isFiltered: PropTypes.bool,
};
