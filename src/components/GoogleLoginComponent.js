import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import Constants from '../Constant/Constants';

function GoogleLoginComponent(props) {
    let isLoggedIn = false;
    let profile = {};

    const responseSuccessGoogle = response => {
        isLoggedIn = true;
        profile = response.profileObj
        return (props.loggingIn(isLoggedIn, profile));
    }
    const responseFailureGoogle = response => {
        isLoggedIn = false;
        profile = {"error":"Error logging in"};
        return props.loggingIn(isLoggedIn, profile);
    }
    return (
        <GoogleLogin 
        clientId = {Constants.clientId}
        buttonText="Continue with Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseFailureGoogle}
        cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleLoginComponent
