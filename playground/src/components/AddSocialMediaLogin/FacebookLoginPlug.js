//https://developers.facebook.com/tools/console/
//https://www.youtube.com/watch?v=gXux8b3wcYw
//https://developers.facebook.com/docs/javascript/quickstart
//https://developers.facebook.com/docs/facebook-login/web
//https://developers.facebook.com/docs/messenger-platform/identity/user-profile/
//https://developers.facebook.com/docs/graph-api/reference/user/

import React, { Component } from 'react';
import FacebookIcon from './square-facebook.svg';
import './SocialMediaLoginPlug.css';
//
const FACEBOOK_CLIENT_ID = '1066137217231212';
//
class FacebookLoginPlug extends Component {
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
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: FACEBOOK_CLIENT_ID,
                cookie: true,
                xfbml: true,
                version: 'v9.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    componentWillUnmount() {
        this.signOut();
    }

    // Called when a person is finished with the Login Button.
    checkLoginState = () => {
        //!**Important**! 
        //if The method FB.getLoginStatus can no longer be called from http pages
        //then adding .env file in the root of the project, and adding HTTPS=true       
        window.FB.getLoginStatus(function (response) {
            //console.log(response);
            // authResponse:
            // accessToken: ""
            // data_access_expiration_time: 1619914283
            // expiresIn: 6517
            // graphDomain: "facebook"
            // signedRequest: ""
            // userID: "1347925118906420"
            if (response.status === 'connected') {
                // The user is logged in and has authenticated your
                // app, and response.authResponse supplies
                // the user's ID, a valid access token, a signed
                // request, and the time the access token 
                // and signed request each expire.

            } else if (response.status === 'not_authorized') {
                // The user hasn't authorized your application.  They
                // must click the Login button, or you must call FB.login
                // in response to a user gesture, to launch a login dialog.
            } else {
                // The user isn't logged in to Facebook. You can launch a
                // login dialog with a user gesture, but the user may have
                // to log in to Facebook before authorizing your application.
            }
        }, true);
    }

    //when user click the login button
    login = () => {
        window.FB.login(function (response) {
            //Sample JSON Response
            // {
            //     status: 'connected',
            //     authResponse: {
            //         accessToken: '{access-token}',
            //         expiresIn:'{unix-timestamp}',
            //         reauthorize_required_in:'{seconds-until-token-expires}',
            //         signedRequest:'{signed-parameter}',
            //         userID:'{user-id}'
            //     }
            // }
            //console.log(response);

            if (response.status === 'connected') {
                this.setState({
                    isLoggedIn: true,
                    userID: response.authResponse.userID,
                    accessToken: response.authResponse.accessToken,
                    dataAccessExpirationTime: response.authResponse.data_access_expiration_time
                });
                //update the user profile info
                this.updateProfile();
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }.bind(this), { scope: 'public_profile,email' });
    }

    signOut = () => {
        window.FB.logout(function (response) {
            console.log("Person is now logged out");
        });
    }


    // Calling Graph API after login to update user profile.
    updateProfile = (responseArg) => {
        window.FB.api(
            "/" + this.state.userID + "/",
            'GET',
            { "fields": "id,first_name,last_name,email,picture" },
            function (responseLocal) {
                if (responseLocal && !responseLocal.error) {
                    let vName = responseLocal.first_name;
                    let vEmail = responseLocal.email;
                    let vPicture = responseLocal.picture.data.url;
                    this.setState({
                        name: vName,
                        email: vEmail,
                        picture: vPicture
                    });

                    const tokenModel = {
                        socialMediaName: "Facebook",
                        userName: vName,
                        email: vEmail,
                        token: this.state.accessToken,
                        pictureUrl: vPicture
                    };


                    //input yourself code such as update session or database calling web service 
                    //......
                    // let tokenSigninUrl = WebConstants.API_URL_BASE + "/users/tokenSigninFacebook";
                    // axios.post(tokenSigninUrl, tokenModel, headers)
                    //     .then(response => {
                    //         //console.log(response.data);
                    //         userObj.userId = response.data.userId;
                    //         userObj.email = response.data.email;
                    //         userObj.userName = response.data.userName;
                    //         userObj.token = response.data.token;
                    //         userObj.loginFlag = true;
                    //         this.props.handleLogin(userObj);
                    //     })
                    //     .catch(error => {
                    //         console.log("Service request error.");
                    //         this.signOut();
                    //     })
                    //
                }
            }.bind(this)
        );
    }

    render() {
        // let btnContainerStyle = {
        //     display:'flex',
        //     color: '#FFFFFF',            
        //     background: '#3a5ba0',
        //     width: 'auto',
        //     height: 'auto',            
        // }
        // let iconStyle={
        //     width:'30px',
        //     height:'30px',
        //     border: '1px solid transparent'

        // }
        // let btnStyle ={
        //     width:'100%',
        //     height:'100%',
        //     verticalAlign: 'middle',
        //     textAlign:'center',
        //     fontFamily: 'Roboto,arial,sans-serif',
        //     fontWeight: '500',
        //     fontSize: '12px',
        //     cursor: 'pointer',
        //     margin:'auto 6px',
        // }
        return (
            <div id="myFacebookSigninButton">
                <div className="btnContainerStyle">
                    <img className='iconStyle' src={FacebookIcon} alt="Login with facebook" ></img>
                    <div className='btnStyle' onClick={this.login}>Sign in with Facebook</div>
                </div>
            </div>
        )
    }
}

export default FacebookLoginPlug
