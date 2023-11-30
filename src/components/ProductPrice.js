import { formatCurrency } from "../utilities";
export default function ProductPrice({ price, discount }) {
  const discountPrice = Math.round(price - price / discount);
  return (
    <>
      <div class="price">
        {discount > 15 ? (
          <>
            <span className="was-price">was {formatCurrency(price)}</span>
            <span className="price">now {formatCurrency(discountPrice)}</span>
          </>
        ) : (
          <span className="price">{formatCurrency(discountPrice)}</span>
        )}
      </div>
    </>
  );
}
