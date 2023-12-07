import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import { useParams } from "react-router-dom";
import { useGetCategoryByNameQuery } from "../services/product";
export default function Category(props) {
  const { categoryName } = useParams();
  let formattedName = categoryName;
  formattedName = formattedName.replaceAll('-', ' ').toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

  const { data, error, isLoading } = useGetCategoryByNameQuery(categoryName);
  const itemsPerPage = 12;
  const {total, limit, skip} = data
  console.log(total, limit, skip);
  return (
    <>
    {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
        <Header />
    <h1>{formattedName}</h1>
    <ProductGrid category={categoryName} limit={0} skip={0} />
      <p>grid of products with a sort and filter by price, rating, and brand</p>
      </>) : null}
    </>
  );
}
