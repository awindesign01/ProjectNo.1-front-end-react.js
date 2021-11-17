const Input = ({ label, name, formik, type = "text" }) => {
	return (
		<nav className="my-4">
			<label htmlFor={name} className="font-bold flex justify-between">
				{label}
				{formik.errors[name] && formik.touched[name] && (
					<div className="text-red-400">{formik.errors[name]}</div>
				)}
			</label>
			<input
				type={type}
				className="w-96 h-9 border-2 border-red-400 rounded-lg"
				name={name}
				{...formik.getFieldProps(name)}
			/>
		</nav>
	);
};

export default Input;
