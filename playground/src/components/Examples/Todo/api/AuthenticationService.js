
import axios from 'axios';

class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        //console.log(username + password);
        let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
        console.log("username:" + username + " / password:" + password + " / Authorization:" + basicAuthHeader);
        sessionStorage.setItem('authenticationUser', username);
        sessionStorage.setItem('authenticationPass', password);
        this.setupAxiosInterceptors(basicAuthHeader);
    }

    unRegisterAuth() {
        sessionStorage.removeItem('authenticationUser');
        sessionStorage.removeItem('authenticationPass');
    }

    isUserLoggedIn() {
        let username = sessionStorage.getItem('authenticationUser');
        if (username === null) return false;
        return true;

    }

    getSessionUsername() {
        let username = sessionStorage.getItem('authenticationUser');
        if (username === null) {
            return ''
        }
        return username;
    }

    //set up Axios Interceptors
    //if the user logged in, all the request header will add header authorization
    setupAxiosInterceptors(basicAuthHeader) {

        // Add a request interceptor
        axios.interceptors.request.use((config) => {
            // Do something before request is sent
            if (this.isUserLoggedIn()) {
                config.headers.Authorization = basicAuthHeader
                //config.headers.ContentType = 'application/json'
            }
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        axios.interceptors.response.use((response) => {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        });



    }




}

export default new AuthenticationService()