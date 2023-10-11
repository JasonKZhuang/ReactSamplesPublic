//https://www.intricatecloud.io/2019/07/adding-google-sign-in-to-your-webapp-pt-1/
//https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow
//https://developers.google.com/identity/sign-in/web/
//https://console.developers.google.com/apis/dashboard
//https://medium.com/better-programming/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668
//https://babeljs.io/
import React, { Component } from 'react';
import './SocialMediaLoginPlug.css';
import axios from 'axios';
import * as WebConstants from '../Constants/WebConstants';
/* window.gapi */
//
const GOOGLE_CLIENT_ID = '183672162544-ah40k03bv893q7r1q1653unmrc7ia19e.apps.googleusercontent.com';
//
const headers = {
    'Content-Type': 'application/json',
    'withCredentials': 'true'
}
//my system User Object
const userObj = {
    userId: '',
    email: '',
    userName: '',
    token: '',
    loginFlag: false
}
//google auth2 object
var googleAuth2;
//
class GoogleLoginPlug extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        accessToken: '',
        dataAccessExpirationTime: 0,
        name: '',
        email: '',
        picture: ''
    };

    componentDidMount() {
        const meta = document.createElement("meta");
        meta.name = "google-signin-client_id";
        meta.content = GOOGLE_CLIENT_ID;
        document.head.appendChild(meta);

        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/platform.js";
        script.async = true;
        script.defer = true;
        script.onload = this.initClient;
        document.body.appendChild(script);
    }

    initClient = () => {
        window.gapi.load('auth2', () => {
            googleAuth2 = window.gapi.auth2.init({
                client_id: GOOGLE_CLIENT_ID,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            //render the button style
            const params = {
                scope: 'profile',
                width: 300,
                height: 50,
                longtitle: true,
                theme: 'dark',
            };
            window.gapi.signin2.render("myGoogleSigninButton", params)
            // Attach the click handler to the sign-in button
            googleAuth2.attachClickHandler('myGoogleSigninButton', {}, this.onSuccess, this.onFailure);
        });
    };

    componentWillUnmount(){
        //when the page is loaded, remove all the previous google user infomation
        this.signOut();
        this.revokeAllScopes();
    }

    onSuccess = (googleUser) => {
        let vSigned = true;
        let vUserID = googleUser.getBasicProfile().getId();
        //important use this token to access google 
        let vIdToken = googleUser.getAuthResponse().id_token;
        let vAccessToken = googleUser.getAuthResponse().access_token;
        let vDataAccessExpirationTime = googleUser.getAuthResponse().expires_in;
        let vName =googleUser.getBasicProfile().getName();
        let vEmail = googleUser.getBasicProfile().getEmail();
        let vPicture = googleUser.getBasicProfile().getImageUrl();
        
        this.setState({
            isLoggedIn: vSigned,
            userID: vUserID,
            accessToken: vAccessToken,
            dataAccessExpirationTime: vDataAccessExpirationTime,
            name: vName,
            email: vEmail,
            picture: vPicture
        });
        console.log(this.state);
        //input yourself code such as update session or database calling web service
        //.....
        //.....
        //.....
        /*
        const tokenModel = {
            socialMediaName: "Google",
            userName:vName,
            email: vEmail,
            token: vIdToken,
            pictureUrl:vPicture
        };
        let tokenSigninUrl = WebConstants.API_URL_BASE + "/users/tokenSigninGoogle";
        axios.post(tokenSigninUrl, tokenModel, headers)
            .then(response => {
                //console.log(response.data);
                userObj.userId = response.data.userId;
                userObj.email = response.data.email;
                userObj.userName = response.data.userName;
                userObj.token = response.data.token;
                userObj.loginFlag = true;
                this.props.handleLogin(userObj);
            })
            .catch(error => {
                console.log("Service request error.");
                this.signOut();
            })
        */
    }

    onFailure = (error) => {
        console.log(error);
    }

    signOut = () => {
        googleAuth2.getAuthInstance().signOut();
    }

    revokeAllScopes = () => {
        googleAuth2.getAuthInstance().disconnect();
    }

    render() {
        return (
            <div id="myGoogleSigninButton"></div>
        )
    }
}

export default GoogleLoginPlug
