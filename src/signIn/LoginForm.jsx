import React, {useState} from "react";
import {GoogleLogin, GoogleLogout } from "react-google-login";
import './login.css';
import Dashboard from '../components/dasboard/Dashboard'
import Board from '../signIn/board/Board'
import './loginForm.css'


const LoginForm = ()=>{
    const clientId ="101488780864-oajodislfreqohfmb9ts7rrgh4an7aac.apps.googleusercontent.com";
    const[showLoginButton, setShowLoginButton]=useState(true);
    const[showLogoutButton, setShowLogoutButton]=useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    
    
    const onLoginSucess= (res)=>{
        console.log('Login Success:', res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    }

    const onFailureSucess=(res)=>{
        console.log('Login Failed:',res);
    }

    const onSignoutSucess=()=>{
        alert("you have been signed out successfully");
        setShowLoginButton(true);
        setShowLogoutButton(false);
    }


    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e)=> {
        setPassword(e.target.value);
      };
    
      const handleLogin = (e)=>{
        e.preventDefault();
        setIsLoggedIn(true);
      };

      if(isLoggedIn){
        return(
          <div>
            <Dashboard />
          </div>
        )
      }else{
    return(
        <div className="LoginContainer">
            <div>
                <Board />
            </div>
            
            
        <main className="container2">
            <section className="wrapper2">
                <div className="top">
                   <h1 className="sign">Sign In</h1>
                   <p className="text">Sign in to your account</p>
                </div>  
                <div className="g">
                <div >
                  {showLoginButton ?
                        <GoogleLogin 
                            clientId={clientId}
                            buttonText="Login With Google"
                            onSuccess={onLoginSucess}
                            onFailure={onFailureSucess}
                            cookiePolicy={'single_host_origin'}
                            className="g-signing"
                        /> : null
                   }
                  {showLogoutButton ?
                        <GoogleLogout 
                            clientId={clientId}
                            buttonText="Logout"
                            onLogoutSuccess={onSignoutSucess}
                        />: null
                   }
               </div>
               <div >
                  {showLoginButton ?
                        <GoogleLogin 
                            clientId={clientId}
                            buttonText="Login With Apple"
                            onSuccess={onLoginSucess}
                            onFailure={onFailureSucess}
                            cookiePolicy={'single_host_origin'}
                            className="g-signing"
                        /> : null
                   }
                  {showLogoutButton ?
                        <GoogleLogout 
                            clientId={clientId}
                            buttonText="Logout"
                            onLogoutSuccess={onSignoutSucess}
                        />: null
                   }
               </div>
                </div>
                <div className="form1">
                <form onSubmit={handleLogin}>
                    <div className="form-wrapper">
                    <label className="label1" >Email address</label>
                    <br/>
                    <input type="email" 
                    className="input"
                     placeholder="Enter Your Email" 
                     onChange={handleEmailChange} required
                     value={email} 
                     />
                    <br/>
                    <label className="label1">Password</label>
                    <br/>

                    <input type="password" 
                    className="input"
                     placeholder="Enter Password"
                     value={password}
                     onChange={handlePasswordChange} required
                      />
                    <p className="blue">Forget password?</p>
                    <button type="submit" className="button"> Sign In</button>
                
               
                </div> 
                </form>
                </div>
                <div className="register">
                    <p className="blue1">Don't have an account?</p>
                    <p className="blue2">Register here</p>
                </div>
                
            </section>
           
        </main>
</div>
    )
}
}
export default LoginForm;