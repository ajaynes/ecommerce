import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../services/product";
export default function Navigation({location}) {
    const { data, error, isLoading } = useGetAllCategoriesQuery();

    return (
        <>
        {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
        <ul style={{marginBottom: 50}}>
        <li><Link to={"/category/all-products"}>All Products</Link></li>
            {data.map((category, i) => <li key={i}><Link to={`/category/${category}`}>{category}</Link></li>)}
            <li key={data.length + 1}><Link to="/cart">Cart</Link></li>
        </ul>
        </>
      ) : null}
        </>
    )
}
