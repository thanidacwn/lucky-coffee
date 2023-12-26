import './Login.css';
import logo from '../assets/images/logo.png';
import Button from '../components/buttons/Button';

export default function Login() {
    const buttonText = 'Sign In';

    return (
        <>
            <div className="logo-container">
                <img src={logo} alt="lucky home cafe logo" className="logo"/>
            </div>

            <div className="login-container">
                <label className="login-label name"> Username: </label>
                <input
                    className='login-input username-input'
                    type='text'
                    placeholder="Type your Username"
                />
                <label className="login-label password"> Password: </label>
                <input
                    className='login-input password-input'
                    type='password'
                    placeholder="Type your Password"
                />
                <div className="button-container">
                    <Button
                        text={buttonText}
                        className="login-button"
                    />
                </div>
                
            </div>
        </>
  
    )    
}