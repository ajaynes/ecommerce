import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { formatCategoryName } from "../utilities";

export default function Breadcrumb(props) {
  const location = useLocation();
  return (
    <div role="presentation" className="breadcrumbs">
      {location.pathname.indexOf("product") !== -1 &&
      location.pathname.indexOf("products") !== 14 ? (
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to={`/category/${props.path}`}>
            {formatCategoryName(props.path)}
          </Link>
          <Typography color="text.primary">
            {formatCategoryName(location.pathname.split("/")[2])}
          </Typography>
        </Breadcrumbs>
      ) : (
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Typography color="text.primary">
            {formatCategoryName(location.pathname.split("/")[2])}
          </Typography>
        </Breadcrumbs>
      )}
    </div>
  );
}

Breadcrumb.propTypes = {
  path: PropTypes.string,
};
