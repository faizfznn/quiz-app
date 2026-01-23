// import AuthLayout from "../components/Layout/AuthLayouts";
// import { Link } from "react-router-dom";


// const LandingPage = () => {
//     return (
//         <div>
//                 <div className="text-center mb-4">
//                     <h1 className="text-3xl font-bold text-blue-600">Welcome!</h1>
//                     <p className="font-medium text-slate-600 mb-8">Join us and explore the amazing features we offer.</p>
//                 </div>
//                 <div className="flex flex-col items-center">
//                     <Link to="/login" className="mb-4 text-blue-500 hover:underline">Login</Link>
//                     <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
//                 </div>
//         </div>
//     );
// }

// export default LandingPage;

import AuthLayout from "../components/Layout/AuthLayouts";
import { Link } from "react-router-dom";
import "../styles/animations.css";
import rocket from "../assets/rocket.png";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <div className="text-center md:text-left mb-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 animate-fade-in">
                                Welcome to Our Platform!
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Join us and explore amazing features designed to make your experience better.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <Link 
                                to="/login" 
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-center font-medium shadow-md hover:shadow-lg"
                            >
                                Login
                            </Link>
                            <Link 
                                to="/register" 
                                className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition duration-300 text-center font-medium shadow-md hover:shadow-lg"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                            <img 
                                src={rocket}
                                alt="Rocket Launch Illustration" 
                                className="w-full h-auto animate-float"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;