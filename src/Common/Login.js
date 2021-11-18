import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./Input";
import LoginService from "../Services/LoginService";
import { useNavigate } from "react-router-dom";
import {useAuthAction} from "../Context/AuthProvider"

const Login = () => {
	const [FormValue, setFormValue] = useState(null);
	const [error, setError] = useState(null);
	let navigate = useNavigate(); // for push yo pagehome.js
	const setAuth = useAuthAction();
	
	const initialValues = {
		email: "",
		password: "",
	};

	const onSubmit = async (values) => {
		// console.log(values);
		try {
			const { data } = await LoginService(values);
			setAuth(data);
			// localStorage.setItem("authState", JSON.stringify(data))
			// console.log(data);
			setError(null);
			navigate("/");
		} catch (error) {
			// console.log(error);
			if (error.response && error.response.data.message) {
				setError(error.response.data.message);
			}
		}
	};

	const validationSchema = yup.object().shape({
		email: yup.string().email("فرمت ایمیل درست نیست").required("لطفا ایمیل خود را وارد کنید !"),
		password: yup
			.string()
			.required("رمز ایمیل را وارد کنید")
			.matches(/(?=.*[0-9])/, " only number"),
	});

	const formik = useFormik({
		initialValues: FormValue || initialValues,
		onSubmit: onSubmit,
		validationSchema,
		validateOnMount: true,
		enableReinitialize: true,
	});

	return (
		<nav className="mx-auto w-96">
			<form onSubmit={formik.handleSubmit}>
				<Input formik={formik} name="email" label="Email" />
				<Input formik={formik} name="password" label="Password" type="password" />
				<button
					className="w-full h-8 border-2 bg-red-500 text-white border-red-400 rounded-lg"
					type="submit"
					// disabled={!formik.isValid}
				>
					Login
				</button>
				{error && <p style={{ color: "red" }}>{error}</p>}
			</form>
		</nav>
	);
};;

export default Login;
