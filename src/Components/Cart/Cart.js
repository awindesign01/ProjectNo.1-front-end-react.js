import { Link } from "react-router-dom";

const Cart = ({ cart, dispatch, total }) => {
	const incrementHandler = (cartItem) => {
		dispatch({ type: "ADD_TO_CART", payload: cartItem });
	};
	const decrementHandler = (cartItem) => {
		dispatch({ type: "REMOVE_CART", payload: cartItem });
	};
	return (
		<nav className="mx-auto mt-4 w-4/5 h-auto flex">
			<nav className="w-4/5 h-44 grid place-items-center">
				{cart.map((e) => (
					<nav className="mt-2 h-40 w-11/12 bg-white rounded-lg shadow-lg flex">
						<nav className="w-1/5 h-full grid place-items-center">
							<img src={e.image} alt="img" className="w-44" />
						</nav>
						<nav className="ml-2 w-3/5 h-full flex">
							<nav className="w-1/2 h-full flex flex-col justify-evenly ">
								<p>model : {e.name}</p>
								<p>company : {e.company}</p>
								<p>price : {e.price * e.quantity}$</p>
							</nav>
							<nav className="w-1/2 h-full flex flex-col justify-evenly">
								{e.description.map((ev) => (
									<nav>👍 {ev.support}</nav>
								))}
							</nav>
						</nav>
						<nav className="w-1/5 h-full flex flex-col justify-evenly items-center">
							<button
								className="w-1/2 h-8 text-white font-bold bg-red-500 rounded-lg"
								onClick={() => incrementHandler(e)}
							>
								Add
							</button>
							<p>{e.quantity}</p>
							<button
								className="w-1/2 h-8 text-gray-500 font-bold border-2 border-solid border-red-200 rounded-lg"
								onClick={() => decrementHandler(e)}
							>
								Remove
							</button>
						</nav>
					</nav>
				))}
			</nav>
			<CartSummery total={total} cart={cart} />
		</nav>
	);
};

export default Cart;

const CartSummery = ({ total, cart }) => {
	const originalTotalPrice = cart.length
		? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
		: 0;

	return (
		<nav className="w-2/5 h-44 grid place-items-center">
			<nav className="p-4 h-40 w-11/12 bg-white rounded-lg shadow-lg flex flex-col justify-between">
				<nav className="flex justify-between">
					<h1>Cart Summery</h1>
				</nav>
				<nav className="flex justify-between">
					<p>total price</p>
					<p>{originalTotalPrice} $</p>
				</nav>
				<nav className="flex justify-between">
					<p>cart discount</p>
					<p>{originalTotalPrice - total} $</p>
				</nav>
				<nav className="pt-2 flex justify-between border-t-2 border-solid border-gray-300">
					<p>total price</p>
					<p>{total} $</p>
				</nav>
				<Link to="/checkout">
					<button className="w-full bg-red-500 rounded-md text-white">Go to Checkout</button>
				</Link>
			</nav>
		</nav>
	);
};
