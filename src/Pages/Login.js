import './Movie.css'
import './Login.css'

export default function Login() {
    return (
       
        <div  className="login">
            <div className="loginForm">
                    <input type="text" placeholder="Username" className="movieInput"/>
                    <input type="password"  placeholder="Password" className="movieInput"/>
                    <input type="submit" value="Login" className="loginBtn"/>
            </div>      
        </div>  
    )
}

