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
            {data.map((category, i) => <li><Link key={i} to={`/category/${category}`}>{category}</Link></li>)}
            <li><Link key={data.length + 1} to="/cart">Cart</Link></li>
        </ul>
        </>
      ) : null}
        </>
    )
}
