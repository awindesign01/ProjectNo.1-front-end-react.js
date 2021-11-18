import react, { useContext, useEffect, useState } from "react";

const AuthProviderContext = react.createContext(); // state
const AuthProviderContextDispatch = react.createContext(); // dispatch

const AuthProvider = ({ children }) => {
	const [state, setState] = useState(false);

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem("authState")) || false;
		setState(userData);
	}, [])

	useEffect(() => {
		const data = JSON.stringify(state);
		localStorage.setItem("authState",data);
	}, [state])

	return (
		<AuthProviderContext.Provider value={state}>
			<AuthProviderContextDispatch.Provider value={setState}>
				{children}
			</AuthProviderContextDispatch.Provider>
		</AuthProviderContext.Provider>
	);
};

export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext); // state
export const useAuthAction = () => useContext(AuthProviderContextDispatch); // dispatch or setState