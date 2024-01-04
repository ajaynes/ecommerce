import PropTypes from "prop-types";
export default function CategorySidebar({ filter, products, clearFilter }) {

  const ids = products.map(({ brand }) => brand);
  const filtered = products.filter(
    ({ brand }, index) => !ids.includes(brand, index + 1),
  );
  return (
    <>
      <div>Sidebar</div>
      {filtered.map((item) => (
        <button
          key={item.id}
          data-type="brand"
          value={item.brand}
          onClick={filter}
        >
          {item.brand}
        </button>
      ))}
      <button onClick={clearFilter}>Clear</button>
    </>
  );
}

CategorySidebar.propTypes = {
  filter: PropTypes.func,
  products: PropTypes.array,
  clearFilter: PropTypes.func,
};
