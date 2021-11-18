import "./App.css";
import CartProviders from "./Context/CartProviders";
import Layout from "./Layout/Layout";
import MainRoutes from "./MainRoutes";
import AuthProvider from "./Context/AuthProvider";

function App() {
	return (
		<section className="mx-auto App">
			<AuthProvider>
				<CartProviders>
					<Layout>
						<MainRoutes />
					</Layout>
				</CartProviders>
			</AuthProvider>
		</section>
	);
}

export default App;
