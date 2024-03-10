import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Spinner,useToast, } from '@chakra-ui/react';
import Logo from '../assets/images/logo.png';
import image from '../assets/images/back.gif';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorEmailMessage, setEmailErrorMessage] = useState('');
  const [errorPasswordMessage, setPasswordErrorMessage] = useState('');
  const dispatch = useDispatch();
  const toast=useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email===''){
        setEmailErrorMessage("*Enter Your Email");
    }
    if(password==''){
      setPasswordErrorMessage("*Enter Your Password");
    }
    else{
    dispatch(login({ username: email }));
    
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        axios
        .post('http://localhost:8989/api/v1/auth/authenticate', { email: email, password: password })
        .then(async (response) => {
          const token = response.data.token;
          console.log(email)
          console.log(token);
          
          localStorage.setItem('jwtToken', token);
          if(email==='admin@gmail.com'){
            localStorage.setItem('email', email); 
            navigate('/admin/dashboard');
          }
          // Set Authorization header for subsequent requests

          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;  
      
          const idResponse = await axios.get(`http://localhost:8989/user/getSignIn/${email}`);
          localStorage.setItem('id', idResponse.data.user_id);
          localStorage.setItem('email', idResponse.data.email); 
          idResponse.data.status = 'active';
          console.log(idResponse.data)
          const statusResponse = await axios.post("http://localhost:8989/user/saveSignIn", idResponse.data);
          navigate('/user/dashboard');
          toast({
            position: 'top-right',
            title: 'Login Successfully',
            description: 'You have successfully logged in.',
            status: 'success',
            duration: 5000,
            variant: 'top-accent',
            isClosable: true,
          });
        })
        .catch((error) => {
          setErrorMessage("Enter Valid Credentials");
          console.log(error);
        });
      

    }, 2000);
  }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url(${image})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'fixed',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
        className=" min-h-screen flex items-center justify-center"
      >
        <a href="#" className="flex fixed top-7 left-10 mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
          Edu<span className='text-teal-600'> Aid</span>
        </a>

        <div className="sm:w-full max-w-md bg-white rounded-lg shadow-md dark:border dark:bg-transparent dark:border-gray-700"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3))`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'fixed',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="p-6 space-y-4 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Sign in to your <span className='text-teal-700'>account..</span>
            </h1>
            <form className="space-y-4 md:space-y-6 px-4" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) =>{setEmailErrorMessage(""); setEmail(e.target.value)}}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              <p className='text-red-600 text-xs'>{errorEmailMessage}</p>
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => {setPasswordErrorMessage("") ;setPassword(e.target.value)}}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                  <p className='text-red-600 text-xs'>{errorPasswordMessage}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-teal-100 hover:underline dark:text-primary-500">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className={`w-full bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? <Spinner color='teal.200' /> : 'Signin'}
              </button>
              {errorMessage && (
                <p className="text-red-500 text-center mt-2">{errorMessage}</p>
              )}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Don’t have an account yet?{' '}
                <Link to="/signup" className="font-medium text-teal-600 hover:underline dark:text-primary-500">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
