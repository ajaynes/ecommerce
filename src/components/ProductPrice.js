import { formatCurrency } from "../utilities";
export default function ProductPrice({ price, discount }) {
  const discountPrice = Math.round(price - price / discount);
  return (
    <>
      <div className="price">
        {discount > 15 ? (
          <>
            <span className="was-price">{formatCurrency(price)}</span>
            <span className="sale-price">{formatCurrency(discountPrice)}</span>
          </>
        ) : (
          <span className="no-sale-price">{formatCurrency(discountPrice)}</span>
        )}
      </div>
    </>
  );
}
