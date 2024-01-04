import PropTypes from "prop-types";
import ProductFilters from "./ProductFilters";
export default function CategorySidebar({ filter, products, clearFilter }) {
  return (
    <>
      <div>Sidebar</div>
      <ProductFilters
        filter={filter}
        products={products}
        clearFilter={clearFilter}
      />
    </>
  );
}

CategorySidebar.propTypes = {
  filter: PropTypes.func,
  products: PropTypes.array,
  clearFilter: PropTypes.func,
};
