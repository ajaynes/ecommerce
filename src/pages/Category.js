/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { useGetCategoryByNameQuery } from "../services/product";
import CategoryPagination from "../components/CategoryPagination";
import { formatCategoryName } from "../utilities";
import CategoryPageLayout from "../layouts/CategoryPageLayout";

export default function Category() {
  const { categoryName } = useParams();
  let formattedName = formatCategoryName(categoryName);
  const [page, setPage] = useState(1);
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(12);
  const [filterByBrand, setFilterByBrand] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, error, isLoading } = useGetCategoryByNameQuery(categoryName);
  let totalPages = 1;
  console.log("file: Category.js:20 ~ totalPages:", totalPages);

  if (!isLoading) {
    totalPages = Math.ceil(data.products.length / 12);
  }

  const paginate = (e, value) => {
    if (value === 1) {
      setFirstIndex(0);
      setSecondIndex(12);
    } else {
      setSecondIndex(12 * value);
      setFirstIndex(12 * value - 12);
    }
    setPage(value);
    setSearchParams({ page: value });
  };

  const filter = (e, value) => {
    if (e.target.dataset.type === "brand") {
      console.log("filter by brand");
    }
  };

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <CategoryPageLayout products={data.products}>
            <button data-type="brand" value="Apple" onClick={filter}>
              Filter by brand: Apple
            </button>
            <h1>{formattedName}</h1>
            <>
              <ProductGrid
                category={categoryName}
                products={data.products.slice(firstIndex, secondIndex)}
              />
              {totalPages > 1 ? (
                <CategoryPagination
                  totalPages={totalPages}
                  paginate={paginate}
                  page={page}
                />
              ) : null}
            </>
          </CategoryPageLayout>
        </>
      ) : null}
    </>
  );
}
