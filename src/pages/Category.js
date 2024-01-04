/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { useGetCategoryByNameQuery } from "../services/product";
import CategoryPagination from "../components/CategoryPagination";
import { formatCategoryName } from "../utilities";
import CategoryPageLayout from "../layouts/CategoryPageLayout";
import CategorySidebar from "../components/CategorySidebar";

export default function Category() {
  const { categoryName } = useParams();
  let formattedName = formatCategoryName(categoryName);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(0);
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(12);
  const [productList, setProductList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const location = useLocation();

  const { data, error, isLoading } = useGetCategoryByNameQuery(categoryName);
  let totalPages = 1;

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

  useEffect(() => {
    setProductList(data?.products);
  });
  useEffect(() => {
    setIsFiltered(false);
    setAllPages(0);
  }, [location]);

  const filter = (e) => {
    if (e.target.dataset.type === "brand") {
      setIsFiltered(true);
      setFilteredList(
        productList.filter((product) => product.brand === e.target.value),
      );
      setAllPages(
        Math.ceil(
          productList.filter((product) => product.brand === e.target.value)
            .length / 12,
        ),
      );
    }
  };

  const clearFilter = () => {
    setIsFiltered(false);
    setAllPages(0);
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
            <CategorySidebar
              filter={filter}
              products={isFiltered ? filteredList : data.products}
              clearFilter={clearFilter}
            />
            <h1>{formattedName}</h1>
            <>
              <ProductGrid
                category={categoryName}
                products={
                  isFiltered
                    ? filteredList
                    : data.products.slice(firstIndex, secondIndex)
                }
              />
              {totalPages > 1 && allPages === 0 ? (
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
