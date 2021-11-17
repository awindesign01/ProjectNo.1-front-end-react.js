import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./Input";

const initialValues = {
	// 1.
	name: "",
	email: "",
	phoneNumber: "",
	password: "",
	passwordconfirmation: "",
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
	name: yup.string().required("مثل آدم اسمتان را وارد کنید").min(6, "طول اسم نباید کمتر از 6 باشد"),
	email: yup.string().email("فرمت ایمیل درست نیست").required("لطفا ایمیل خود را وارد کنید !"),
	phoneNumber: yup
		.string()
		.required("شماره تلفن را وارد کنید")
		.matches(/^[0-9]{11}$/, "مقدار نوشته شده کمتر از استاندارد ایران است")
		.nullable(),
	password: yup
		.string()
		.required("رمز ایمیل را وارد کنید")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"حداقل 8 کلمه, حداقل یک حرف بزرگ, حداقل یک حرف بزرگ, حداقل یک عدد و یک کاراکتر",
		),
	passwordconfirmation: yup
		.string()
		.required("تکرار رمز خود را بزنید")
		.oneOf([yup.ref("password"), null], "رمز برابری نمی کند"),
});

const Login = () => {
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
				<Input formik={formik} name="email" label="Email" />
				<Input formik={formik} name="password" label="Password" type="password" />
				<button
					className="w-full h-8 border-2 bg-red-500 text-white border-red-400 rounded-lg"
					type="submit"
					// disabled={!formik.isValid}
				>
					Login
				</button>
			</form>
		</nav>
	);
};

export default Login;
