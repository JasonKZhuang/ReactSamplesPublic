//https://github.com/axios/axios
import axios from 'axios';

class HelloWorldService {
    executeHellowWorldService() {
        //console.log("execute hello world service");
        let url = "http://localhost:8080/jasonSpringBoot/welcome/HelloWorld";
        //let username = 'jason';
        //let password = 'jason';
        //let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);

        // return axios.get(url, {
        //     headers: { Authorization: basicAuthHeader }
        // });
        return axios.get(url);
    }

    executeHellowWorldPathVaribleService(name) {
        //console.log("execute hello world path variable service");
        let url = "http://localhost:8080/jasonSpringBoot/welcome/HelloWorld/path-variable";
        let username = 'jason';
        // let password = 'jason';
        // let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
        // return axios.get(`http://localhost:8080/jasonSpringBoot/welcome/HelloWorld/path-variable/${name}`, {
        //     headers: { Authorization: basicAuthHeader }
        // });

        return axios.get(url + '/' + username);

    }
}

export default new HelloWorldService();