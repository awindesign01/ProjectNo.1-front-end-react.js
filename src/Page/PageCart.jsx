import Cart from "../Components/Cart/Cart";
import { useCart, useCartActions } from "../Context/CartProviders";

const PageCart = () => {
	const { cart, total } = useCart();
	const dispatch = useCartActions();
	return (
		<nav>
			{cart.length ? (
				<Cart cart={cart} dispatch={dispatch} total={total} />
			) : (
				<p className="mt-4 text-center">no item in cart ...!</p>
			)}
		</nav>
	);
};

export default PageCart;
