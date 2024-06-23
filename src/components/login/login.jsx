// import React from "react";
// import loginImg from "../../assets/login.svg";
// import { Link } from 'react-router-dom';

// const Login = () => {
//   return (
//     <div className="md:flex h-screen">
//       {/* Left side (Image) */}

//       <div className="w-1/2 bg-blue-200 flex items-center justify-center">
//         <img src={loginImg} alt="Login" className="w-9/12" />
//       </div>

//       {/* Right side (Form) */}
//       <div className="md:w-1/2 w-full flex items-center justify-center">
//         <form className="w-3/4  p-8 ">
//           <h2 className="text-3xl text-center font-semibold font-Poppins mb-1">Welcome</h2>
//           <p className="text-center font-Poppins mb-6">Sign-In to your Buzzencer Account.</p>
//           <div className="mb-4 font-Poppins">
//             <label htmlFor="username" className="block text-gray-600 mb-2 text-sm font-semibold ">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
//               placeholder="Enter User Name"
//             />
//           </div>
//           <div className="mb-4 font-Poppins">
//             <label htmlFor="password" className="block text-gray-600 mb-2 text-sm font-semibold ">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
//               placeholder="Enter Password"
//             />
//           </div>
        
//          <p className="flex flex-row justify-end font-Poppins text-[#403bbf]">
//           Forget Password?
//          </p>
//         <span className="flex flex-row justify-center ">
//          <button
//             type="submit"
//             className="text-white text-sm font-[650] font-Poppins px-9 pt-2.5 pb-3  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300"
//           >
//             Login
//           </button>
//           </span>
//          <p className="mt-4 text-sm text-center text-gray-600  font-Poppins">
//           Don't have an account? <Link to="/signup" className="text-[#403bbf] ">Sign up</Link>.
//          </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login.svg';
import { AuthContext } from '../../utils/authContext'; // Adjust path as necessary
import { loginUser } from '../../utils/auth'; // Adjust path as necessary

const Login = () => {
  const { setUserLoggedIn, setUserType } = useContext(AuthContext);
  const navigate = useNavigate(); // Replacing useHistory with useNavigate
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const user = await loginUser({
        username: username,
        password: password,
      });

      setUserLoggedIn(true);
      setUserType(user.userType);

      localStorage.setItem('userID', user.userID);
      localStorage.setItem('userType', user.userType);

      navigate('/dashboard'); // Redirect to dashboard upon successful login using navigate
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="md:flex h-screen">
      {/* Left side (Image) */}
      <div className="w-1/2 bg-blue-200 flex items-center justify-center">
        <img src={loginImg} alt="Login" className="w-9/12" />
      </div>

      {/* Right side (Form) */}
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <form className="w-3/4 p-8" onSubmit={handleSignIn}>
          <h2 className="text-3xl text-center font-semibold font-Poppins mb-1">Welcome</h2>
          <p className="text-center font-Poppins mb-6">Sign-In to your Buzzencer Account.</p>
          <div className="mb-4 font-Poppins">
            <label htmlFor="username" className="block text-gray-600 mb-2 text-sm font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
              placeholder="Enter User Name"
            />
          </div>
          <div className="mb-4 font-Poppins">
            <label htmlFor="password" className="block text-gray-600 mb-2 text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
              placeholder="Enter Password"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex justify-between items-center">
            <p className="text-[#403bbf] text-sm font-Poppins cursor-pointer">Forget Password?</p>
            <button
              type="submit"
              className="text-white text-sm font-[650] font-Poppins px-9 pt-2.5 pb-3 bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300"
            >
              Login
            </button>
          </div>
          <p className="mt-4 text-sm text-center text-gray-600 font-Poppins">
            Don't have an account? <Link to="/signup" className="text-[#403bbf]">Sign up</Link>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
