export const formatCurrency = (item) => {
  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    useGrouping: false,
  });
  return currencyFormat.format(item);
};

export const formatCategoryName = (name) => {
  return name
    .replaceAll("-", " ")
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
};
