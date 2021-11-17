import react, { useReducer } from "react";
import { useContext } from "react/cjs/react.development";
import cartReducer from "./cartReducer";

const CartContext = react.createContext(); // state
const CartContextDispatch = react.createContext(); // dispatch

const initialState = {
	cart: [],
	total: 0,
};
const CartProviders = ({ children }) => {
	const [cart, dispatch] = useReducer(cartReducer, initialState);
	return (
		<CartContext.Provider value={cart}>
			<CartContextDispatch.Provider value={dispatch}>{children}</CartContextDispatch.Provider>
		</CartContext.Provider>
	);
};

export default CartProviders;

export const useCart = () => useContext(CartContext); // state
export const useCartActions = () => useContext(CartContextDispatch); // dispatch
