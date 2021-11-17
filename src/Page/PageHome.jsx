import { useCart, useCartActions } from "../Context/CartProviders";
import { data } from "../db/Data";
import CheckInCart from "../Utils/CheckInCart";
import { Link } from "react-router-dom";

const PageHome = () => {
	const { cart } = useCart();
	const dispatch = useCartActions();
	const addProductHandler = (event) => {
		// console.log(event);

		dispatch({ type: "ADD_TO_CART", payload: event });
	};
	return (
		<main>
			<section className="mx-auto mt-4 w-3/4 h-auto flex flex-wrap justify-around rounded-lg">
				{data.map((e) => (
					<nav
						className="w-60 mb-6 h-80 rounded-lg border-b-4 border-solid border-red-500 shadow-lg transition-all transform hover:-translate-y-2 hover:shadow-2xl"
						key={e.id}
					>
						<nav className="h-3/4 w-full ">
							<img src={e.image} alt="img-shoes" className="rounded-tl-lg rounded-tr-lg" />
						</nav>
						<nav className="mx-auto h-1/4 w-11/12 rounded-bl-lg rounded-br-lg flex flex-col justify-evenly">
							<nav className="h-1/2 w-full flex justify-between">
								<nav className="w-2/3 h-full flex flex-col justify-around">
									<p className=" py-1 w-1/2 text-white text-xs bg-red-500 text-center rounded-md">
										{e.company}
									</p>
									<h1 className="my-2 text-md text-gray-600">{e.name}</h1>
								</nav>
								<nav className="w-1/3 h-full flex justify-end items-end">
									<h1 className=" text-xl text-red-500">${e.offPrice}</h1>
									<h1 className="ml-2 text-xl text-red-500 line-through">${e.price}</h1>
								</nav>
							</nav>
							<nav className="h-1/2 w-full flex justify-around items-center">
								<nav className="w-1/2 h-4/5 rounded-lg flex justify-around text-white">
									{/* {e.size.map((ev) => (
										<nav className="w-7 h-7 border-2 border-solid border-gray-500 border-opacity-30 rounded-lg grid place-items-center transition-all hover:bg-red-500 hover:border-0 cursor-pointer group">
											<p className="text-xs group-hover:text-white">{ev}</p>
										</nav>
									))} */}
								</nav>
								<button
									className="w-1/2 h-4/5 rounded-lg grid place-items-center text-white bg-red-500 cursor-pointer"
									onClick={() => addProductHandler(e)}
								>
									<p className="text-white">
										{CheckInCart(cart, e) ? (
											<Link to="/cart" className="text-whited text-white">
												in cart
											</Link>
										) : (
											"Buy"
										)}
									</p>
								</button>
							</nav>
						</nav>
					</nav>
				))}
			</section>
		</main>
	);
};

export default PageHome;


