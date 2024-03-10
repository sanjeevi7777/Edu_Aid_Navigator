import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import image from '../assets/images/back.gif';
import { Spinner, useToast } from '@chakra-ui/react';
import axios from "axios";

const SignUpForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [token,setToken]=useState('');
    const [errorMessages, setErrorMessages] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const toast = useToast();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Get form data
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const name = formData.get('name');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
    
        // Validate fields
        const newErrorMessages = {};
    
        if (!name) {
            newErrorMessages.name = '*Please enter your username';
        }
    
        if (!email) {
            newErrorMessages.email = '*Please enter your email';
        }
    
        if (!password) {
            newErrorMessages.password = '*Please enter your password';
        }
    
        if (!confirmPassword) {
            newErrorMessages.confirmPassword = '*Please confirm your password';
        } else if (password !== confirmPassword) {
            newErrorMessages.confirmPassword = '*Passwords do not match';
        }
    
        if (Object.keys(newErrorMessages).length > 0) {
            setErrorMessages(newErrorMessages);
            return;
        }
    
        setLoading(true);
    
        try {
            const response = await axios.post('http://localhost:8989/api/v1/auth/register', { email, name, password });
            localStorage.setItem('jwtToken', response.data.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;  
            const userResponse = await axios.post('http://localhost:8989/user/saveSignIn', { user_name: name, email });
            setName(userResponse.data.name);
            
            const idResponse = await axios.get(`http://localhost:8989/user/getSignIn/${email}`);
            localStorage.setItem('id', idResponse.data.user_id);
            localStorage.setItem('email', idResponse.data.email);
            idResponse.data.status='active';
            console.log(idResponse.data)
            const statusResponse=await axios.post("http://localhost:8989/user/saveSignIn",idResponse.data);
            // console.log(idResponse.data);
    
            toast({
                position: 'top-right',
                title: 'Account Created Successfully',
                description: 'You have Created Your Account Successfully in Edu_Aid',
                status: 'success',
                duration: 5000,
                isClosable: true,
                variant: 'left-accent'
            });
    
            navigate('/user/dashboard');
        } catch (error) {
            toast({
                position: 'top-right',
                title: 'Account Exists',
                description: 'The Specified EmailID is Already Exists',
                status: 'error',
                duration: 5000,
                isClosable: true,
                variant: 'left-accent'
            });
        } finally {
            setLoading(false);
        }
    };
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        //  console.log(name+" "+value);
        // Update state based on input name
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }

        // Clear error message for the field when user starts typing
        setErrorMessages({
            ...errorMessages,
            [name]: ''
        });
    };

    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
                style={{
                    backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url(${image})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'fixed',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}>
                <a href="#" className="flex fixed top-5 left-10 mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
                    Edu<span className='text-teal-600'> Aid</span>
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border-gray-900 md:mt-0 sm:max-w-md xl:p-0  dark:bg-transparent"
                    style={{
                        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3))`,
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundPosition: 'fixed',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            Create an <span className='text-teal-700'>account..</span>
                        </h1>

                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="sanjeevi"

                                />
                            </div>
                            {errorMessages.name && (
                                <b className="text-red-500 text-xs">{errorMessages.name}</b>
                            )}

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"

                                />
                            </div>
                            {errorMessages.email && (
                                <b className="text-red-500 text-xs">{errorMessages.email}</b>
                            )}

                            <div className='flex justify-between'>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={handleInputChange}
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirm-password"
                                        value={confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                    />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className="w-full">
                                    {errorMessages.password && (
                                        <b className="text-red-500 text-xs">{errorMessages.password}</b>
                                    )}
                                </div>
                                <div className="w-full">
                                    <b className='text-red-500 text-xs'>{errorMessages.confirmPassword}</b>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        name="termsAccepted"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"

                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                        I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a>
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className={`w-full bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={loading}
                            >
                                {loading ? <Spinner color='teal.200' /> : 'Create an account'}
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-teal-700" onClick={() => navigate("/login")}>Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpForm;
