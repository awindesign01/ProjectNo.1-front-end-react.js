const CheckInCart = (cart, e) => {
   return cart.find(i => i.id === e.id);
}
 
export default CheckInCart;