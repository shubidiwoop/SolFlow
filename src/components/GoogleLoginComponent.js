import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'

function GoogleLoginComponent(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profile, setProfileInfo] = useState({});

    const responseSuccessGoogle = response => {
        setIsLoggedIn(true);
        setProfileInfo(response.profileObj);
        return (props.loggingIn(isLoggedIn, profile));
    }
    const responseFailureGoogle = response => {
        setIsLoggedIn('false');
        setProfileInfo({"error":"Error logging in"});
        props.loggingIn(isLoggedIn, profile);
        console.log(response)
    }
    return (
        <GoogleLogin 
        clientId="797666968198-2049tv64tdkfebjuuilhbmku2fd0qk23.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccessGoogle}
        onFailure={responseFailureGoogle}
        cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleLoginComponent
