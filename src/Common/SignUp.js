import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./Input";
import SingUpService from "../Services/SingUpService";
import { Link, useNavigate } from "react-router-dom";
import { useAuthAction } from "../Context/AuthProvider";

const SingUp = () => {
	
	const [FormValue, setFormValue] = useState(null);
	const [error, setError] = useState(null);
	let navigate = useNavigate(); // for push yo pagehome.js
	const setAuth = useAuthAction();

	const initialValues = {
		name: "",
		email: "",
		phoneNumber: "",
		password: "",
	};

	const onSubmit = async (values) => {
		const { name, email, phoneNumber, password } = values;
		const userData = {
			name,
			email,
			phoneNumber,
			password,
		};
		try {
			const { data } = await SingUpService(userData);
			setAuth(data);
			// localStorage.setItem("authState", JSON.stringify(data));
			// console.log(data);
			setError(null);
			navigate("/");
		} catch (error) {
			// console.log(error.response.data.message);
			if (error.response && error.response.data.message) {
				setError(error.response.data.message);
			}
		}
	};

	const validationSchema = yup.object().shape({
		name: yup
			.string()
			.required("مثل آدم اسمتان را وارد کنید")
			.min(6, "طول اسم نباید کمتر از 6 باشد"),
		email: yup.string().email("فرمت ایمیل درست نیست").required("لطفا ایمیل خود را وارد کنید !"),
		phoneNumber: yup
			.string()
			.required("شماره تلفن را وارد کنید")
			.matches(/^[0-9]{11}$/, "مقدار نوشته شده کمتر از استاندارد جهانی است")
			.nullable(),
		password: yup
			.string()
			.required("رمز ایمیل را وارد کنید")
			.matches(
				/^(?=.*[0-9])/,
				"حداقل 8 کلمه, حداقل یک حرف بزرگ, حداقل یک حرف بزرگ, حداقل یک عدد و یک کاراکتر",
			),
	});

	const formik = useFormik({
		initialValues: FormValue || initialValues,
		onSubmit,
		validationSchema,
		validateOnMount: true,
		enableReinitialize: true,
	});

	return (
		<nav className="mx-auto w-96">
			<form onSubmit={formik.handleSubmit}>
				<Input formik={formik} name="name" label="Name" />
				<Input formik={formik} name="email" label="Email" />
				<Input formik={formik} name="phoneNumber" label="Phone Number" type="tel" />
				<Input formik={formik} name="password" label="Password" type="text" />
				<Input formik={formik} name="passwordConfirm" label="Password Confirm" type="text" />
				<button
					className="w-full h-8 border-2 bg-red-500 text-white border-red-400 rounded-lg"
					type="submit"
					// disabled={!formik.isValid}
				>
					Sign up
				</button>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<Link to="/log-in">
					<p>already login ?</p>
				</Link>
			</form>
		</nav>
	);
};

export default SingUp;
