import HttpRequest from "./HttpRequest";

const LoginService = (data) => {
	return HttpRequest.post("/user/login", data);
};
export default LoginService;
