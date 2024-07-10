// // import React, { createContext, useState, useEffect } from 'react';
// // import { isAuthenticated } from './auth'; // Import the isAuthenticated function

// // const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// // const CHECK_AUTH = `${BACKEND_URL}/check-auth`;

// // const AuthContext = createContext();

// // const AuthProvider = ({ children }) => {
// //   const [userLoggedIn, setUserLoggedIn] = useState(null);
// //   const [userType, setUserType] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const checkAuthenticationStatus = async () => {
// //       try {
// //         const isAuthenticatedUser = await isAuthenticated();
// //         setUserLoggedIn(isAuthenticatedUser);

// //         if (isAuthenticatedUser) {
// //           const response = await fetch(CHECK_AUTH, {
// //             method: 'GET',
// //             credentials: 'include',
// //           });

// //           if (response.ok) {
// //             const { userType } = await response.json();
// //             setUserType(userType);
// //           } else {
// //             throw new Error('Failed to fetch user data');
// //           }
// //         }
// //       } catch (error) {
// //         console.error('Error checking authentication status:', error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     checkAuthenticationStatus();
// //   }, []);

// //   if (loading) {
// //     return null; // Optionally, render a loading spinner or placeholder
// //   }

// //   return (
// //     <AuthContext.Provider value={{ userLoggedIn, userType, setUserLoggedIn, setUserType }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export { AuthContext, AuthProvider };









// import React, { createContext, useState, useEffect } from 'react';
// import { isAuthenticated } from './auth'; // Import the isAuthenticated function

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// const CHECK_AUTH = `${BACKEND_URL}/check-auth`;

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [userLoggedIn, setUserLoggedIn] = useState(null);
//   const [userType, setUserType] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkAuthenticationStatus = async () => {
//       try {
//         const isAuthenticatedUser = await isAuthenticated();
//         setUserLoggedIn(isAuthenticatedUser);

//         if (isAuthenticatedUser) {
//           const response = await fetch(CHECK_AUTH, {
//             method: 'GET',
//             credentials: 'include',
//           });

//           if (response.ok) {
//             const { userType } = await response.json();
//             setUserType(userType);
//           } else {
//             throw new Error('Failed to fetch user data');
//           }
//         }
//       } catch (error) {
//         console.error('Error checking authentication status:', error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuthenticationStatus();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Optionally, render a loading spinner or placeholder
//   }

//   return (
//     <AuthContext.Provider value={{ userLoggedIn, userType, setUserLoggedIn, setUserType }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };






























// // import React, { createContext, useState, useEffect } from 'react';
// // import { isAuthenticated } from './auth'; // Import the isAuthenticated function

// // const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// // const CHECK_AUTH = `${BACKEND_URL}/api/check-auth`;

// // const AuthContext = createContext();

// // const AuthProvider = ({ children }) => {
// //   const [userLoggedIn, setUserLoggedIn] = useState(null);
// //   const [userType, setUserType] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const checkAuthenticationStatus = async () => {
// //       try {
// //         const isAuthenticatedUser = await isAuthenticated();
// //         setUserLoggedIn(isAuthenticatedUser);

// //         if (isAuthenticatedUser) {
// //           const response = await fetch(`${CHECK_AUTH}`, {
// //             method: 'GET',
// //             credentials: 'include',
// //           });
// //           const responseData = await response.json();
// //           setUserType(responseData.userType); // Set both user type and user logged in
// //         }

// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error checking authentication status:', error.message);
// //         setLoading(false);
// //       }
// //     };

// //     checkAuthenticationStatus();
// //   }, []);

// //   const handleSetUserLoggedIn = (loggedIn) => {
// //     setUserLoggedIn(loggedIn);
// //   };

// //   if (loading) {
// //     return null;
// //   }

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         userLoggedIn,
// //         userType, // Make sure to include userType in the context
// //         setUserLoggedIn: handleSetUserLoggedIn,setUserType
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };



// // export { AuthContext, AuthProvider };




































// // // authContext.js - Frontend

// // import React, { createContext, useState, useEffect } from 'react';
// // import { isAuthenticated } from './auth'; // Import the isAuthenticated function

// // const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// // const CHECK_AUTH = `${BACKEND_URL}/check-auth`;

// // const AuthContext = createContext();

// // const AuthProvider = ({ children }) => {
// //   const [userLoggedIn, setUserLoggedIn] = useState(null);
// //   const [userType, setUserType] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const checkAuthenticationStatus = async () => {
// //       try {
// //         const isAuthenticatedUser = await isAuthenticated();
// //         setUserLoggedIn(isAuthenticatedUser);

// //         if (isAuthenticatedUser) {
// //           const response = await fetch(`${CHECK_AUTH}`, {
// //             method: 'GET',
// //             credentials: 'include',
// //           });

// //           if (response.ok) {
// //             const responseData = await response.json();
// //             setUserType(responseData.userType);
// //           } else {
// //             throw new Error('Failed to fetch user data');
// //           }
// //         }

// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error checking authentication status:', error.message);
// //         setLoading(false);
// //       }
// //     };

// //     checkAuthenticationStatus();
// //   }, []);

// //   const handleSetUserLoggedIn = (loggedIn) => {
// //     setUserLoggedIn(loggedIn);
// //   };

// //   if (loading) {
// //     return null; // You might want to render a loading spinner or component here
// //   }

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         userLoggedIn,
// //         userType,
// //         setUserLoggedIn: handleSetUserLoggedIn,
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export { AuthContext, AuthProvider };








// // import React, { createContext, useState, useEffect } from 'react';
// // import { isAuthenticated } from './auth'; // Import the isAuthenticated function

// // const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// // const CHECK_AUTH = `${BACKEND_URL}/check-auth`;

// // const AuthContext = createContext();

// // const AuthProvider = ({ children }) => {
// //   const [userLoggedIn, setUserLoggedIn] = useState(null);
// //   const [userType, setUserType] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const checkAuthenticationStatus = async () => {
// //       try {
// //         const isAuthenticatedUser = await isAuthenticated();
// //         setUserLoggedIn(isAuthenticatedUser);

// //         if (isAuthenticatedUser) {
// //           const response = await fetch(`${CHECK_AUTH}`, {
// //             method: 'GET',
// //             credentials: 'include', // Make sure credentials are sent with the request
// //           });

// //           if (response.ok) {
// //             const responseData = await response.json();
// //             setUserType(responseData.userType); // Assuming your backend returns userType
// //           } else {
// //             throw new Error('Failed to fetch user data');
// //           }
// //         }

// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error checking authentication status:', error.message);
// //         setLoading(false);
// //       }
// //     };

// //     checkAuthenticationStatus();
// //   }, []);

// //   const handleSetUserLoggedIn = (loggedIn) => {
// //     setUserLoggedIn(loggedIn);
// //   };

// //   if (loading) {
// //     return null; // Render loading spinner or component while checking authentication status
// //   }

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         userLoggedIn,
// //         userType,
// //         setUserLoggedIn: handleSetUserLoggedIn,
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export { AuthContext, AuthProvider };
