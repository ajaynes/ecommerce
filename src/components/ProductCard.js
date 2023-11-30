import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductPrice from "./ProductPrice";

export default function ProductCard({
  title,
  thumbnail,
  price,
  rating,
  brand,
  id,
  images,
  discount,
}) {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <Card data-id={id}>
      <CardMedia
        sx={{ height: 140 }}
        image={thumbnail}
        title={`Thumbnail of ${title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <ProductPrice price={price} discount={discount} />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {rating}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {brand}
        </Typography>
        <Link
          to={`/product/${title.replace(/ +/g, "-").toLowerCase()}`}
          state={{ title, thumbnail, price, rating, brand, id, images }}
        >
          details
        </Link>
      </CardContent>
    </Card>
  );
}
