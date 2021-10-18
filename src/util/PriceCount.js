export const DiscountAmount = (original_price, discount) => {
  return original_price - (original_price * discount) / 100 - 1;
};
