import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "886840610340-j7rirct3cis0gn52q98ed9uu7gp840on.apps.googleusercontent.com";

function GLogin() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const history = useHistory();

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        
        setShowloginButton(false);
        setShowlogoutButton(true);
        history.push('/adminHome');
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
        history.push('/login');
    };

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default GLogin;