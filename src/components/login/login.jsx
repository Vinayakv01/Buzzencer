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
























import React, { useState } from "react";
import loginImg from "../../assets/login.svg";
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://buzzapi.barecms.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming your API returns a token upon successful login
        localStorage.setItem('token', data.token);

        // Redirect based on user role (example: admin goes to /admin, influencer to /dashboard)
        // Example redirection based on role (you may need to adjust based on your actual role handling)
        if (data.role === 'admin') {
          return <Navigate to="/admin" />;
        } else if (data.role === 'influencer') {
          return <Navigate to="/dashboard" />;
        } else {
          setError("Unknown role");
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError("Login failed. Please try again.");
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
        <form className="w-3/4 p-8" onSubmit={handleLogin}>
          <h2 className="text-3xl text-center font-semibold font-Poppins mb-1">Welcome</h2>
          <p className="text-center font-Poppins mb-6">Sign-In to your Buzzencer Account.</p>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="mb-4 font-Poppins">
            <label htmlFor="username" className="block text-gray-600 mb-2 text-sm font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
              placeholder="Enter User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
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
              className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="flex flex-row justify-end font-Poppins text-[#403bbf]">
            Forget Password?
          </p>
          <div className="flex justify-center mt-4">
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
































// import React, { useState } from "react";
// import loginImg from "../../assets/login.svg";
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://buzzapi.barecms.com/api/user/login", {
//         email_address: username,
//         userPassword: password,
//       });

//       const { token } = response.data;

//       // Save token to localStorage
//       localStorage.setItem("token", token);

//       // Redirect to dashboard or another protected route
//       navigate("/dashboard");
//     } catch (error) {
//       setError("Invalid username or password");
//     }
//   };

//   return (
//     <div className="md:flex h-screen">
//       {/* Left side (Image) */}
//       <div className="w-1/2 bg-blue-200 flex items-center justify-center">
//         <img src={loginImg} alt="Login" className="w-9/12" />
//       </div>

//       {/* Right side (Form) */}
//       <div className="md:w-1/2 w-full flex items-center justify-center">
//         <form className="w-3/4 p-8" onSubmit={handleLogin}>
//           <h2 className="text-3xl text-center font-semibold font-Poppins mb-1">Welcome</h2>
//           <p className="text-center font-Poppins mb-6">Sign-In to your Buzzencer Account.</p>
//           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//           <div className="mb-4 font-Poppins">
//             <label htmlFor="username" className="block text-gray-600 mb-2 text-sm font-semibold">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
//               placeholder="Enter User Name"
//             />
//           </div>
//           <div className="mb-4 font-Poppins">
//             <label htmlFor="password" className="block text-gray-600 mb-2 text-sm font-semibold">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
//               placeholder="Enter Password"
//             />
//           </div>

//           <p className="flex flex-row justify-end font-Poppins text-[#403bbf]">
//             Forget Password?
//           </p>
//           <span className="flex flex-row justify-center">
//             <button
//               type="submit"
//               className="text-white text-sm font-[650] font-Poppins px-9 pt-2.5 pb-3 bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300"
//             >
//               Login
//             </button>
//           </span>
//           <p className="mt-4 text-sm text-center text-gray-600 font-Poppins">
//             Don't have an account? <Link to="/signup" className="text-[#403bbf]">Sign up</Link>.
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


























// // import React, { useState, useContext } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import loginImg from '../../assets/login.svg';
// // import { AuthContext } from '../../utils/authContext';
// // import { loginUser } from '../../utils/auth';

// // const Login = () => {
// //   const { setUserLoggedIn, setUserType } = useContext(AuthContext);
// //   const navigate = useNavigate();
// //   const [error, setError] = useState(null);
// //   const [usernameOrEmail, setUsernameOrEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSignIn = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const user = await loginUser({
// //         usernameOrEmail: usernameOrEmail,
// //         password: password,
// //       });

// //       setUserLoggedIn(true);
// //       setUserType(user.userType);

// //       localStorage.setItem('userID', user.userID);
// //       localStorage.setItem('userType', user.userType);

// //       navigate('/dashboard');
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   return (
// //     <div className="md:flex h-screen">
// //       <div className="w-1/2 bg-blue-200 flex items-center justify-center">
// //         <img src={loginImg} alt="Login" className="w-9/12" />
// //       </div>

// //       <div className="md:w-1/2 w-full flex items-center justify-center">
// //         <form className="w-3/4 p-8" onSubmit={handleSignIn}>
// //           <h2 className="text-3xl text-center font-semibold font-Poppins mb-1">Welcome</h2>
// //           <p className="text-center font-Poppins mb-6">Sign-In to your Buzzencer Account.</p>
// //           <div className="mb-4 font-Poppins">
// //             <label htmlFor="usernameOrEmail" className="block text-gray-600 mb-2 text-sm font-semibold">
// //               Username or Email
// //             </label>
// //             <input
// //               type="text"
// //               id="usernameOrEmail"
// //               name="usernameOrEmail"
// //               value={usernameOrEmail}
// //               onChange={(e) => setUsernameOrEmail(e.target.value)}
// //               className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
// //               placeholder="Enter User Name or Email"
// //             />
// //           </div>
// //           <div className="mb-4 font-Poppins">
// //             <label htmlFor="password" className="block text-gray-600 mb-2 text-sm font-semibold">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               id="password"
// //               name="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
// //               placeholder="Enter Password"
// //             />
// //           </div>
// //           {error && <p className="text-red-500 mb-4">{error}</p>}
// //           <div className="flex justify-between items-center">
// //             <p className="text-[#403bbf] text-sm font-Poppins cursor-pointer">Forget Password?</p>
// //             <button
// //               type="submit"
// //               className="text-white text-sm font-[650] font-Poppins px-9 pt-2.5 pb-3 bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300"
// //             >
// //               Login
// //             </button>
// //           </div>
// //           <p className="mt-4 text-sm text-center text-gray-600 font-Poppins">
// //             Don't have an account? <Link to="/signup" className="text-[#403bbf]">Sign up</Link>.
// //           </p>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;









// // import { useCookies } from 'react-cookie';
// // import React, { useState, useContext } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import loginImg from '../../assets/login.svg';
// // import { AuthContext } from '../../utils/authContext';
// // import { loginUser } from '../../utils/auth';

// // const Login = () => {
// //   const { setUserLoggedIn, setUserType } = useContext(AuthContext);
// //   const navigate = useNavigate();
// //   const [error, setError] = useState(null);
// //   const [usernameOrEmail, setUsernameOrEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [cookies, setCookie] = useCookies(['jwtToken']);

// //   const handleSignIn = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const user = await loginUser({
// //         usernameOrEmail: usernameOrEmail,
// //         password: password,
// //       });

// //       // Set JWT token in cookie
// //       setCookie('jwtToken', user.token, {
// //         maxAge: 3600, // 1 hour in seconds
// //         sameSite: 'none', // Adjust as per your CORS settings
// //         secure: true, // Requires HTTPS in production
// //         path: '/', // Specify the path if needed
// //       });

// //       // Set user state in context
// //       setUserLoggedIn(true);
// //       setUserType(user.userType);

// //       // Optionally, store userID and userType in localStorage
// //       localStorage.setItem('userID', user.userID);
// //       localStorage.setItem('userType', user.userType);

// //       navigate('/dashboard'); // Redirect to dashboard upon successful login
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   return (
// //     <div className="md:flex h-screen">
// //       {/* Left side (Image) */}
// //       <div className="w-1/2 bg-blue-200 flex items-center justify-center">
// //         <img src={loginImg} alt="Login" className="w-9/12" />
// //       </div>

// //       {/* Right side (Form) */}
// //       <div className="md:w-1/2 w-full flex items-center justify-center">
// //         <form className="w-3/4 p-8" onSubmit={handleSignIn}>
// //           <h2 className="text-3xl text-center font-semibold font-Poppins mb-1">Welcome</h2>
// //           <p className="text-center font-Poppins mb-6">Sign-In to your Buzzencer Account.</p>
// //           <div className="mb-4 font-Poppins">
// //             <label htmlFor="usernameOrEmail" className="block text-gray-600 mb-2 text-sm font-semibold">
// //               Username or Email
// //             </label>
// //             <input
// //               type="text"
// //               id="usernameOrEmail"
// //               name="usernameOrEmail"
// //               value={usernameOrEmail}
// //               onChange={(e) => setUsernameOrEmail(e.target.value)}
// //               className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
// //               placeholder="Enter User Name or Email"
// //             />
// //           </div>
// //           <div className="mb-4 font-Poppins">
// //             <label htmlFor="password" className="block text-gray-600 mb-2 text-sm font-semibold">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               id="password"
// //               name="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
// //               placeholder="Enter Password"
// //             />
// //           </div>
// //           {error && <p className="text-red-500 mb-4">{error}</p>}
// //           <div className="flex justify-between items-center">
// //             <p className="text-[#403bbf] text-sm font-Poppins cursor-pointer">Forget Password?</p>
// //             <button
// //               type="submit"
// //               className="text-white text-sm font-[650] font-Poppins px-9 pt-2.5 pb-3 bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300"
// //             >
// //               Login
// //             </button>
// //           </div>
// //           <p className="mt-4 text-sm text-center text-gray-600 font-Poppins">
// //             Don't have an account? <Link to="/signup" className="text-[#403bbf]">Sign up</Link>.
// //           </p>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;









// import { useCookies } from 'react-cookie';
// import React, { useState, useContext, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import loginImg from '../../assets/login.svg';
// import { AuthContext } from '../../utils/authContext';
// import { loginUser } from '../../utils/auth';

// const Login = () => {
//   const { setUserLoggedIn, setUserType } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [error, setError] = useState(null);
//   const [usernameOrEmail, setUsernameOrEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [cookies, setCookie] = useCookies(['jwtToken']);

//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       try {
//         const userID = localStorage.getItem('userID');
//         if (userID) {
//           // You can fetch user data or simply redirect
//           navigate('/dashboard');
//         }
//       } catch (error) {
//         console.error('Error checking login status:', error);
//       }
//     };

//     checkLoggedIn();
//   }, [navigate]);

//   const handleSignIn = async (event) => {
//     event.preventDefault();

//     try {
//       const user = await loginUser({
//         usernameOrEmail: usernameOrEmail,
//         password: password,
//       });

//       // Set JWT token in cookie
//       setCookie('jwtToken', user.token, {
//         maxAge: 3600, // 1 hour in seconds
//         sameSite: 'none', // Adjust as per your CORS settings
//         secure: true, // Requires HTTPS in production
//         path: '/', // Specify the path if needed
//       });

//       // Set user state in context
//       setUserLoggedIn(true);
//       setUserType(user.userType);

//       // Store user details in localStorage
//       localStorage.setItem('userID', user.userID);
//       localStorage.setItem('userType', user.userType);

//       navigate('/dashboard'); // Redirect to dashboard upon successful login
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="md:flex h-screen">
//       {/* Left side (Image) */}
//       <div className="w-1/2 bg-blue-200 flex items-center justify-center">
//         <img src={loginImg} alt="Login" className="w-9/12" />
//       </div>

//       {/* Right side (Form) */}
//       <div className="md:w-1/2 w-full flex items-center justify-center">
//         <form className="w-3/4 p-8" onSubmit={handleSignIn}>
//           <h2 className="text-3xl text-center font-semibold font-Poppins mb-1">Welcome</h2>
//           <p className="text-center font-Poppins mb-6">Sign-In to your Buzzencer Account.</p>
//           <div className="mb-4 font-Poppins">
//             <label htmlFor="usernameOrEmail" className="block text-gray-600 mb-2 text-sm font-semibold">
//               Username or Email
//             </label>
//             <input
//               type="text"
//               id="usernameOrEmail"
//               name="usernameOrEmail"
//               value={usernameOrEmail}
//               onChange={(e) => setUsernameOrEmail(e.target.value)}
//               className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
//               placeholder="Enter User Name or Email"
//             />
//           </div>
//           <div className="mb-4 font-Poppins">
//             <label htmlFor="password" className="block text-gray-600 mb-2 text-sm font-semibold">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
//               placeholder="Enter Password"
//             />
//           </div>
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           <div className="flex justify-between items-center">
//             <p className="text-[#403bbf] text-sm font-Poppins cursor-pointer">Forget Password?</p>
//             <button
//               type="submit"
//               className="text-white text-sm font-[650] font-Poppins px-9 pt-2.5 pb-3 bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300"
//             >
//               Login
//             </button>
//           </div>
//           <p className="mt-4 text-sm text-center text-gray-600 font-Poppins">
//             Don't have an account? <Link to="/signup" className="text-[#403bbf]">Sign up</Link>.
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
