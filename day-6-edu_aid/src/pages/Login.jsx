import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import Logo from '../assets/images/logo.png';
import image from '../assets/images/back.gif';

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating an asynchronous login request
    setTimeout(() => {
      setLoading(false);

      // Check the email and navigate accordingly
      if (email === 'admin@gmail.com') {
        navigate('/admin/dashboard');
      } else if (email === 'student@gmail.com') {
        navigate('/user/dashboard');
      } else {
        // Handle other cases or show an error message
        setErrorMessage('Invalid email');
      }
    }, 2000);
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
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
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
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
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
