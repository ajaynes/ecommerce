import Rating from '@mui/material/Rating';
export default function ProductRating({rating}) {
    return (
        <div className="ratings"><Rating name="read-only" value={rating} readOnly /> <span className='total-rating'>({rating})</span></div>
    )
}
