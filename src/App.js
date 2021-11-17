import "./App.css";
import CartProviders from "./Context/CartProviders";
import Layout from "./Layout/Layout";
import MainRoutes from "./MainRoutes";

function App() {
	return (
		<section className="mx-auto App">
			<CartProviders>
				<Layout>
					<MainRoutes />
				</Layout>
			</CartProviders>
		</section>
	);
}

export default App;
