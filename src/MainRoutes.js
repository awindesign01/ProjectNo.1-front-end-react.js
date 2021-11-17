import { Route, Routes } from "react-router-dom";
import PageCart from "./Page/PageCart";
import PageCheckout from "./Page/PageCheckout";
import PageHome from "./Page/PageHome";
import PageLogin from "./Page/PageLogin";
import PageSignUp from "./Page/PageSignUp";

const MainRoutes = () => {
	return (
		<section className="lg:w-85% xl:w-88% h-full w-full">
			<Routes>
				<Route index path="/" element={<PageHome />} />
				<Route path="/cart" element={<PageCart />} />
				<Route path="/checkout" element={<PageCheckout />} />
				<Route path="/log-in" element={<PageLogin />} />
				<Route path="/sigh-up" element={<PageSignUp />} />
			</Routes>
		</section>
	);
};

export default MainRoutes;
