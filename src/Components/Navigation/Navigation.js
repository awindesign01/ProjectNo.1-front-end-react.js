import { NavLink } from "react-router-dom";
import { useCart } from "../../Context/CartProviders";
import {useAuth} from "../../Context/AuthProvider"

const Navigation = () => {
	const { cart } = useCart();
	const userData = useAuth();
	const activeStyle = {
		color: "red",
	};
	return (
		<nav className="mx-auto w-3/4 h-11/12">
			<ul className="flex flex-row-reverse justify-around items-center">
				<nav className="w-1/6 flex justify-around items-center">
					<li className="h-8 w-16 text-center rounded-lg hover:bg-red-100 grid place-items-center">
						<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} exact to="/">
							Home
						</NavLink>
					</li>
					<h1>Shop Store</h1>
				</nav>
				<nav className="w-5/6 flex flex-row-reverse justify-end">
					<li className="h-8 w-16 text-center rounded-lg hover:bg-red-100 flex justify-center items-center">
						<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/cart">
							cart
						</NavLink>
						<nav className="w-4 h-4 bg-red-500 relative right-1 bottom-2 rounded-full text-sm text-white grid place-items-center">
							{cart.length}
						</nav>
					</li>
					{/* <li className="h-8 w-16 text-center rounded-lg hover:bg-white flex justify-around items-center">
						<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/log-in">
							login-in
						</NavLink>
					</li>
					<li className="h-8 w-16 text-center rounded-lg hover:bg-white flex justify-around items-center">
						<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/sigh-up">
							sigh-up
						</NavLink>
					</li> */}
					<li className="h-8 mx-3 w-auto text-center rounded-lg hover:bg-red-100 flex justify-around items-center">
						<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to={userData ? "/Profile" : "/log-in"}>
							{userData ? "Profile" : "login/signup"}
						</NavLink>
					</li>
				</nav>
			</ul>
		</nav>
	);
};

export default Navigation;
