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
        <ul>
            {data.map(category => <li><Link to={`/category/${category}`}>{category}</Link></li>)}
        </ul>
        </>
      ) : null}
        </>
    )
}
