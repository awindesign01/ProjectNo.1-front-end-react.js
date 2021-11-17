import { NavLink } from "react-router-dom";
import { useCart } from "../../Context/CartProviders";

const Navigation = () => {
	const { cart } = useCart();
	const activeStyle = {
		color: "red",
	};
	return (
		<nav className="mx-auto w-1/6 h-11/12">
			<ul className="flex justify-around items-center">
				<li className="h-8 w-16 text-center rounded-lg hover:bg-white grid place-items-center">
					<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} exact to="/">
						Home
					</NavLink>
				</li>
				<li className="h-8 w-16 text-center rounded-lg hover:bg-white flex justify-around items-center">
					<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/cart">
						cart
					</NavLink>
					<nav className="w-4 h-4 bg-red-500 relative right-3 bottom-2 rounded-full text-sm text-white grid place-items-center">
						{cart.length}
					</nav>
				</li>
				<li className="h-8 w-16 text-center rounded-lg hover:bg-white flex justify-around items-center">
					<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/log-in">
						login-in
					</NavLink>
				</li>
				<li className="h-8 w-16 text-center rounded-lg hover:bg-white flex justify-around items-center">
					<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/sigh-up">
						sigh-up
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
