import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

export default function CategoryPagination({ totalPages, paginate, page }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={paginate}
      />
    </Stack>
  );
}

CategoryPagination.propTypes = {
  totalPages: PropTypes.number,
  paginate: PropTypes.func,
  page: PropTypes.number,
};
