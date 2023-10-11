import axios, { AxiosError } from "axios";
import { WEB_PATHS, API } from "./Constants";

class AxiosService {
	getAxiosInstance = () => {
		//
		const instance = axios.create({
			baseURL: API.BASE_URL,
			withCredentials: true,
		});
		//
		const localUser = { email: "abc@gmail.com", token: "abc123456" };
		const token = localUser ? localUser.token : "";
		//
		instance.defaults.headers.common["Authorization"] = token;
		instance.defaults.headers.common["Content-Type"] = "application/json";
		// instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
		return instance;
	};

	//set up Axios Interceptors
	//if the user logged in, all the request header will add header authorization
	setupAxiosInterceptors(basicAuthHeader: string) {
		// Add a request interceptor
		axios.interceptors.request.use(
			(config) => {
				// Do something before request is sent
				config.headers.Authorization = basicAuthHeader;
				return config;
			},
			function (error: AxiosError) {
				if (error.response?.status === 401) {
					// Redirect unauthorized user to the login path
					window.location.href = WEB_PATHS.USER.SIGN_IN;
				}
				// Do something with request error
				return Promise.reject(error);
			}
		);

		// Add a response interceptor
		axios.interceptors.response.use(
			(response) => {
				// Any status code that lie within the range of 2xx cause this function to trigger
				// Do something with response data
				return response;
			},
			function (error) {
				// Any status codes that falls outside the range of 2xx cause this function to trigger
				// Do something with response error
				return Promise.reject(error);
			}
		);
	}
}

export default new AxiosService();
