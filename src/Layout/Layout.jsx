import Navigation from "../Components/Navigation/Navigation";

const Layout = ({ children }) => {
	return (
		<section>
			<header className="w-full h-16 flex items-center bg-white shadow-lg">
				<Navigation />
			</header>
			{children}
		</section>
	);
};

export default Layout;
