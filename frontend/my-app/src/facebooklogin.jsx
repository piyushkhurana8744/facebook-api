import React, { useEffect } from "react";
import axios from "axios"

const FacebookLogin = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "630434138038197",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v13.0"
      });
    };

    // Load the Facebook SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const handleFacebookLogin = () => {
    window.FB.login(
      function (response) {
        if (response.authResponse) {
            const { accessToken } = response.authResponse;

            const getLeads=axios.post('/api/getLeads', { accessToken }).then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
          // You can perform additional actions after successful login
        } else {
          console.log("Facebook login failed.");
        }
      },
      { scope: "public_profile,email" } // Add any additional permissions you require
    );
  };

  return (
    <div>
      <h1>Facebook Login Example</h1>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  );
};

export default FacebookLogin;
