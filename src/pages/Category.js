import { useState } from 'react'
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import { useGetCategoryByNameQuery } from "../services/product";
import CategoryPagination from "../components/CategoryPagination";

export default function Category(props) {
  const { categoryName } = useParams();
  let formattedName = categoryName;
  formattedName = formattedName.replaceAll('-', ' ').toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  const [page, setPage] = useState(1)
  const [productSkip, setProductSkip] = useState(0)

  const { data, error, isLoading } = useGetCategoryByNameQuery(categoryName);
  let totalPages = 1;
  if (!isLoading && !error) {
    if (data.total > 12) {
      totalPages = Math.ceil(data.total / 12)
    }
  }
  const paginate = (e, value) => {
    setPage(value)
    setProductSkip((value - 1) * 12)
  }

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
          {totalPages > 1 ? <><ProductGrid category={categoryName} limit={12} skip={productSkip} /> <CategoryPagination totalPages={totalPages} paginate={paginate} page={page} /> </> : <ProductGrid category={categoryName} limit={12} skip={0} />}
        </>) : null}
    </>
  );
}
