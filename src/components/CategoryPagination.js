import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function CategoryPagination({totalPages, paginate, page}) {
    return (
        <Stack spacing={2}>
            <Pagination count={totalPages} variant="outlined" shape="rounded" page={page} onChange={paginate} />
        </Stack>
    )
}
