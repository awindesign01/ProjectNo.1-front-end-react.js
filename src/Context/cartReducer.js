const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART": {
			const UpdatedCart = [...state.cart];
			// console.log("UpdatedCart", UpdatedCart);
			const UpdatedItemIndex = UpdatedCart.findIndex((item) => item.id === action.payload.id);
			if (UpdatedItemIndex < 0) {
				// return { ...state, cart: [...state.cart, { ...action.payload.quantity: 1 }] };
				UpdatedCart.push({ ...action.payload, quantity: 1 });
			} else {
				const updatedItem = { ...UpdatedCart[UpdatedItemIndex] };
				updatedItem.quantity++;
				UpdatedCart[UpdatedItemIndex] = updatedItem;
			}
			return { ...state, cart: UpdatedCart, total: state.total + action.payload.price };
		}
		// return state;
		case "REMOVE_CART": {
			const UpdatedCart = [...state.cart];
			const UpdatedItemIndex = UpdatedCart.findIndex((item) => item.id === action.payload.id);
			const updatedItem = { ...UpdatedCart[UpdatedItemIndex] };
			if (updatedItem.quantity === 1) {
				const filterCart = UpdatedCart.filter((i) => i.id !== action.payload.id);
				return { ...state, cart: filterCart };
			} else {
				updatedItem.quantity--;
				UpdatedCart[UpdatedItemIndex] = updatedItem;
				return { ...state, cart: UpdatedCart, total: state.total - action.payload.price };
			}
		}
		default:
			return state;
	}
};
export default cartReducer;
