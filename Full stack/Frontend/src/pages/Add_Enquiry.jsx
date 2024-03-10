import { Spinner ,Text,useToast} from '@chakra-ui/react'
import SideBar from '../components/Side_Bar';
import { studentlinks } from '../assets/constants/Side_Constants';
import { useEffect, useState } from 'react';
import Enquiry from '../assets/images/enquiry.png'
import axios from 'axios';

function Course() {
  const [loading, setLoading] = useState(false);
  const [enquiry, setEnquiry] = useState({});
  const [user, setUser] = useState({});
  const [course, setCourse] = useState({});
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [description,setDescription]=useState('');
  const toast=useToast();
  const token=localStorage.getItem('jwtToken');
  
      useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
    axios.get('http://localhost:8989/getAllCourses').then((response) => {
      setAllCourses(response.data);
    });
  }, []);

  const handleCourseChange = (e) => {
    setSelectedCourseId(e.target.value);
    // Fetch course data based on the selected course ID
    axios.get(`http://localhost:8989/getCourses/${e.target.value}`).then((response) => {
      setCourse(response.data);
      // console.log(course)
    });
  };

  useEffect(() => {
    const email = localStorage.getItem('email');
    axios.get(`http://localhost:8989/user/getSignIn/${email}`).then((response) => setUser(response.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEnquiry = {
      enquiry_id: 1,
      description: description, // Assuming this is the description from the form
      reply: null, // Assuming this is the reply from the form
      user: user, // Using the user state directly
      courses: course // Using the course state directly
    };
    setEnquiry(newEnquiry); // Set the enquiry state with the updated data
    setLoading(true);
    try {
      // Post the enquiry data directly
      const response = await axios.post("http://localhost:8989/user/postEnquiry", newEnquiry);
      toast({
        position: 'top-right',
        title: 'Enquiry Added Successfully',
        description: 'You have Posted the Enquiry',
        status: 'success',
        duration: 5000,
        variant:'top-accent',
        isClosable: true,
    });
      // Handle response if needed
      console.log("Enquiry posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting enquiry data:", error);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className='flex'>
      <SideBar links={{ studentlinks: studentlinks, currentlinks: 'Add Enquiry' ,role:'admin'}} />
      <section class="bg-gray-50 dark:bg-gray-700 w-full ">
        <div class="flex flex-row px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className=' bg-gray-800' style={{width:"40%", borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
            <div className='flex justify-center'><img src={Enquiry} width='120' ></img></div> 
            <Text className='p-4 text-white leading-relaxed'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We appreciate your interest in our courses and welcome your inquiries about the subjects we offer. To ensure a smooth and efficient process, we kindly request that you adhere to the following rules when submitting an enquiry. First, please provide accurate and detailed information regarding the specific subjects or courses you are interested in. This will help our team better understand your needs and provide you with relevant and timely assistance. Additionally, ensure that your contact details are correct, including a valid email address and phone number, so that we can reach out to you promptly. We value clear communication and look forward to assisting you on your educational journey.</Text>
          </div>
          <div class="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" style={{borderTopRightRadius:10,borderBottomRightRadius:10}}>
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Give Your Enquiry here....
            </h1>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form class="space-y-4 md:space-y-6 display-flex" action="#">
                <div className='flex space-x-3'>
                  <div style={{ width: '50%' }}>
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Course
                    </label>
                      <select
                        id="course"
                        name="course"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        value={selectedCourseId}
                        onChange={handleCourseChange}
                      >
                        {/* You can add the options dynamically if needed */}
                        <option value="" disabled selected>
                          Select a course
                        </option>
                        {allCourses.map((course) => (
                          <option key={course.course_id} value={course.course_id}>
                            {course.course_name}
                          </option>
                        ))}
                      </select>
                  </div>
                  {/* You can add other fields here */}
                </div>
                <div>
                  <label htmlFor="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text" name="description" id="password" placeholder="Write text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? <Spinner color='teal.200' /> : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Course;
