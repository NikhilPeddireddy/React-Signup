import { useState } from "react";
import "./SignUp.css"
const SignUpForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  

    const [emailValid, setEmailValid] = useState(true); 
    const [passwordValid, setPasswordValid] = useState(true);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const validateEmail = (input) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input);
    };
  

    const validatePassword = (input) => {
      return input.length >= 8;
    };
 
    const handleEmailChange = (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
      setEmailValid(validateEmail(newEmail));
    };
  
    
    const handlePasswordChange = (e) => {
      const newPassword = e.target.value;
      setPassword(newPassword);
      setPasswordValid(validatePassword(newPassword));7
    };
  
   
    const handleConfirmPasswordChange = (e) => {
      const newConfirmPassword = e.target.value;
      setConfirmPassword(newConfirmPassword);
      setConfirmPasswordValid(newConfirmPassword === password);
    };
  
  
    const handleSubmit = () => {
      if (emailValid && passwordValid && confirmPasswordValid) {
        alert('Form submitted successfully!');
      } else {
        if (!emailValid) {
          alert('Error: Please enter a valid email address.');
        } else if (!passwordValid) {
          alert('Error: Password must be at least 8 characters long.');
        } else if (!confirmPasswordValid) {
          alert('Error: Passwords do not match.');
        } else {
          alert('Unknown error. Please check your inputs.');
        }
      }
    };
    return (
      <div className="signup-form">
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          className={emailValid ? 'valid' : 'invalid'}
        />
        {!emailValid && <p className="error">Error: Please enter a valid email address.</p>}
  
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={passwordValid ? 'valid' : 'invalid'}
        />
        {!passwordValid && (
          <p className="error">Error: Password must be at least 8 characters long.</p>
        )}
  
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className={confirmPasswordValid ? 'valid' : 'invalid'}
        />
        {!confirmPasswordValid && (
          <p className="error">Error: Passwords do not match.</p>
        )}
  
        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    );
  };
  
  
  
  export default SignUpForm;