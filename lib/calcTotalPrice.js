export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.cut) return tally;
    return tally + cartItem.quantity * cartItem.cut.price;
  }, 0);
}
