// export let USDollar = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
// });
export const formatCurrency = (item) => {
  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    useGrouping: false,
  });
  return currencyFormat.format(item);
};
