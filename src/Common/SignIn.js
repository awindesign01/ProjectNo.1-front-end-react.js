import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./Input";
import { Link } from "react-router-dom";

const initialValues = {
	// 1.
	email: "",
	password: "",
};

const onSubmit = (values) => {
	// 2.
	console.log(values);
	// axios
	// 	.post("http://localhost:3002/users", values)
	// 	.then((res) => console.log(res.data))
	// 	.catch((err) => console.log(err));
};

const validationSchema = yup.object().shape({
	// 3.
	email: yup.string().email("فرمت ایمیل درست نیست").required("لطفا ایمیل خود را وارد کنید !"),
	password: yup
		.string()
		.required("رمز ایمیل را وارد کنید")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"حداقل 8 کلمه, حداقل یک حرف بزرگ, حداقل یک حرف بزرگ, حداقل یک عدد و یک کاراکتر",
		),
});

const SignIn = () => {
	const [FormValue, setFormValue] = useState(null);

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
				<Input formik={formik} name="name" label="Name" />
				<Input formik={formik} name="email" label="Email" />
				<Input formik={formik} name="phoneNumber" label="Phone Number" type="tel" />
				<Input formik={formik} name="password" label="Password" type="password" />
				<Input formik={formik} name="passwordConfirm" label="Password Confirm" type="password" />
				<button
					className="w-full h-8 border-2 bg-red-500 text-white border-red-400 rounded-lg"
					type="submit"
					// disabled={!formik.isValid}
				>
					Sign up
				</button>
				<Link to="/log-in">
					<p>already login ?</p>
				</Link>
			</form>
		</nav>
	);
};

export default SignIn;
