import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
export default function CategorySidebar({
  filter,
  products,
  clearFilter,
  isFiltered,
}) {
  const brands = products.map(({ brand }) => brand);
  let filtered = products.filter(
    ({ brand }, index) => !brands.includes(brand, index + 1),
  );
  filtered = filtered.sort((a, b) =>
    a.brand.localeCompare(b.brand, undefined, { sensitivity: "base" }),
  );

  return (
    <>
      <Typography variant="h6" component="h2" gutterBottom>
        Filter By Brand
      </Typography>

      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
        className="filters"
      >
        {filtered.map((item) => (
          <Button
            key={item.id}
            size="small"
            data-type="brand"
            value={item.brand}
            onClick={filter}
          >
            {item.brand}
          </Button>
        ))}
      </ButtonGroup>
      {isFiltered ? (
        <IconButton
          variant="contained"
          onClick={clearFilter}
          aria-label="Clear Filters"
          size="small"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      ) : null}
    </>
  );
}

CategorySidebar.propTypes = {
  filter: PropTypes.func,
  products: PropTypes.array,
  clearFilter: PropTypes.func,
  isFiltered: PropTypes.bool,
};
