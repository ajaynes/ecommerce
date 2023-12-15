import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";

// TODO: fix the heights and margins after new grid is built

export default function ProductCard({
  title,
  thumbnail,
  price,
  rating,
  brand,
  id,
  images,
  discount,
  description
}) {
  return (
    <Card data-id={id} style={{ margin: '0 10px', display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
      {discount > 15 ? <div className="sale-flag">On Sale!</div> : null}
      <CardMedia
        sx={{ height: 180 }}
        image={thumbnail}
        title={`Thumbnail of ${title}`}
      />
      <CardContent style={{paddingBottom: '80px'}}>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <ProductPrice price={price} discount={discount} />
        </Typography>

        <ProductRating rating={rating} />
        <Typography variant="subtitle1" gutterBottom>
          {brand}
        </Typography>
        <Link
          to={`/product/${title.replace(/ +/g, "-").toLowerCase()}?id=${id}`} style={{position: 'absolute', bottom: '25px', width: 'calc(100% - 36px)'}}>
          <Button variant="outlined" fullWidth={true}>details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
