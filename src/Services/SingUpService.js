import HttpRequest from "./HttpRequest";

const SingUpService = (data) => {
	return HttpRequest.post("/user/register", data);
};

export default SingUpService;
