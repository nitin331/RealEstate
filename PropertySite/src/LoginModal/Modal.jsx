
import React, { useState, useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, view, setView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [role, setRole] = useState('owner/buyer');
  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const validateLogin = () => {
    const errors = {};
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateRegister = () => {
    const errors = {};
    if (!email) errors.email = 'Email is required';
    if (!mobileNumber) errors.mobileNumber = 'Mobile number is required';
    if (!password) errors.password = 'Password is required';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateForgotPassword = () => {
    const errors = {};
    if (!email) errors.email = 'Email is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleForgotPasswordSubmit = () => {
    if (validateForgotPassword()) {
      setView('checkEmail');
    }
  };

  const handleLoginSubmit = () => {
    if (validateLogin()) {
      // Proceed with login
    }
  };

  const handleRegisterSubmit = () => {
    if (validateRegister()) {
      // Proceed with registration
    }
  };

  const handleForgotPassword = () => {
    setView('forgotPassword');
  };

  const handleCheckEmail = () => {
    setView('checkEmail');
  };

  const handleRegister = () => {
    setView('register');
  };

  const handleLogin = () => {
    setView('login');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div 
        ref={modalRef} 
        className="bg-white p-3 sm:p-4 rounded-lg shadow-lg w-11/12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative"
      >
        <button onClick={onClose} className="absolute top-1 right-1 text-gray-500 text-sm sm:text-base">✕</button>
        
        {view === 'login' && (
          <>
            <div className="flex space-x-1 sm:space-x-2 mb-2 sm:mb-4">
              <button
                className={`px-3 sm:px-5 py-1 sm:py-2 rounded-lg sm:rounded-xl text-sm sm:text-base ${view === 'login' ? 'bg-white text-red-600 border border-red-600' : 'bg-red-600 text-white'}`}
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className={`px-3 sm:px-5 py-1 sm:py-2 rounded-lg sm:rounded-xl text-sm sm:text-base ${view === 'register' ? 'bg-white text-red-600 border border-red-600' : 'bg-red-600 text-white'}`}
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
            <div className="mt-2 sm:mt-4">
              <label className="text-sm sm:text-base">
                Enter your email address
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-1 sm:p-2 border border-gray-300 rounded mt-1 sm:mt-2 text-sm sm:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-600 text-xs sm:text-sm">{errors.email}</p>}
              <label className="text-sm sm:text-base">Enter your password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full p-1 sm:p-2 border border-gray-300 rounded mt-1 sm:mt-2 text-sm sm:text-base"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-600 text-xs sm:text-sm">{errors.password}</p>}
              <button className="w-full bg-red-600 text-white py-1 sm:py-2 rounded-lg sm:rounded-xl mt-2 sm:mt-4 text-sm sm:text-base" onClick={handleLoginSubmit}>Login</button>
              <button className="mt-1 sm:mt-2 text-red-600 underline text-xs sm:text-sm" onClick={handleForgotPassword}>Forgot Password?</button>
            </div>
            <button className="mt-2 sm:mt-4 w-full py-1 sm:py-2 border border-gray-300 rounded-lg sm:rounded-xl flex items-center justify-center text-sm sm:text-base">
              <img src="/images/google.png" alt="Google" className="mr-2 h-5 sm:h-6 w-5 sm:w-6" /> Sign up with Google
            </button>
            <button className="mt-1 sm:mt-2 w-full py-1 sm:py-2 border border-gray-300 rounded-lg sm:rounded-xl flex items-center justify-center text-sm sm:text-base">
              <img src="/images/facebook.png" alt="Facebook" className="mr-2 h-5 sm:h-6 w-5 sm:w-6" /> Sign up with Facebook
            </button>
            <p className="mt-2 sm:mt-4 text-center text-xs sm:text-sm">
              Don’t have an account? <span className="text-red-600 cursor-pointer" onClick={handleRegister}>Register now</span>
            </p>
          </>
        )}
        
        {view === 'register' && (
          <>
            <div className="flex space-x-1 sm:space-x-2 mb-2 sm:mb-4">
              <button
                className={`px-3 sm:px-5 py-1 sm:py-2 rounded-lg sm:rounded-xl text-sm sm:text-base ${view === 'login' ? 'bg-white text-red-600 border border-red-600' : 'bg-red-600 text-white'}`}
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className={`px-3 sm:px-5 py-1 sm:py-2 rounded-lg sm:rounded-xl text-sm sm:text-base ${view === 'register' ? 'bg-white text-red-600 border border-red-600' : 'bg-red-600 text-white'}`}
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
            <select
              className="w-full p-1 sm:p-2 border border-gray-300 rounded mt-1 sm:mt-2 text-sm sm:text-base"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="owner/buyer">Owner/Buyer</option>
              <option value="broker">Broker</option>
              <option value="admin">Admin</option>
            </select>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-1 sm:p-2 border border-gray-300 rounded mt-1 sm:mt-2 text-sm sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-600 text-xs sm:text-sm">{errors.email}</p>}
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full p-1 sm:p-2 border border-gray-300 rounded mt-1 sm:mt-2 text-sm sm:text-base"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            {errors.mobileNumber && <p className="text-red-600 text-xs sm:text-sm">{errors.mobileNumber}</p>}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-1 sm:p-2 border border-gray-300 rounded mt-1 sm:mt-2 text-sm sm:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-600 text-xs sm:text-sm">{errors.password}</p>}
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-1 sm:p-2 border border-gray-300 rounded mt-1 sm:mt-2 text-sm sm:text-base"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <p className="text-red-600 text-xs sm:text-sm">{errors.confirmPassword}</p>}
            <div className="flex items-center mt-1 sm:mt-2 text-xs sm:text-sm">
              <input type="checkbox" className="mr-2" />
              <span>By creating an account, you agree to our <a href="#" className="text-red-600">Terms & conditions</a> and <a href="#" className="text-red-600">Privacy Policy</a></span>
            </div>
            <button className="w-full bg-red-600 text-white py-1 sm:py-2 rounded-lg sm:rounded-xl mt-2 sm:mt-4 text-sm sm:text-base" onClick={handleRegisterSubmit}>Register</button>
            <p className="mt-2 sm:mt-4 text-center text-xs sm:text-sm">
              Already have an account? <span className="text-red-600 cursor-pointer" onClick={() => setView('login')}>Login</span>
            </p>
          </>
        )}

        {view === 'forgotPassword' && (
          <>
            <h2 className="text-lg sm:text-xl font-bold">Forget your password</h2>
            <label className='text-xs sm:text-sm'>Enter your email address</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-1 sm:p-2 border border-gray-300 rounded mt-1 sm:mt-2 text-sm sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-600 text-xs sm:text-sm">{errors.email}</p>}
            <button className="w-full bg-red-600 text-white py-1 sm:py-2 rounded mt-2 sm:mt-4 text-sm sm:text-base" onClick={handleForgotPasswordSubmit}>Get New Password</button>
          </>
        )}

        {view === 'checkEmail' && (
          <div className="text-center">
            <img src="/images/gmail.png" alt="Check Email" className="mx-auto my-2 sm:my-4 h-8 sm:h-10" />
            <h2 className="text-lg sm:text-xl font-bold">Check your Email</h2>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm">We've sent instructions on how to reset your password to {email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
